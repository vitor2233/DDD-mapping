import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface ProductProps {
    size: string
    color: string
    buyPrice: number
    sellPrice: number
}

export class Product extends Entity<ProductProps>{
    static create(props: ProductProps, id?: UniqueEntityID) {
        const product = new Product(props, id)

        return product
    }
}