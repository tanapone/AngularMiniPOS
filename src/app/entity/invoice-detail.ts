import { Product } from "./product";

export class InvoiceDetail {
  private product: Product;
  private productCapitalPrice: number;
  private quantity: number;
  private productInDate: Date = new Date();
  private productInQuantity: number;

    public getProduct(): Product
 	{
        return this.product;
    }

    public setProduct(product: Product): void {
        this.product = product;
    }

    public getProductCapitalPrice(): number
 	{
        return this.productCapitalPrice;
    }

    public setProductCapitalPrice(productCapitalPrice: number): void {
        this.productCapitalPrice = productCapitalPrice;
    }

    public getQuantity(): number
 	{
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public getProductInDate(): Date
 	{
        return this.productInDate;
    }

    public setProductInDate(productInDate: Date): void {
        this.productInDate = productInDate;
    }

    public getProductInQuantity(): number {
        return this.productInQuantity;
    }

    public setProductInQuantity(productInQuantity: number): void {
        this.productInQuantity = productInQuantity;
    }

}
