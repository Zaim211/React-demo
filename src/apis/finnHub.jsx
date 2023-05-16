import axios from 'axios'
const TOKEN = 'chgjt89r01qnp48q2irgchgjt89r01qnp48q2is0'

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params : {
    token: TOKEN
  }
})