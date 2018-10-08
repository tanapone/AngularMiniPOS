import { Product } from './product';

export class InvoiceDetail {
    private product:Product;
    private quantity:Number;
    private productInDate:Date = new Date();
    
    public InvoiceDetail(){
        this.quantity = 0;
    }

	public getProduct(): Product {
		return this.product;
	}

	public setProduct(product: Product): void {
		this.product = product;
	}

	public getQuantity(): Number {
		return this.quantity;
	}

	public setQuantity(quantity: Number): void {
		this.quantity = quantity;
	}

	public getProductInDate(): Date {
		return this.productInDate;
	}

	public setProductInDate(productInDate: Date): void {
		this.productInDate = productInDate;
	}

}
