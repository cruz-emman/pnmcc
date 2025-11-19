"use client"
import React, { useState } from 'react'
import { motion } from "motion/react";
import { ChevronDown } from 'lucide-react';
import { Separator } from '../ui/separator';

const objectives = [
    {
        id: 1,
        title: "Central Secretariat",
        short: "Permanent hub for culture collections",
        full: "To provide a permanent secretariat for member Philippine microbial culture collections and serve as a central contact point for Philippine scientists and institutions seeking advice on microbiological materials.",
        icon: <img src="/pnmcc/archive.svg" alt='logo' />
    },
    {
        id: 2,
        title: "Effective Liaison",
        short: "Connect researchers and organizations",
        full: "To establish an effective liaison between individuals and organizations concerned with culture collections and among the users of the cultures.",
        icon: <img src="/pnmcc/user.svg" alt='logo' />
    },
    {
        id: 3,
        title: "Information Hub",
        short: "Centralize strain data and services",
        full: "To collect information on the strains and services offered by the various affiliated microbial culture collections.",
        icon: <img src="/pnmcc/device-desktop-star.svg" alt='logo' />
    },
    {
        id: 4,
        title: "Resource Promotion",
        short: "Showcase microbial expertise",
        full: "To publicize the microbial resources and technical expertise within the affiliated microbial culture collections through printed and visual materials for distribution.",
        icon: <img src="/pnmcc/stack-3.svg" alt='logo' />
    },
    {
        id: 5,
        title: "Standardization",
        short: "Lead procedural excellence",
        full: "To lead in the standardization and upgrading of procedures for the isolation, characterization, conservation, distribution of microorganisms and biosafety through trainings and seminars.",
        icon: <img src="/pnmcc/folder-minus.svg" alt='logo' />
    },
    {
        id: 6,
        title: "Strain Directory",
        short: "Maintain updated microorganism database",
        full: "To maintain and update PNMCC Directory of Strains that include location of, and information about, microorganisms maintained in affiliated microbial culture collections.",
        icon: <img src="/pnmcc/archive.svg" alt='logo' />
    },
];

export const AboutUsContent = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <div className='pb-20 pt-20' id="about">
            <div className='flex flex-col w-full gap-10'>
                <div className='flex items-center flex-col gap-2'>
                    <h1 className='relative z-10 mx-auto max-w-4xl text-center text-2xl font-medium text-slate-700 tracking-tight md:text-4xl lg:text-3xl dark:text-slate-300'>
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 1 * 0.1,
                                ease: "easeInOut",
                            }}
                            className="mr-2 inline-block"
                        >
                            The Inter-Agency network serving as the national repository of microorganisms in the Philippines.
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.8,
                        }}
                        className="relative z-10 mx-auto max-w-xl py-2 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
                    >
                        Organized through DOST support and composed of leading microbial culture collections from premier Philippine research institutions, working collaboratively to advance microbiological excellence.
                    </motion.p>
                </div>

                <div className='flex flex-col gap-6'>

                    <h1 className='relative z-10 mx-auto max-w-4xl text-center text-2xl font-medium text-slate-700 tracking-tight md:text-2xl lg:text-2xl dark:text-slate-300'>
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 1 * 0.1,
                                ease: "easeInOut",
                            }}
                            className="mr-2 inline-block"
                        >
                            General Objectives
                        </motion.span>
                    </h1>
                    <ul className='mt-4 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3'>
                        {objectives.map((obj, index) => (
                            <motion.li
                                key={obj.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className='group rounded-lg border border-gray-200 dark:border-gray-700 p-6 relative cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 transition-colors'
                                onClick={() => setExpandedId(expandedId === obj.id ? null : obj.id)}
                            >
                                <div className='relative z-10'>
                                    <div className='flex items-start justify-between gap-3'>
                                        <div className='flex-1'>
                                            <h3 className='font-semibold text-gray-900 flex items-center justify-center gap-2 dark:text-gray-100 text-lg leading-tight'>
                                                {obj.icon}
                                                {obj.title}
                                            </h3>
                                            <p className='mt-2 text-gray-600 dark:text-gray-400 text-center text-lg leading-relaxed'>
                                                {obj.short}
                                            </p>
                                        </div>

                                    </div>
                                    <Separator className="my-4" />
                                    <p className='text-gray-700 dark:text-gray-300 text-md leading-relaxed'>
                                        {obj.full}
                                    </p>

                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
