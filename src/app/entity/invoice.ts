import { InvoiceDetail } from "./invoice-detail";
import { Company } from "./company";

export class Invoice {
  private id: Number;
  private date: Date;
  private company:Company;
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
  
  public getCompany(): Company {
    return this.company;
  }

  public setCompany(company: Company): void {
      this.company = company;
  }


  public getInvoiceDetails(): Array<InvoiceDetail> {
        return this.invoiceDetails;
  }

  public setInvoiceDetails(invoiceDetails: Array<InvoiceDetail>): void {
		this.invoiceDetails = invoiceDetails;
  }
}
