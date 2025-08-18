const logger = {
    mode: "Dev",
    check() {
        console.log(`This is ${this.mode} mode`);
    },
};

logger.check(); // => ? (1) dev

const loggerCheck = logger.check;
 loggerCheck(); // => ? (2) undefined

function execute(fn) {
    return fn();
}

execute(logger.check); // => ? (3) undefined
