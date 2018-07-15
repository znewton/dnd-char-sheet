export class ClassNameBuilder {
  private classNames: Array<string> = [];

  constructor(initialClassName?: string) {
    if (initialClassName) {
      this.classNames.push(initialClassName);
    }
  }

  add(className: string, condition: boolean = true) {
    if (condition) {
      this.classNames.push(className);
    }
  }

  get className() {
    return this.classNames.join(' ');
  }
}
