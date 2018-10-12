import { User } from './user';
import { OrderDetail } from './order-detail';
export class Order {
    private id:number;
    private orderDate:Date;
    private user:User;
    private sumPrice:number;
    private profit:number;
    private orderDetails:Array<OrderDetail>;
    
	public getId(): number {
		return this.id;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public getOrderDate(): Date {
		return this.orderDate;
	}

	public setOrderDate(orderDate: Date): void {
		this.orderDate = orderDate;
	}

	public getUser(): User {
		return this.user;
	}

	public setUser(user: User): void {
		this.user = user;
	}

	public getSumPrice(): number {
		return this.sumPrice;
	}

	public setSumPrice(sumPrice: number): void {
		this.sumPrice = sumPrice;
	}

	public getProfit(): number {
		return this.profit;
	}

	public setProfit(profit: number): void {
		this.profit = profit;
	}

	public getOrderDetails(): Array<OrderDetail> {
		return this.orderDetails;
	}

	public setOrderDetails(orderDetails: Array<OrderDetail>): void {
		this.orderDetails = orderDetails;
	}

}
