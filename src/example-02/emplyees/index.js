export class Employee {
  constructor(name, type) {
    this.validateType(type.toString());
    this._name = name;
    this._type = type;
  }

  get type() {
    return this._type;
  }

  set type(arg) {
    this._type = arg;
  }

  get typeString() {
    return this._type.toString();
  }

  validateType(arg) {
    if (![`engineer`, `manager`, `salesman`].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }

  toString() {
    return `${this._name} (${this.type.capitalizedName})`;
  }
}
