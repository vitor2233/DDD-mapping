import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Tracking } from '../entities/tracking'

export interface TrackingRepository {
    create(tracking: Tracking): Promise<void>
    trackProduct(idProduct: UniqueEntityID): Promise<string>
}