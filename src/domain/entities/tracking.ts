import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface TrackingProps {
    idProduct: UniqueEntityID
    action: string
}

export class Tracking extends Entity<TrackingProps>{
    static create(props: TrackingProps, id?: UniqueEntityID) {
        const tracking = new Tracking(props, id)

        return tracking
    }
}