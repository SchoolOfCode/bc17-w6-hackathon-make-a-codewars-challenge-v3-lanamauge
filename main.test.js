import { expect, test } from 'vitest';
import { titleCase } from './main.js';

test('converts words to title case and not accept non alphabetical characters', () => {
    expect(titleCase ("hope this works")).toBe("Hope This Works");
    expect(() => titleCase("Th1s sh0uld thr0w an error and pass tests!")).toThrow('Invalid input: Only alphabetical characters and spaces are allowed.');
})