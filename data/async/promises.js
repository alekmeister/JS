Promise.resolve(1)
    .then(x => x + 1)
    .then(x => { throw x })
    .then(x => console.log(x))
    .catch(err => {
        console.log(err)
        return 9
    })
    .then(x => Promise.resolve(x))
    .catch(err => console.log(err))
    .then(x => console.log(x))
