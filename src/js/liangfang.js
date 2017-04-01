import $ from 'jquery'
import * as api from './api'

$('#yuyue').click(()=>{
  const name = $('#name').val()
  const phone = $('#phone').val()
  const area = $('#area').val()
  const $message = $('.message')
  if(name === '' || phone === '' || area === ''){
    $message.text('请填写完整信息。')
    return
  }
  api.addUser({ name,phone,area }).then((msg)=>{
    $message.text(msg)
  })
})
