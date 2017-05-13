import axios from 'axios'

//basic setup
const ax = axios.create({
  baseURL: '/api',
})

export const fetchUser = () => {
  return ax.get(`/user`).then(res => res.data)
}

export const addUser = ({ name,phone,area,address }) => {
  return ax.post(`/liangfang`, {name,phone,area,address}).then(
    res => {
      return res.data.output.msg
    },
    err => {
      console.log(err)
      return '预约失败。'
    }
  )
}
