import { Category } from "./category";
import { Company } from "./company";
export class Product {
  private id: number;
  private productName: String;
  private productBarcodeID: String;
  private productCapitalPrice: number;
  private productSalePrice: number;
  private productMinimum: number;
  private productQty: number;
  private company: Company;
  private category: Category;
  private productStatus: boolean;

	public getId(): number {
		return this.id;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public getProductName(): String {
		return this.productName;
	}

	public setProductName(productName: String): void {
		this.productName = productName;
	}

	public getProductBarcodeID(): String {
		return this.productBarcodeID;
	}

	public setProductBarcodeID(productBarcodeID: String): void {
		this.productBarcodeID = productBarcodeID;
	}

	public getProductCapitalPrice(): number {
		return this.productCapitalPrice;
	}

	public setProductCapitalPrice(productCapitalPrice: number): void {
		this.productCapitalPrice = productCapitalPrice;
	}

	public getProductSalePrice(): number {
		return this.productSalePrice;
	}

	public setProductSalePrice(productSalePrice: number): void {
		this.productSalePrice = productSalePrice;
	}

	public getProductMinimum(): number {
		return this.productMinimum;
	}

	public setProductMinimum(productMinimum: number): void {
		this.productMinimum = productMinimum;
	}

	public getProductQty(): number {
		return this.productQty;
	}

	public setProductQty(productQty: number): void {
		this.productQty = productQty;
	}

	public getCompany(): Company {
		return this.company;
	}

	public setCompany(company: Company): void {
		this.company = company;
	}

	public getCategory(): Category {
		return this.category;
	}

	public setCategory(category: Category): void {
		this.category = category;
	}

	public setProductStatus(productStatus: boolean): void{
		this.productStatus = productStatus;
	}

	public getProductStatus():boolean{
		return this.productStatus
	}
}

