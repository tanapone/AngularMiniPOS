import { Product } from 'src/app/entity/product';
export class OrderDetail {
    private product:Product;
    private productAmount:number;
    
	public getProduct(): Product {
		return this.product;
	}

	public setProduct(product: Product): void {
		this.product = product;
	}

	public getProductAmount(): number {
		return this.productAmount;
	}

	public setProductAmount(productAmount: number): void {
		this.productAmount = productAmount;
	}

}
