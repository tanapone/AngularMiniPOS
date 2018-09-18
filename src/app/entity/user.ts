export class User {
  private id: Number;
  private username: String;
  private password: String;
  private userType: Number;
  private firstName: String;
  private lastName: String;
  private email: String;
  private phoneNumber: String;
  private address: String;
  private authKey: String;

	public getId(): Number {
		return this.id;
	}

	public setId(id: Number): void {
		this.id = id;
	}

	public getUsername(): String {
		return this.username;
	}

	public setUsername(username: String): void {
		this.username = username;
	}

	public getPassword(): String {
		return this.password;
	}

	public setPassword(password: String): void {
		this.password = password;
	}

	public getUserType(): Number {
		return this.userType;
	}

	public setUserType(userType: Number): void {
		this.userType = userType;
	}

	public getFirstName(): String {
		return this.firstName;
	}

	public setFirstName(firstName: String): void {
		this.firstName = firstName;
	}

	public getLastName(): String {
		return this.lastName;
	}

	public setLastName(lastName: String): void {
		this.lastName = lastName;
	}

	public getEmail(): String {
		return this.email;
	}

	public setEmail(email: String): void {
		this.email = email;
	}

	public getPhoneNumber(): String {
		return this.phoneNumber;
	}

	public setPhoneNumber(phoneNumber: String): void {
		this.phoneNumber = phoneNumber;
	}

	public getAddress(): String {
		return this.address;
	}

	public setAddress(address: String): void {
		this.address = address;
	}

	public getAuthKey(): String {
		return this.authKey;
	}

	public setAuthKey(authKey: String): void {
		this.authKey = authKey;
	}

}
