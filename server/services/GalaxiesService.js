import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }

  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    if (
      (!galaxies || !galaxies.length) &&
      Object.keys(query).length) {
      throw new BadRequest('No matching courses')
    }
    return galaxies
  }
}

export const galaxiesService = new GalaxiesService()
