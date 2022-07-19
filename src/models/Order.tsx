import BuyAsset from './BuyAsset';
import SellAsset from './SellAsset';

export default class Order {
    quantity: number;
    sellAsset: SellAsset;
    buyAsset: BuyAsset;
    askPerUnitNominator: number;
    askPerUnitDenominator: number;
    constructor(
        {
            quantity,
            sellAsset,
            buyAsset,
            askPerUnitNominator,
            askPerUnitDenominator
        } :{
            quantity: number,
            sellAsset: SellAsset,
            buyAsset: BuyAsset,
            askPerUnitNominator: number,
            askPerUnitDenominator: number
        }) {
            this.quantity = quantity;
            this.sellAsset = sellAsset;
            this.buyAsset = buyAsset;
            this.askPerUnitNominator = askPerUnitNominator;
            this.askPerUnitDenominator = askPerUnitDenominator;
    }

    isBuyOrder(): boolean {
        return this.buyAsset.isBuyOrder();
    }

    isSellOrder(): boolean {
        return this.sellAsset.isSellOrder();
    }

    price(): number {
        if(this.isBuyOrder()){
            return this.askPerUnitNominator / this.askPerUnitDenominator;
        } else {
            return this.askPerUnitDenominator / this.askPerUnitNominator;
        }
    }

    // {
    //     return {
    //         time: filled_order.createdAt,
    //         value: filled_order.order.askPerUnitNominator / filled_order.order.askPerUnitDenominator
    //         // open, high, low, close, color
    //     };
    // } else {
    //     return {
    //         time: filled_order.createdAt,
    //         value: filled_order.order.askPerUnitDenominator / filled_order.order.askPerUnitNominator
    //     };
    // }
}