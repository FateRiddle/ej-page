import axios from 'axios'

export const addAppointment = ({ name,phone,bao,kuan,price }) => {
  return axios.post('/api/appointment', {name,phone,bao,kuan,price}).then(
    (res) => {
      return res.data.output.msg
    },
    (err) => {
      console.log(err)
      return '预约失败。'
    }
  )
}
//localhost:9000 用于测试
