import $ from 'jquery'
import axios from 'axios'

$(()=>{
  $('#yuyue').find('a').attr('href', `taocan/index.html?kuan=${encodeURIComponent('标准款')}`)
})

$('.kuan').click( e => {
  const kuan = $('.kuan.boxActive').find('span').text()

  $('#yuyue').find('a').attr('href', `taocan/index.html?kuan=${encodeURIComponent(kuan)}`)
})
