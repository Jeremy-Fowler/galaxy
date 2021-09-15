import { dbContext } from '../db/DbContext'

class PlanetsService {
  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

  async getPlanets(query) {
    const planets = await dbContext.Planets.find(query)
    return planets
  }
}

export const planetsService = new PlanetsService()
