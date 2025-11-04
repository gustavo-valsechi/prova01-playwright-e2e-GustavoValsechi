import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CategoryElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getAddButton(): Locator {
    return this.page.locator('button.iz-table-button > i.fa-solid.fa-plus');
  }

  getFirstEditButton(): Locator {
    return this.page.locator('button.iz-table-button > i.fa-solid.fa-plus').first();
  }

  getFirstDeleteButton(): Locator {
    return this.page.locator('button.iz-table-button > i.fa-solid.fa-plus').first();
  }

  getNameField(): Locator {
    return this.page.locator('#name');
  }

  getDescriptionField(): Locator {
    return this.page.locator('#description');
  }

  getFirstIconOption(): Locator {
    return this.page.locator('div.iz-modal-category-icon > i.fa-amazon-pay');
  }

  getSubmitButton(): Locator {
    return this.page.locator('button[label="confirmar"]');
  }
}
