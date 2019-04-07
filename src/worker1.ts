(self as DedicatedWorkerGlobalScope).addEventListener('message', function( e: MessageEvent ) {
  console.log("received at worker1.js");
  var message: string = e.data + 'to myself!';
  (<any>self).postMessage(message);
  (self as DedicatedWorkerGlobalScope).close();
} as EventListener);

