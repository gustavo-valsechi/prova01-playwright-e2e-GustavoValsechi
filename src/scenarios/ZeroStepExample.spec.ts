import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';
import { join } from 'path';
import { TheConfig } from 'sicolo';

test('zerostep example', async ({ page }) => {
  // const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  // const BASE_URL = TheConfig.fromFile(CONFIG).andPath('application.base_url').retrieveData();

  // await page.goto(BASE_URL + '/category');

  // const aiArgs = { page, test };
  // await ai('click on button with plus icon', aiArgs);
});
