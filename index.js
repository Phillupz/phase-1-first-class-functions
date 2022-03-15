function receivesAFunction(callBack) {
    console.log(callBack())
};

callback(function () {return "This is a call back function"})

function returnsANamedFunction () {
    return function funky () {
        console.log()
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log()
    }
}