const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Your solution(s) to exercise001 here!
promise
  .then((data) => console.log(`Yay! Promise resolved with data: ${data}`))
  .catch((error) => console.log(`boo! Promise rejected with error: ${error}`));

// resolve using async/await
async function resolvePromise() {
  try {
    const data = await promise;
    console.log(`Yay! Promise resolved with data: ${data}`);
  } catch (error) {
    console.log(`boo! Promise rejected with error: ${error}`);
  }
}
