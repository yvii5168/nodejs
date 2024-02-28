// 在一个自定义模块中，默认情况下，module.exports=[]
const age = 20;

module.exports.username = '张三';

module.exports.sayHello = function () {
  console.log('Hello!');
}

module.exports.age = age;

// 让module.exports指向一个新的对象
module.exports = {
  nickname: '小黑',
  sayHi() {
    console.log('Hi!');
  }
}