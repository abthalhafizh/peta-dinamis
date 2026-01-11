'use server';

import { revalidatePath } from 'next/cache';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'locations.json');

export interface LocationData {
    name: string;
    description: string;
    category: string;
    latitude: number;
    longitude: number;
}

export interface Location extends LocationData {
    id: number;
    createdAt: number;
}

// Helper to read locations from JSON file
function readLocations(): Location[] {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(fileContent);
        }
        return [];
    } catch (error) {
        console.error('Error reading locations:', error);
        return [];
    }
}

// Helper to write locations to JSON file
function writeLocations(locations: Location[]): boolean {
    try {
        // Ensure directory exists
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(DATA_FILE, JSON.stringify(locations, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error('Error writing locations:', error);
        return false;
    }
}

export async function addLocation(data: LocationData) {
    try {
        const locations = readLocations();
        const newId = locations.length > 0 ? Math.max(...locations.map(l => l.id)) + 1 : 1;
        const newLocation: Location = {
            ...data,
            id: newId,
            createdAt: Date.now(),
        };
        locations.unshift(newLocation); // Add to beginning
        writeLocations(locations);
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error adding location:', error);
        return { success: false, error: 'Failed to add location' };
    }
}

export async function getLocations() {
    try {
        const data = readLocations();
        return { success: true, data };
    } catch (error) {
        console.error('Error getting locations:', error);
        return { success: false, data: [] };
    }
}

export async function updateLocation(id: number, data: LocationData) {
    try {
        const locations = readLocations();
        const index = locations.findIndex(l => l.id === id);
        if (index === -1) {
            return { success: false, error: 'Location not found' };
        }
        locations[index] = { ...locations[index], ...data };
        writeLocations(locations);
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error updating location:', error);
        return { success: false, error: 'Failed to update location' };
    }
}

export async function deleteLocation(id: number) {
    try {
        const locations = readLocations();
        const filtered = locations.filter(l => l.id !== id);
        writeLocations(filtered);
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error deleting location:', error);
        return { success: false, error: 'Failed to delete location' };
    }
}

