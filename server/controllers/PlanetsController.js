import { planetsService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
      .post('', this.createPlanet)
  }

  async createPlanet(req, res, next) {
    try {
      const planet = await planetsService.createPlanet(req.body)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      const planets = await planetsService.getPlanets(req.query)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}
