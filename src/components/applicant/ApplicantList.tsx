import React from 'react'
import type { Applicant as ApplicantType } from '../../services/applicant'

// Components
import { Applicant } from './Applicant'

// Styles
import { Applicants } from './styles'
import { H4 } from '../shared/typography'

interface Props {
  title: string
  applicants: ApplicantType[]
}

export function ApplicantList({ title, applicants }: Props) {
  return (
    <>
      <H4
        style={{ marginBottom: 'var(--space-md)' }}
      >{`${title} (${applicants.length})`}</H4>

      <Applicants>
        {applicants.map((applicant) => (
          <Applicant key={applicant.id} {...applicant} />
        ))}
      </Applicants>
    </>
  )
}
