import React from 'react'
import { Separator } from '../ui/separator'
import { SubmissionHeaderContent } from './submissions/submission-header-content'

export const PaperSubmissionContent = () => {
  return (
    <>
      <SubmissionHeaderContent />
      <div className='flex flex-col gap-2 mt-2'>
        <h2 className='text-3xl font-semibold text-muted-foreground'>Guidelines in preparing the abstract</h2>
        <ol className='pl-8 list-decimal'>
          <li>All papers and posters should be prepared in English</li>
          <li>The tital should be centered, bold, upper and lower case, font size: 12, font-type: Times New Roman</li>
          <li>Author(s) should be centered, uppser and lower case, font size: 11; authors shoud use first name and surname with the presenting author underlined and asterisk.</li>
          <li>Affiliation should be centered, upper and lower case. If authors are from different instituions, indicate with superscrips their respective affiliations. Include the email address of the presenting author to enable intereseted parties to contact the author. </li>
          <li>The abstract should be 250-400 words, a single paragraph, and no subtitles. The abstract should fit on one page.</li>
          <li>The introduction should be contain the scope and purpose of the work in 2-3 short sentences only.</li>
          <li>The methodolgy should be described briefly.</li>
          <li>The highlight off the results should be presented only.</li>
          <li>Uncommon acronyms should be spelled out the first time they are used.</li>
          <li>Only the major conclusions should be stated.</li>
          <li>No more than five keywords should be mentioned.</li>
          <li>Ethical approval for research involving humans should be mentioned.</li>
        </ol>
      </div>
    </>
  )
}
