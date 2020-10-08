import { container } from 'tsyringe'

import { IProductsRepository } from '@domain/iproducts.repository'
import { ProductsRepository } from '@infrastructure/products.repository'

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
)
