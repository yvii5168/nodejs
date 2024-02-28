// console.log(exports);

// console.log(module.exports);

// console.log(exports === module.exports);

const username = '张三';

exports.username = this.username;
exports.age = 20;
exports.sayHello = function() {
  console.log('大家好！');
}

// 注意：最终，向外共享的结果，永远就是module.exports指向的对象；