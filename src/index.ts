
/**
 * error: Worker does not exist on Window"
 *  - use (<any>window).Worker
 **/
if ((<any>window).Worker) {
  var worker = new Worker('worker1.js');
  console.log("created worker");

  worker.addEventListener('message', function(e: MessageEvent) {
    console.log(e.data);
  })

  console.log("message is about dispatched");
  worker.postMessage('Happy Birthday');
}

