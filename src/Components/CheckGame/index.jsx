import { useEffect, useState } from 'react'
import { apiGame } from '../../Api/ApiGames'
import { Card } from '../Card'
import './style.css'
export function CheckGame(){
  const [gameInfo , setGameInfo] = useState({})
  const [messageGame, setMessageGame] = useState('')
  const [idGameInput, setIdGameInput ] = useState()
  useEffect(() => {
    setMessageGame('search a game per id.')
  }, [])
  useEffect(() => {
    const intervalInput = setTimeout(async () => {
      if(idGameInput !== undefined){
        try{
          setGameInfo({})
          const infoOneGame = await apiGame.get(`${idGameInput}` )
          setGameInfo( e => e = infoOneGame.data)
        } catch(err){
          if(err.response.status === 404 ){
            setMessageGame('this id not exist.')
          }
        }
      }
    }, 500)
    return () => clearTimeout(intervalInput)
  }, [idGameInput])

  return (
    <>
    <div className="find-game">
      {
      Object.entries(gameInfo).length === 0
       ?
       messageGame
       :
       <Card>
         <label >{gameInfo.title}</label>
         <label >{gameInfo.year}</label>
         <label >{Number(gameInfo.price).toLocaleString('pt-br', {currency:'BRL', style:'currency' })}</label>
       </Card>
      }
      <input type="number"  className="find-game-button" onChange={e => setIdGameInput(Number(e.target.value))}/>
    </div>
    </>
  )
}