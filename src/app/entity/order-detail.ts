import { Product } from 'src/app/entity/product';
export class OrderDetail {
    private product:Product;
    private productAmount:number;
	private productCaptialPrice:number;
	private productSalePrice:number;

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

	public getProductCaptialPrice(): number {
        return this.productCaptialPrice;
    }

    public setProductCaptialPrice(productCaptialPrice: number): void {
        this.productCaptialPrice = productCaptialPrice;
    }

    public getProductSalePrice(): number {
        return this.productSalePrice;
    }

    public setProductSalePrice(productSalePrice: number): void {
        this.productSalePrice = productSalePrice;
    }

}
