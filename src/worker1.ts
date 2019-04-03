type workerFunc = () => void;

const wFunc: workerFunc = () => console.log("ts worker hey");

wFunc();
