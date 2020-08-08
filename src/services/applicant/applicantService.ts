import { Applicant } from './types'
import { applicants } from './data'

function delayFor(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), milliseconds)
  })
}

export class ApplicantService {
  static async getAll(): Promise<Applicant[]> {
    // Mock server response time
    await delayFor(500)
    return applicants
  }
}
