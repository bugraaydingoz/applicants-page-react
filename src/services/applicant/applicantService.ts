import { lowerCase } from 'lodash-es'
import { Applicant, Status } from './types'
import { applicants } from './data'
import { delayFor, random } from '../utils'
import { UrlQuery, UrlQueryValues } from '../../hooks/useUrlQuery'

export class ApplicantService {
  static async getAll(): Promise<Applicant[]> {
    // Mock server response time
    await delayFor(random(200, 1200))

    // Mock server error
    if (random(1, 10) < 3) {
      throw new Error("Applicants couldn't fetched")
    }

    return applicants
  }

  static filter(applicants: Applicant[] = [], urlQuery: UrlQuery) {
    const stats: { [key: string]: number } = { total: applicants.length }
    const groups = Object.entries(Status).map(([key, status]) => {
      const applicantGroup = applicants?.filter((app) => app.status === status)
      stats[lowerCase(key)] = applicantGroup.length

      const filteredApplicants = applicantGroup.filter((applicant) =>
        filter(urlQuery, applicant)
      )

      return {
        key: lowerCase(key),
        data: filteredApplicants ?? [],
      }
    })

    return { groups, stats }
  }
}

function filter(urlQuery: UrlQuery, applicant: Applicant) {
  const { search, minBid, maxBid } = getUrlValues(urlQuery)

  if (search && filterByText(search, applicant)) {
    return false
  }

  if (minBid && applicant.bid && applicant.bid < minBid) {
    return false
  }

  if (maxBid && applicant.bid && applicant.bid > maxBid) {
    return false
  }

  return true
}

function getUrlValues(urlQuery: UrlQuery): UrlQueryValues {
  const { search, minBid, maxBid } = urlQuery
  return {
    search: search ? search : null,
    minBid: minBid ? Number(minBid) : null,
    maxBid: maxBid ? Number(maxBid) : null,
  }
}

function filterByText(search: string, applicant: Applicant) {
  const { firstName, lastName, emailAddress } = applicant
  const textFields = [
    firstName.toLowerCase(),
    lastName.toLowerCase(),
    emailAddress.toLowerCase(),
  ]
  return !textFields.some((field) => field.includes(search.toLowerCase()))
}
