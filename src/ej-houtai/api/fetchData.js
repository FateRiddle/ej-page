import axios from 'axios'

const fakedb = {
  auth:{name:'youcb',password:'1234'}
}

const url = '/api'

const delay = ms =>
  new Promise(resolve => setTimeout(resolve,ms))

// export const fetchData = () => delay(600).then(() => fakedb.users)

export const fetchUser = () => {
  return axios.get(`${url}/user`).then(res => res.data)
}

export const fetchAppointment = () => {
  return axios.get(`${url}/appointment`).then(res => res.data)
}

export const toggleUser = (id) => {
  return axios.post(`${url}/user/completed`,{id})
}

export const toggleApp = (id) => {
  return axios.post(`${url}/appointment/completed`,{id})
}

export const editUserMemo = (id,memo) => {
  return axios.post(`${url}/user/memo`,{id,memo})
}

export const editAppMemo = (id,memo) => {
  return axios.post(`${url}/appointment/memo`,{id,memo})
}

export const auth = (name,password) => delay(600).then(() => {
  return fakedb.auth.name === name && fakedb.auth.password === password
})
