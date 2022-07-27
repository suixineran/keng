/*
*
* 弹窗的 控制
*
* 下拉框  是有专门的控制  是否记录的
*
*
*
*
*
*
*
* */
import 'babel-polyfill

let a = {
    name : 'www',
    age: 18
}
let b = JSON.stringify(a)
console.log(b)

let c = new Blob([b], {
    type: 'application/octet-stream',
})
console.log('c',c)

