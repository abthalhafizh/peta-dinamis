'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Landmark, BookHeart, School, Building2, MapPin, Calendar } from 'lucide-react';

export default function HeritageSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const heritages = [
        {
            title: 'Kantor Kelurahan Kemasan',
            subtitle: 'Pusat Pelayanan Masyarakat',
            location: 'Desa Kemasan',
            description: 'Pusat administrasi dan pelayanan publik Desa Kemasan yang melayani berbagai kebutuhan warga seperti pembuatan surat-surat, KTP, dan administrasi kependudukan lainnya.',
            highlights: [
                'Pelayanan administrasi terpadu',
                'Pusat informasi desa',
                'Balai pertemuan warga',
            ],
            icon: Building2,
            color: 'from-pink-500 to-rose-600',
            year: 'Aktif',
        },
        {
            title: 'Fasilitas Pendidikan',
            subtitle: 'Sarana Belajar Berkualitas',
            location: 'Desa Kemasan',
            description: 'Desa Kemasan memiliki berbagai fasilitas pendidikan mulai dari SD, MI, SLB, hingga SMK yang melayani kebutuhan pendidikan masyarakat sekitar.',
            highlights: [
                'SDN Kemasan',
                'MI Al Ahmad',
                'SMK Pemuda Krian',
            ],
            icon: School,
            color: 'from-rose-500 to-fuchsia-600',
            year: 'Aktif',
        },
    ];

    return (
        <section
            id="warisan"
            ref={ref}
            className="relative py-24 bg-muted/30"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
                        <Landmark className="w-4 h-4" />
                        Fasilitas Desa
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Fasilitas{' '}
                        <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                            Desa Kemasan
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Berbagai fasilitas publik yang tersedia untuk mendukung aktivitas warga Desa Kemasan.
                    </p>
                </motion.div>

                {/* Heritage Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {heritages.map((heritage, index) => (
                        <motion.div
                            key={heritage.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="h-full p-8 rounded-3xl bg-white dark:bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${heritage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Header */}
                                <div className="relative flex items-start gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${heritage.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                        <heritage.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{heritage.title}</h3>
                                        <p className="text-sm text-muted-foreground">{heritage.subtitle}</p>
                                    </div>
                                </div>

                                {/* Meta Info */}
                                <div className="relative flex flex-wrap gap-4 mb-4 text-sm">
                                    <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <MapPin className="w-4 h-4" />
                                        {heritage.location}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        {heritage.year}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="relative text-muted-foreground mb-6">
                                    {heritage.description}
                                </p>

                                {/* Highlights */}
                                <div className="relative space-y-2">
                                    {heritage.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${heritage.color}`} />
                                            <span className="text-foreground">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
