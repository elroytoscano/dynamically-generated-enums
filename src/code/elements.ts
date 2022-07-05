import { GenericElement } from './GenericGetElement';

const enumList = new GenericElement<HTMLUListElement>('enumList');
const form = new GenericElement<HTMLFormElement>('inputForm');
const enumInput = new GenericElement<HTMLInputElement>('customEnum');

const enumListElement = enumList.get();
const formElement = form.get();
const enumInputElement = enumInput.get();

export { enumListElement, formElement, enumInputElement };
