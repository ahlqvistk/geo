export default function(arr, n = 1, filter = (x) => x) {
    if (n > arr.length) {
        return [];
    }

    return arr
        .filter(filter)
        .map((x) => ({x, r: Math.random()}))
        .sort((a, b) => a.r - b.r)
        .map((a) => a.x)
        .slice(0, n);
}
