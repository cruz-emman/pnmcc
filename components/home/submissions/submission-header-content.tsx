import { Separator } from '@/components/ui/separator'

export const SubmissionHeaderContent = () => {
    return (
        <main className='flex flex-col items-start gap-2 my-10'>
            <h2 className='text-4xl font-normal '><span className='font-semibold'>Theme: </span>Beyond Disruptions:
                The Human-AI Synergy and the New Blueprint for Success in the Humanities, Sciences, and Business.</h2>

            <div className='flex flex-col'>
                <p className='text-lg tracking-tighter'><span className='font-semibold'>Congress Dates:</span> May 7-9, 2026</p>
                <p className='text-lg font-semibold tracking-tighter'>Call for Papers and Posters</p>
            </div>
            <Separator className='my-2' />
            <div className='flex flex-col gap-2'>
                <p>Trinity University of Asia is now accepting papers for the Trinity International Congress (TRIICON) 2025 Paper and Poster Sessions in the line with this year's theme: <span className='font-semibold'>
                    "Beyond Disruptions:
                    The Human-AI Synergy and the New Blueprint for Success in the Humanities, Sciences, and Business."</span>
                </p>
                <div className=''>
                    <p className='pb-2'>The paper and e-poster presention categories are as follows: </p>
                    <ul className='pl-8 flex flex-col list-disc'>
                        <li>Humanities, Education and Social Sciences</li>
                        <li>Business, Economics and Information Systems</li>
                        <li>Sciences, Engineering and Health</li>
                    </ul>
                </div>
                <p>The papers and e-posters must be original or have not been presented in any other forum, event or competition, The study must have been completed within the last 5 years. Authors are requested to submit their abstracts at <span className='font-semibold'>TRIICON 2026</span> not later than <span className='font-semibold'>January 15, 2026</span>. All submitted papers and e-psoter will be peer-reviewed. The corresponding author will be notified through email. The best paper and e-poster will be announced on the final congress.</p>
            </div>

        </main>
    )
}
