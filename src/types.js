import Type from 'union-type';

const Any = () => true;

export const Countries = Type({
    Unfetched: [],
    Fetching: [],
    Fetched: [Any],
    Failed: [Error],
});
