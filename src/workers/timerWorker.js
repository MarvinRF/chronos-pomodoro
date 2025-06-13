self.onmessage = function (event) {
  console.log('worker.js recebeu:', event.data);

  switch (event.data) {
    case 'start':
      console.log('worker.js iniciou');
      break;
    case 'stop':
      console.log('worker.js parou');
      self.close();
      break;
    default:
      console.log('worker.js recebeu uma mensagem desconhecida:', event.data);
      self.close();
      break;
  }
};
