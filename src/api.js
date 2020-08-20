const cache = {};

export async function getFlights(day) {
    if (day in cache) {
        return cache[day];
    }
    await sleep(500);
    let result;
    if (day === 0) {
        result = ['8/1 7am'];
    } else if (day === 1) {
        result = ['8/2 7am'];
    } else {
        result = ['8/3 9am', '8/3 10:43am'];
    }

    cache[day] = result;
    return result;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
