"use client"
import React, { useState } from 'react'
import { motion } from "motion/react";
import { ChevronDown, Cpu, Flag, MonitorSmartphone } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';



const FieldsCard = [
    {
        id: 1,
        title: "Humanities, Education, and Social Sciences",
    },
    {
        id: 2,
        title: "Business, Economics, and Information System",
    },
    {
        id: 3,
        title: "Sceinces, Engineering, and Health",
    },
]


const AimsCard = [
    {
        id: 1,
        title: "Promose Future-Ready Thinking with critical thinking, creativity and adaptability; Contributing to SDG4: Quality Education.",
    },
    {
        id: 2,
        title: "Endeavor Responsiveness to proffesional and industiry trends and needs; Contributing to SDG9L Industry, Innovation and Infrastructure.",
    },
    {
        id: 3,
        title: "Foster Academic Exchange of ideas and innovations; Contribtuing to SDF17: Partnerships for the Goals.",
    },
]

export const AboutUsContent = () => {

    return (
        <motion.div
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
            className='py-10 relative flex items-center flex-col gap-2 ' id="about">
            <h2 className='text-4xl font-semibold tracking-tight pb-10'>Vision, Mission and Aims</h2>
            <section className='relative w-full flex items-center justify-center '>
                <Image
                    alt='svg'
                    src="/aboutus/vector4.svg"
                    width={1200}
                    height={20}
                    style={{ top: '10px' }}

                    className="absolute hidden md:block z-0"
                />
                <div className='w-full flex items-center justify-center z-10 flex-col'>
                    <div className='flex flex-col  items-center w-full pb-10'>
                        <h2 className="text-2xl text-gray-700 tracking-tight pb-8">
                            Tri-Focal Fields of Study
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full '>
                            {FieldsCard.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className='text-muted-foreground leading-relaxed text-md text-center'>
                                        {item.title}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col  items-center w-full pb-10'>
                        <h2 className="text-2xl text-gray-700 tracking-tight pb-8">
                            Aims of the Congress
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full '>
                            {AimsCard.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className='text-muted-foreground leading-relaxed text-md text-center'>
                                        {item.title}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <section className="w-full pt-50">

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold tracking-tight">
                        The Future of Human–AI Collaboration
                    </h2>
                    <p className="text-muted-foreground mt-3 text-lg">
                        Exploring innovation, evolution, and partnership in the age of artificial intelligence.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">

                    <div>
                        <div className="flex justify-center ">
                            <Image
                                alt="Innovation Icon"
                                src="/aboutus/bulb.svg"
                                width={40}
                                height={40}
                                className="text-muted-foreground"
                            />
                        </div>
                        <Card className="shadow-none border-0">
                            <CardHeader>
                                <CardTitle className="text-xl font-medium">Innovation </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed text-md text-justify">
                                We stand at the threshold of a new era, defined by unprecedented technology evolution.
                                The integration of artificial intelligence into every facet of our lives is no longer
                                distant concept, but a present reality that is reshaping industries, professions, and
                                our fundamental way of working.
                            </CardContent>
                        </Card>
                    </div>

                    <div className="hidden md:flex justify-center">
                        <div className="w-px bg-muted h-full"></div>
                    </div>

                    <div>
                        <div className="flex justify-center">
                            <Image
                                alt="Innovation Icon"
                                src="/aboutus/evolution.svg"
                                width={40}
                                height={40}
                                className="text-muted-foreground"
                            />
                        </div>
                        <Card className="shadow-none border-0">
                            <CardHeader>
                                <CardTitle className="text-xl font-medium">Evolution</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed text-md text-justify">
                                While this rapid advancement has often framed as a "disruption", we believe it is much
                                more--it is an invitation to forge a new partnership. The TRIICON with a theme "Beyond
                                discussion the impact of AI. It is collaborative platform dedicated to exploring how
                                human ingenuity and artificial intelligence can combine to create a powerful,
                                symbiotic relationships.
                            </CardContent>
                        </Card>
                    </div>

                    <div className="hidden md:flex justify-center">
                        <div className="w-px bg-muted h-full"></div>
                    </div>

                    <div>
                        <div className="flex justify-center">
                            <Image
                                alt="Innovation Icon"
                                src="/aboutus/robot.png"
                                width={70}
                                height={70}
                                className="text-muted-foreground"
                            />
                        </div>
                        <Card className="shadow-none border-0">
                            <CardHeader>
                                <CardTitle className="text-xl font-medium">Partnership</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed text-md text-justify">
                                We will move past anxieties of displacement to uncover the immense potential that lies
                                at the intersection of human creativity, empathy, and critical thinking with analytical
                                power of AI.
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>
        </motion.div>


    )
}
