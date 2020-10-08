import "reflect-metadata"
import { inject, injectable } from 'tsyringe'

import { IProductsRepository } from "./iproducts.repository"
import { ICreateProductDto } from "./create-product.dto"
import { Product } from "@infrastructure/product.entity"

@injectable()
export class CreateProductService {

  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) { }

  public async execute(entity: ICreateProductDto): Promise<Product> {
    const createdProduct = await this.productsRepository.create(entity)

    return createdProduct
  }

}
