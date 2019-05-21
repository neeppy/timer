timer.js
---

A lightweight library capable of measuring how much time a callback requires to execute.

Installation
---

```
npm install --save timer.js
```

Usage
---

It works with synchronous functions:
```js
const timer = require('timer.js');

function sum(x, y) {
    return x + y;
}

timer(sum, 10, 12)
    .then(result => {
        // amount of time required to sum the numbers
        console.log(result.time);
        
        // the value returned by the function
        console.log(result.value);
    });
```

It also works with promises:
```js
const timer = require('timer.js');

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({data: 'Hello'});
        }, 500);
    });
}

timer(fetchData)
    .then(result => {
        // will wait for the timeout, so it will be over 500 ms
        console.log(result.time); 
        
        // will be our fetched data
        console.log(value);
    });
```