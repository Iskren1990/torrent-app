export default function fieldValidator(obj) {

    const empty = Object.keys(obj)
        .filter(x => obj[x] === "")
        .map(x => `Field ${x.toUpperCase()} is required!\n`);

    const error = empty.length > 0;

    return [error, empty];
}