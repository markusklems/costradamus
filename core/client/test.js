async function x() {
  var obj = await new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        a: 42
      });
    }, 100);
  });
  return obj;
}

x().then(console.log)
