export class Task {
  id: number;
  name: string;
  description: string;

  constructor(name = '', description = '') {
    this.name = name;
    this.description = description;
  }
}
