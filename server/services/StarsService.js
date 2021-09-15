import { dbContext } from '../db/DbContext'

class StarsService {
  async createStar(starData) {
    const star = await dbContext.Stars.create(starData)
    return star
  }

  async getStars(query) {
    const stars = await dbContext.Stars.find(query)
    return stars
  }
}

export const starsService = new StarsService()
