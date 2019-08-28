const timer = require('./index');

const mockRequest = () => {
    return new Promise(resolve => {
        return setTimeout(() => {
            resolve({data: 'asdf'});
        }, 1000);
    });
};


describe('Timer', () => {
    it('Has valid result format for sync function', () => {
        return timer(() => 21)
            .then(result => {
                expect(result.value).toBe(21);
                expect(result.time).toBeLessThan(20);
            });
    });

    it('Has valid result format for async function', () => {
        return timer(() => mockRequest())
            .then(result => {
                expect(result.value).not.toBe(null);
                expect(result.value).toHaveProperty('data');
                expect(result.time).toBeLessThan(1020);
                expect(result.time).toBeGreaterThan(1000);
            });
    });

    it('Returns a null value if null callback is passed', () => {
        return timer(null)
            .then(result => {
                expect(result.value).toBe(null);
            });
    });

    it('Passes args to the callback', () => {
        return timer((x, y) => x + y, 2, 10)
            .then(result => {
                expect(result.value).toBe(12);
                expect(result.time).toBeLessThan(20);
            });
    });

    it('Also times the rejected promise', () => {
        return timer(() => Promise.reject('asdf'))
            .catch(result => {
                expect(result.error).toBe('asdf');
            });
    });
});