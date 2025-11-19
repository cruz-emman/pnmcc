import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export const PartnershipContent = () => {

    const testimonials = [
        {
            quote:
                "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
            name: "Charles Dickens",
            title: "A Tale of Two Cities",
        },
        {
            quote:
                "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
            name: "William Shakespeare",
            title: "Hamlet",
        },
        {
            quote: "All that we see or seem is but a dream within a dream.",
            name: "Edgar Allan Poe",
            title: "A Dream Within a Dream",
        },
        {
            quote:
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
            name: "Jane Austen",
            title: "Pride and Prejudice",
        },
        {
            quote:
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
            name: "Herman Melville",
            title: "Moby-Dick",
        },
    ];

    const content = [
        {
            title: "Collaborative Editing",
            description:
                "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                    Collaborative Editing
                </div>
            ),
        },
        {
            title: "Real time changes",
            description:
                "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white">
                    <img
                        src="/linear.webp"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Version control",
            description:
                "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                    Version control
                </div>
            ),
        },
        {
            title: "Running out of content",
            description:
                "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                    Running out of content
                </div>
            ),
        },
    ];
    return (
        <div className='pb-20 pt-20 w-full' id="partners">
            <h1 className='relative z-10 mx-auto max-w-4xl text-center text-2xl font-medium text-slate-700 tracking-tight md:text-4xl lg:text-3xl dark:text-slate-300'>
                Partners
            </h1>
            <StickyScroll content={content} />
            <div className="h-[40rem] max-w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="fast"
                />
            </div>
        </div>
    )
}
