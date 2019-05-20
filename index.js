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

const delay = amount => new Promise(resolve => setTimeout(resolve, amount));

timer(() => delay(1000)).then(res => {
    console.log(res);
});

timer(() => 21).then(res => {
    console.log(res);
});