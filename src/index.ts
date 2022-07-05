import './styles.css';
import './template.html';
import { ExpenseType } from './interfaces';

import { GenericCreateElement } from './code';

import { enumInputElement, enumListElement, formElement } from './code';

let customExpenseType: ExpenseType = {};

formElement.addEventListener('submit', (ev: SubmitEvent): void => {
  ev.preventDefault();
  enumListElement.appendChild(createListElement(enumInputElement.value));
  enumInputElement.value = '';
});

const createListElement = (textValue: string): HTMLLIElement => {
  const listItem = new GenericCreateElement<HTMLLIElement>('li', textValue);
  customExpenseType[textValue.toUpperCase().split(' ').join('_')] = textValue;
  const listItemElement = listItem.get();
  console.log('Updated expense type array:', customExpenseType);
  return listItemElement;
};
