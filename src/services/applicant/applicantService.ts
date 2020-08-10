import { Applicant } from './types'
import { applicants } from './data'
import { delayFor, random } from '../utils'

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
}
