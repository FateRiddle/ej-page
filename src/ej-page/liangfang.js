import * as api from './api'

document.getElementById('yuyue').addEventListener('click', ()=>{
  let address = ''
  if(document.getElementById('address')){
    address = document.getElementById('address').value
  }
  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const area = document.getElementById('area').value
  const $message = document.querySelector('.message')
  if(name === '' || phone === '' || area === ''){
    $message.textContent = '请填写完整信息。'
    return
  }
  api.addUser({ name,phone,area,address }).then((msg)=>{
    $message.textContent = msg
  })
}, false) 
