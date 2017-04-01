import axios from 'axios'

const url = 'http://61.164.47.179:3000'

export const fetchUser = () => {
  return axios.get(`${url}/user`).then(res => res.data)
}

export const addUser = ({ name,phone,area }) => {
  return axios.post(`${url}/liangfang`, {name,phone,area}).then(
    (res) => {
      return res.data.output.msg
    },
    (err) => {
      console.log(err)
      return '预约失败。'
    }
  )
}
