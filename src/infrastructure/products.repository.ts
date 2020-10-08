import { v4 as uuidv4 } from 'uuid'

import { IProductsRepository } from '@domain/iproducts.repository'
import { ICreateProductDto } from '@domain/create-product.dto'
import { Product } from './product.entity'

export class ProductsRepository implements IProductsRepository {

  private products: Product[] = []

  public async findAll(): Promise<Product[]> {
    return this.products
  }

  public async findByFilter(search: string): Promise<Product[]> {
    const products = this.products.filter(product => product.name === search)

    return products
  }

  public async findById(id: string): Promise<Product | undefined> {
    return this.products.find(product => product.id === id)
  }

  public async create(entity: ICreateProductDto): Promise<Product> {
    const product: Product = new Product()

    Object.assign(product, {
      id: uuidv4(),
      name: entity.name,
      price: entity.price,
    })

    this.products.push(product)
    return product
  }

  public async save(entity: Product): Promise<Product> {
    throw new Error('Method not implemented.')
  }

}
