// Settled Promises


// if you want to create a promise that is already resolved
// const p = Promise.resolve({ id: 1 });
// p.then(result => console.log(result));

// if you want to create a promise that is already rejected
const p = Promise.reject(new Error('reason for rejection...'));
p.catch(error => console.log(error));

