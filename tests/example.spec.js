// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Testing Practice/);
});

test('is clickable GUI', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Enter text into "Name" textbox.
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Tatenda');

  // Enter text into "EMail" textbox.
  await page.getByRole('textbox', { name: 'Enter EMail' })
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('tats@gmail.com');

  // Select gender using radio box.
  await page.getByRole('radio', { name: 'Male', exact: true }).check();

  // Select days using tick box.
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await page.getByRole('checkbox', { name: 'Thursday' }).check();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.getByRole('checkbox', { name: 'Saturday' }).check();

  // Select country using dropdown.
  await page.getByLabel('Country:').selectOption('germany');

  // Select colours using list.
  await page.getByLabel('Colors:').selectOption('yellow');

  // Select date using date picker.
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '21' }).click();
});