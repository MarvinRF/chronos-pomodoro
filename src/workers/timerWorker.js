self.onmessage = function (event) {
  console.log('worker.js recebeu:', event.data);

  self.postMessage('worker.js responde: olá para você também');
};
