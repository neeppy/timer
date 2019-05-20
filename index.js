const timer = (callback, ...args) => {
    const start = new Date().getTime();
    const value = callback(...args);

    return Promise.resolve(value).then(res => {
        const stop = new Date().getTime();
        return {
            value: res,
            time: stop - start,
        };
    });
};

module.exports = timer;