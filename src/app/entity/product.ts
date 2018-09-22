import { Category } from "./category";
import { Company } from "./company";
export class Product {
  private id: Number;
  private productName: String;
  private productBarcodeID: String;
  private productCapitalPrice: Number;
  private productSalePrice: Number;
  private productMinimum: Number;
  private productQty: Number;
  private company: Company;
  private category: Category;
  private productStatus: boolean;

	public getId(): Number {
		return this.id;
	}

	public setId(id: Number): void {
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

	public getProductCapitalPrice(): Number {
		return this.productCapitalPrice;
	}

	public setProductCapitalPrice(productCapitalPrice: Number): void {
		this.productCapitalPrice = productCapitalPrice;
	}

	public getProductSalePrice(): Number {
		return this.productSalePrice;
	}

	public setProductSalePrice(productSalePrice: Number): void {
		this.productSalePrice = productSalePrice;
	}

	public getProductMinimum(): Number {
		return this.productMinimum;
	}

	public setProductMinimum(productMinimum: Number): void {
		this.productMinimum = productMinimum;
	}

	public getProductQty(): Number {
		return this.productQty;
	}

	public setProductQty(productQty: Number): void {
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

