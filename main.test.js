import { expect, test } from 'vitest';
import { titleCase } from './main.js';

test('converts words to title case', () => {
    expect(titleCase ("hope this works")).toBe("Hope This Works");
})