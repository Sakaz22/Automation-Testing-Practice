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

  // Enter text into "Name" textbox.
  await page.getByRole('textbox', { name: 'Enter EMail' })
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('tats@gmail.com');
});