export async function getFlights(day) {
    await sleep(500);
    if (day === '1') {
        return ['7am'];
    } else {
        return ['9am', '10:43am'];
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
