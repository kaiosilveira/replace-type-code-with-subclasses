export class Employee {
  constructor(name, type) {
    this._name = name;
  }

  toString() {
    return `${this._name} (${this.type})`;
  }
}
