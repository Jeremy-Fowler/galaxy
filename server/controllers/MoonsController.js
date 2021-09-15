import { moonsService } from '../services/MoonsService'
import BaseController from '../utils/BaseController'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getMoons)
      .post('', this.createMoon)
  }

  async createMoon(req, res, next) {
    try {
      const moon = await moonsService.createMoon(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async getMoons(req, res, next) {
    try {
      const moons = await moonsService.getMoons(req.query)
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }
}
