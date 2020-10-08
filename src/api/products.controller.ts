import { Request, Response } from 'express'

import { container } from 'tsyringe'

import * as result from '@core/common/JsonResponse'
import { Product } from '@infrastructure/product.entity'
import { ProductsRepository } from '@infrastructure/products.repository'
import { CreateProductService } from '@domain/create-product.service'

class ProductsController {

  async index(request: Request, response: Response): Promise<Response> {
    const search = String(request.query)

    const usersRepository = container.resolve(ProductsRepository)
    let products: Product[] = []

    if (Object.keys(search).length) {
      products = await usersRepository.findByFilter(search)
    } else {
      products = await usersRepository.findAll()
    }

    return result.ok<Product[]>(response, products)
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, price } = request.body

    const createUser = container.resolve(CreateProductService)
    const createdUser = await createUser.execute({
      name,
      price,
    })

    return result.created<Product>(response, createdUser)
  }

}

export const productsController = new ProductsController()
