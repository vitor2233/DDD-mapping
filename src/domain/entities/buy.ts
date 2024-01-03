import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface BuyProps {
    idProduct: UniqueEntityID
    deliveryTime: string
}

export class Buy extends Entity<BuyProps>{
    static create(props: BuyProps, id?: UniqueEntityID) {
        const buy = new Buy(props, id)

        return buy
    }
}