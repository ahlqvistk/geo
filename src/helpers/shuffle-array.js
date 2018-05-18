export default function(arr) {
    return arr
        .map((x) => ({x, r: Math.random()}))
        .sort((a, b) => a.r - b.r)
        .map((a) => a.x);
}
