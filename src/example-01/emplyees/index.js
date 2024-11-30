export class Employee {
  constructor(name) {
    this._name = name;
  }

  toString() {
    return `${this._name} (${this.type})`;
  }
}
