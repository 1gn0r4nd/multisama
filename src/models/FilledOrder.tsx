import Order from './Order';
export default class FilledOrder {

    id: string;
    buyerSendsAmountFull: number;
    order: Order;
    createdAt: number;

    constructor(
        {
            id,
            buyerSendsAmountFull,
            order,
            createdAt
        } :{
            id: string,
            buyerSendsAmountFull: number,
            order: Order,
            createdAt: number
        }
        ) {
            //beginning of constructor
            this.id = id;
            this.buyerSendsAmountFull = buyerSendsAmountFull;
            this.order = order;
            this.createdAt = createdAt;
            //end of constructor
        }
    price(): number {
        return this.order.price();
    }
}