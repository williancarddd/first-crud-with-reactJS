import axios from 'axios'

const apiGame = axios.create({
  baseURL:'http://localhost:5500/games'
})

export {apiGame}