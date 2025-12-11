import React from 'react'
import { SubmissionHeaderContent } from './submissions/submission-header-content'

export const PosterSubmissionContent = () => {
  return (
    <>
    <>
      <SubmissionHeaderContent />
      <div className='flex flex-col gap-2 mt-2'>
        <h2 className='text-3xl font-semibold text-muted-foreground'>Guidelines in preparing poster or e-poster</h2>
        <ol className='pl-8 list-decimal'>
          <li>The author presenting the paper must register to attend the conference and be available to particpate in the program at the time schedulued.</li>
          <li>Poster of registered participants will be displayed in the e-poster gallery or be available to present onsite.</li>
          <li>The poster layout should be in portrait. The deimension is 30 inches by 40 inches. At least 1 centimeter border on all sides.</li>
          <li>Avoid overcrowding the poster with too much text. Use of tables and figures that can stand alone in highly recommended.</li>
          <li>For e-posters, it should be submitted either as JPEG or TIFF only.</li>
        </ol>
      </div>
    </>
    </>
  )
}
