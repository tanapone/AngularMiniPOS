export class Company {
  private id: Number;
  private companyName: String;
  private companyPhoneNumber: String;
  private companyEmail: String;
  private companyAddress: String;

	public getId(): Number {
		return this.id;
	}

	public setId(id: Number): void {
		this.id = id;
	}

	public getCompanyName(): String {
		return this.companyName;
	}

	public setCompanyName(companyName: String): void {
		this.companyName = companyName;
	}

	public getCompanyPhoneNumber(): String {
		return this.companyPhoneNumber;
	}

	public setCompanyPhoneNumber(companyPhoneNumber: String): void {
		this.companyPhoneNumber = companyPhoneNumber;
	}

	public getCompanyEmail(): String {
		return this.companyEmail;
	}

	public setCompanyEmail(companyEmail: String): void {
		this.companyEmail = companyEmail;
	}

	public getCompanyAddress(): String {
		return this.companyAddress;
	}

	public setCompanyAddress(companyAddress: String): void {
		this.companyAddress = companyAddress;
	}

}
