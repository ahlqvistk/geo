import shuffleArray from './shuffle-array';

const arr = [1, 2, 3, 4];

test('returns an array', () => {
    expect(shuffleArray([])).toEqual([]);
});

test('returns array with same elements', () => {
    expect(shuffleArray(arr)).toContain(1);
    expect(shuffleArray(arr)).toContain(2);
    expect(shuffleArray(arr)).toContain(3);
    expect(shuffleArray(arr)).toContain(4);
});
