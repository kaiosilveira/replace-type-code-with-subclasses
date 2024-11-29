import { Employee } from '..';

export class Engineer extends Employee {
  constructor(name) {
    super(name, `engineer`);
  }

  get type() {
    return `engineer`;
  }
}
