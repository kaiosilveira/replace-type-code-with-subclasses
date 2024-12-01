export class EmployeeType {
  constructor(value) {
    this.value = value;
  }

  get capitalizedName() {
    return this.toString().charAt(0).toUpperCase() + this.toString().slice(1);
  }

  toString() {
    return this.value;
  }
}
