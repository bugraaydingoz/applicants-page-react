import React from 'react'
import type { Applicant as ApplicantType } from '../../services/applicant'

// Components
import { Applicant } from './Applicant'

// Styles
import { Applicants, ApplicantMock, LoadingBar } from './styles'
import { H4 } from '../shared/typography'

interface Props {
  title: string
  applicants: ApplicantType[]
  loading: boolean
}

export function ApplicantList({ title, applicants, loading }: Props) {
  if (loading) {
    return (
      <>
        <LoadingBar />
        <Applicants>
          <ApplicantMock />
          <ApplicantMock />
          <ApplicantMock />
          <ApplicantMock />
        </Applicants>
      </>
    )
  }

  if (!applicants.length) {
    return <></>
  }

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
