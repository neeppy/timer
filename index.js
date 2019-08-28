/**
 * Times a function call
 * @param {function} callback - the callback to be timed
 * @param {*} args - the args to be passed to the callback
 * @return {Promise<{time: number, value: any}>}
 */
const timer = (callback, ...args) => {
    const start = new Date().getTime();
    const value = callback && callback(...args);

    return Promise.resolve(value)
        .then(res => {
            const stop = new Date().getTime();
            return {
                value: res,
                time: stop - start,
            };
        })
        .catch(err => {
            const stop = new Date().getTime();
            throw {
                error: err,
                time: stop - start
            };
        });
};

module.exports = timer;