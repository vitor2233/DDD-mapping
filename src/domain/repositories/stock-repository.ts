import { Stock } from '../entities/stock'

export interface StockRepository {
    create(stock: Stock): Promise<void>
    sendAlert(): Promise<string>
    defineMinimum(minimum: number): Promise<void>
}