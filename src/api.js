const cache = {};

export async function getFlights(day) {
    if (day in cache) {
        return cache[day];
    }
    await sleep(500);
    let result;
    if (day === '1') {
        result = ['7am'];
    } else {
        result = ['9am', '10:43am'];
    }

    cache[day] = result;
    return result;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
