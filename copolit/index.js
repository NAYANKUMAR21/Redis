function outer() {
  let x = 10;
  return {
    getX: function () {
      return x;
    },
    setX: function (newX) {
      x = newX;
      return;
    },
  };
}

let closure = outer();
console.log(closure);
console.log(closure.getX());
closure.setX(5);
console.log(closure.getX());
