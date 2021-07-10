export function lastElm(arr) {
    if (!!arr && !!arr.length) {
        return arr[arr.length - 1];
    } else {
        return null;
    }
}