import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface StockProps {
    idProduct: UniqueEntityID
    minimum: number
}

export class Stock extends Entity<StockProps>{
    static create(props: StockProps, id?: UniqueEntityID) {
        const stock = new Stock(props, id)

        return stock
    }
}