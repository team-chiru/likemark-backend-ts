import * as express from 'express'
import { Router } from '../node_modules/@types/express-serve-static-core/index'
import { router as route } from './app/routes/entity'
import { routerTest as routeTest } from './app/routes/test'

export class AppRouter {
  private _app: any
  private _mainRoute: string

  // mainRoute parameter is a path for express router.
  constructor (mainRoute: string) {
    this._mainRoute = mainRoute
    // Initialise express Router
    this._app = express()
    // Initialise the main route for express.
    this._app.use(this._mainRoute, route)
    this._app.use(this._mainRoute, routeTest)
  }

  get app (): any {
    return this._app
  }
}
