import express, { Application } from 'express'
import cors from 'cors'

import "reflect-metadata"
import '@core/common/Injection'

import 'dotenv/config'
import 'express-async-errors'
import { errors } from 'celebrate'

import { environment } from '@core/config/environment'
import { AppGlobalError } from '@core/middlewares/AppGlobalError'
import { Route } from '@core/common/Route'

export class App {

  private application: Application

  constructor() {
    this.application = express()
  }

  public async start(routes: Route[]): Promise<void> {
    this.application.use(cors())
    this.application.use(express.json())

    this.application.get('/', (request, response) => {
      return response.status(200).json({
        service: 'API',
        version: 'version 1.0.0',
        resources: [
          `${environment.app.urlApi}/products`,
        ]
      })
    })

    // Apply routes
    for (let route of routes) {
      route.applyRoutes(this.application)
    }

    // Get errors validation routes (celebrate)
    this.application.use(errors())

    // Get global errors api
    this.application.use(AppGlobalError)
  }

  public async create(routes: Route[] = []): Promise<express.Application> {
    await this.start(routes)
    return this.application
  }

}
