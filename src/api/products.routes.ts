import { Router } from 'express'

import { celebrate, Joi, Segments } from 'celebrate'

import { Route } from '@core/common/Route'
import { productsController } from './products.controller'

class ProductsRoutes extends Route {

  applyRoutes(router: Router): void {
    router.get(
      '/products',
      celebrate({
        [Segments.QUERY]: {
          search: Joi.string(),
        },
      }),
      productsController.index
    )

    router.post(
      '/products',
      celebrate({
        [Segments.BODY]: {
          name: Joi.string().required(),
          price: Joi.number().required()
        },
      }),
      productsController.create
    )


  }

}

export const productsRoutes = new ProductsRoutes()
