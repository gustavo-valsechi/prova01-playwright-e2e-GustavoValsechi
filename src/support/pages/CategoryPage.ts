import { Page } from '@playwright/test';
import CategoryElements from '../elements/CategoryElements';
import BasePage from './BasePage';

export default class CategoryPage extends BasePage {
  readonly categoryElements: CategoryElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.categoryElements = new CategoryElements(page);
  }

  async validateNewCategory(): Promise<void> {
    await this.categoryElements.getAddButton().click();
    await this.categoryElements.getNameField().fill('Categoria teste');
    await this.categoryElements.getDescriptionField().fill('Categoria para teste');
    await this.categoryElements.getFirstIconOption().click();
    await this.categoryElements.getSubmitButton().click();
  }

  async validateEditCategory(): Promise<void> {
    await this.categoryElements.getFirstEditButton().click();
    await this.categoryElements.getNameField().fill('Categoria teste edição');
    await this.categoryElements.getDescriptionField().fill('Categoria para teste edição');
    await this.categoryElements.getFirstIconOption().click();
    await this.categoryElements.getSubmitButton().click();
  }

  async validateDeleteCategory(): Promise<void> {
    await this.categoryElements.getFirstDeleteButton().click();
  }
}
