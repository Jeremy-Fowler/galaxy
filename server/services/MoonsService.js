import { dbContext } from '../db/DbContext'

class MoonsService {
  async getMoons(query) {
    const moons = await dbContext.Moons.find(query)
    return moons
  }

  async createMoon(moonData) {
    const moon = await dbContext.Moons.create(moonData)
    return moon
  }
}

export const moonsService = new MoonsService()
