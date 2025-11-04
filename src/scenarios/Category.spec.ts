import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import CategoryPage from '../support/pages/CategoryPage';

test.describe('Categoria', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let contactPage: CategoryPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    contactPage = new CategoryPage(page);
    
    await page.goto(BASE_URL + '/category');
  });

  test('Criar uma nova categoria', async () => {
    await contactPage.validateNewCategory();
  });

  test('Editar uma categoria', async () => {
    await contactPage.validateEditCategory();
  });

  test('Deletar uma categoria', async () => {
    await contactPage.validateDeleteCategory();
  });
});
