'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            id="beranda"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-fuchsia-950/20" />

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-rose-400/30 to-fuchsia-400/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl"
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                        <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
                            Sistem Informasi Geografis
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-foreground">Jelajahi</span>
                        <br />
                        <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
                            Desa Kemasan
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        Peta interaktif untuk menjelajahi wilayah Desa Kemasan,
                        Kecamatan Krian, Kabupaten Sidoarjo, Jawa Timur.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="group bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 text-lg px-8 py-6"
                        >
                            <Link href="/peta">
                                <MapPin className="w-5 h-5 mr-2" />
                                Buka Peta Interaktif
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="text-lg px-8 py-6 border-2 hover:bg-muted/50"
                        >
                            <a href="#tentang">Pelajari Lebih Lanjut</a>
                        </Button>
                    </motion.div>

                    {/* Stats Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                    >
                        {[
                            { value: '52', unit: 'Ha', label: 'Luas Wilayah' },
                            { value: '4', unit: 'RW', label: 'Rukun Warga' },
                            { value: '16', unit: 'RT', label: 'Rukun Tetangga' },
                            { value: '7', unit: 'mdpl', label: 'Elevasi' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="p-4 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10"
                            >
                                <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400">
                                    {stat.value}
                                    <span className="text-lg">{stat.unit}</span>
                                </div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
