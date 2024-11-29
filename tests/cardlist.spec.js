import { test, expect } from '@playwright/test';

test.describe('Card List', () => {
  test('should display a loading spinner before rendering cards', async ({ page }) => {
    await page.goto('http://localhost:3000/card-list');
    await page.pause();

    const loadingSpinner = page.locator('img[alt="Loading"]');
    await expect(loadingSpinner).toBeVisible({ timeout: 10000 }); // Ensure spinner is visible
    await expect(loadingSpinner).toHaveCount(0); // Ensure spinner disappears
  });

  test('should render 25 Pokémon cards for the test environment', async ({ page }) => {
    // Go to the card list page with 25 Pokémon query
    await page.goto('http://localhost:3000/card-list?limit=25', { waitUntil: 'networkidle' });

    await page.waitForSelector('div[role="card"]'); // Ensure cards are rendered
    const cards = page.locator('div[role="card"]');
    const cardCount = await cards.count();

    console.log(`Rendered card count: ${cardCount}`); // Debug log
    expect(cardCount).toBe(25);
  });

  test('should display Pokémon names correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/card-list?limit=25');

    const firstCardName = await page.locator('h3').first().innerText();
    expect(firstCardName).not.toBe(''); // Ensure first Pokémon name is not empty
  });

  test('should display Pokémon types and base experience', async ({ page }) => {
    await page.goto('http://localhost:3000/card-list?limit=25');

    const firstCardType = await page.locator('div[role="type"]').first().innerText();
    const firstCardExperience = await page.locator('p').first().innerText();

    // Ensure type and base experience are rendered correctly
     expect(firstCardType).not.toBe('');
     expect(firstCardExperience).toContain('Base Experience');
  });
});
