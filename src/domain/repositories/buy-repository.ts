import { Buy } from '../entities/buy'

export interface BuyRepository {
    create(product: Buy): Promise<void>
}