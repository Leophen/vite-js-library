import {expect, test} from 'vitest';
import {multiply} from '../index';

test('1 × 1 = 1', () => {
    expect(multiply(1, 1)).toBe(1);
});
