const cache = {

};

function death() {
    const now = Date.now();
    const entries = Object.entries(cache);
    entries.forEach(([key, item]) => {
        if (item.expiration < now) {
            console.log("CACHE | deleting key:", key);
            delete cache[key];
        }
    });
}

setInterval(death, 1000);
const cacheLifeSpan = 10000;
module.exports = async function getFromCache(id, getData) {
    let cachedValue = cache[id];
    if (cachedValue) {
        console.log("CACHE | fetching cached key:", id);
        cachedValue.expiration = Date.now() + cacheLifeSpan;
        return cachedValue.value;
    }

    console.log("CACHE | fetching non-cached key:", id);
    cachedValue = {
        value: await getData(),
        expiration: Date.now() + cacheLifeSpan,
    };

    cache[id] = cachedValue;
    return cachedValue.value;
};
