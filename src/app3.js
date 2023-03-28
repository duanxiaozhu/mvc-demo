import './app3.css'
import $ from 'jquery'
const $square=$('#app3 .square')

$square.on('click',()=>{
    $square.toggleClass('active') //没有active 添加 有删除
})