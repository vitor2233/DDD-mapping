import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Sell } from '../entities/sell'

export interface SellRepository {
    create(sell: Sell): Promise<void>
    checkHistory(initialDate: Date, endDate: Date): Promise<Sell[]>
}