'use server';

import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const ADMINS_FILE = path.join(process.cwd(), 'data', 'admins.json');

interface Admin {
    id: number;
    username: string;
    passwordHash: string;
}

// Helper to read admins from JSON file
function readAdmins(): Admin[] {
    try {
        if (fs.existsSync(ADMINS_FILE)) {
            const fileContent = fs.readFileSync(ADMINS_FILE, 'utf8');
            return JSON.parse(fileContent);
        }
        return [];
    } catch (error) {
        console.error('Error reading admins:', error);
        return [];
    }
}

export async function login(username: string, password: string) {
    try {
        const admins = readAdmins();
        const admin = admins.find(a => a.username === username);

        if (!admin) {
            return { success: false, error: 'Username atau password salah' };
        }

        // Verify password
        const isValid = await bcrypt.compare(password, admin.passwordHash);

        if (!isValid) {
            return { success: false, error: 'Username atau password salah' };
        }

        // Create session token (simple implementation)
        const sessionToken = Buffer.from(
            JSON.stringify({
                id: admin.id,
                username: admin.username,
                exp: Date.now() + SESSION_MAX_AGE * 1000,
            })
        ).toString('base64');

        // Set cookie
        const cookieStore = await cookies();
        cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: SESSION_MAX_AGE,
            path: '/',
        });

        return { success: true };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Terjadi kesalahan saat login' };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
    return { success: true };
}

export async function getSession() {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

        if (!sessionCookie) {
            return null;
        }

        const session = JSON.parse(
            Buffer.from(sessionCookie.value, 'base64').toString('utf-8')
        );

        // Check if session expired
        if (session.exp < Date.now()) {
            await logout();
            return null;
        }

        return {
            id: session.id,
            username: session.username,
        };
    } catch {
        return null;
    }
}

