export class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
  }

  validateType(arg) {
    if (![`engineer`, `manager`, `salesman`].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }

  toString() {
    return `${this._name} (${this.type})`;
  }
}
