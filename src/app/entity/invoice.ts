import { InvoiceDetail } from "./invoice-detail";

export class Invoice {
  private id: Number;
  private date: Date;
  private sumPrice;
  private invoiceDetails:Array<InvoiceDetail>;
    
  public getId(): Number {
    return this.id;
  }

  public setId(id: Number): void {
    this.id = id;
  }

  public getDate(): Date {
    return this.date;
  }

  public setDate(date: Date): void {
    this.date = date;
  }

  public getSumPrice(): undefined {
    return this.sumPrice;
  }

  public setSumPrice(sumPrice: undefined): void {
    this.sumPrice = sumPrice;
  }
  
  public getInvoiceDetails(): Array<InvoiceDetail> {
        return this.invoiceDetails;
  }

  public setInvoiceDetails(invoiceDetails: Array<InvoiceDetail>): void {
		this.invoiceDetails = invoiceDetails;
  }
}
