const loop = setInterval(() => {
    console.log("working...");
}, 1000);

const aliveLoop = setInterval(() => {
    console.log("still alive");
}, 5000);

function shutDown() {
    clearInterval(loop);
    console.log("stop working");
    setTimeout(() => {
        clearInterval(aliveLoop);
        console.log("exiting");
        process.exit();
    }, 60 * 1000);
}

process.on("SIGTERM", () => {
    shutDown();
});