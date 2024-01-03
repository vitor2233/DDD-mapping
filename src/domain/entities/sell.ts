import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface SellProps {
    idProduct: UniqueEntityID
}

export class Sell extends Entity<SellProps>{
    static create(props: SellProps, id?: UniqueEntityID) {
        const sell = new Sell(props, id)

        return sell
    }
}