import randomFromArray from './random-from-array';

const arr = [
    {name: 'Afghanistan', region: 'Asia'},
    {name: 'Cuba', region: 'Americas'},
    {name: 'Israel', region: 'Asia'},
    {name: 'Nigeria', region: 'Africa'},
    {name: 'Slovakia', region: 'Europe'},
];

test('returns an array', () => {
    expect(randomFromArray([])).toEqual([]);
});

test('returns an array of passed length', () => {
    expect(randomFromArray(arr, 5)).toHaveLength(5);
    expect(randomFromArray(arr, 3)).toHaveLength(3);
});

test('returns empty array if out of range', () => {
    expect(randomFromArray(arr, 6)).toEqual([]);
});

test('filters input array', () => {
    const filter = (country) => country.region === 'Europe';

    expect(randomFromArray(arr, 1, filter)[0].region).toBe('Europe');
    expect(randomFromArray(arr, 1, filter)[0].region).toBe('Europe');
    expect(randomFromArray(arr, 1, filter)[0].region).toBe('Europe');
    expect(randomFromArray(arr, 1, filter)[0].region).toBe('Europe');
    expect(randomFromArray(arr, 1, filter)[0].region).toBe('Europe');
});

test('array contains no duplicates', () => {
    expect(new Set(randomFromArray(arr, 3)).size).toBe(3);
    expect(new Set(randomFromArray(arr, 5)).size).toBe(5);
});

test('array contains correct items', () => {
    expect(randomFromArray(arr, 5)).toContain(arr[0]);
    expect(randomFromArray(arr, 5)).toContain(arr[1]);
    expect(randomFromArray(arr, 5)).toContain(arr[2]);
    expect(randomFromArray(arr, 5)).toContain(arr[3]);
    expect(randomFromArray(arr, 5)).toContain(arr[4]);
});
