export async function getFlights() {
    await sleep(500);
    return {
        'August 1': ['8/1 4:30pm'],
        'August 2': ['8/2 7am'],
        'August 3': ['8/3 9am', '8/3 10:43am']
    };
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
