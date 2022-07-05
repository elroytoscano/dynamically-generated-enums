export class GenericElement<T extends HTMLElement> {
  private element: T;
  constructor(typeElement: string) {
    this.element = <T>document.getElementById(typeElement);
  }

  get() {
    return this.element;
  }
}

export class GenericCreateElement<T extends HTMLElement> {
  private element: T;
  constructor(typeElement: string, text: string) {
    this.element = <T>document.createElement(typeElement);
    this.element.textContent = text;
  }

  get() {
    return this.element;
  }
}
