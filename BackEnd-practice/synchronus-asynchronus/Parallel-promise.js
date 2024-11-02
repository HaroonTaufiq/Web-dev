
// First Promise
// const p1 = new Promise((resolve) =>  {
//     setTimeout(() => {
//         console.log('Async operation 1...');
//         resolve(1);
//     }, 2000);
// });

const p1 = new Promise((reject) =>  {
    setTimeout(() => {
        console.log('Async operation 1...');
        reject(new Error('because something failed.'));
    }, 2000);
});


// Second Promise
const p2 = new Promise((resolve) =>  {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

// when all promises are resolved, we get an array of results
Promise.all([p1, p2])
.then(result => console.log(result))
.catch(err => console.log(err.message));

// Promise.race([p1, p2])
// .then(result => console.log(result))
// .catch(err => console.log(err.message));