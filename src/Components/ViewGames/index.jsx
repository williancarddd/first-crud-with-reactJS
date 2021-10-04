import { useContext, useEffect, useState } from 'react'
import { apiGame } from '../../Api/ApiGames'
import { contextGame } from '../../Context/ContextGame'
import { Card } from '../Card'
import './style.css'

export function ViewGames({update}){
  const [listGames, setListGames] = useState([])
  const [game, dispatch] = useContext(contextGame)

  useEffect(() => {
   ( async () => {
      try{
        const games = await apiGame.get()
        setListGames(e => e = games.data)
      } catch(err){
        console.log(err)
      }
    })()
  }, [])

  function handleSetGame(id){
    const gameSelected = listGames.find(e => e.id == id)
    dispatch({type:'setGame', payload: gameSelected})
  }
  return (
    <>
    <section className="data-games">
      <ul className='list-games'>
          {listGames.map(game => {
           return (
           <li key={game.id} onClick={update ? () => handleSetGame(game.id) : () => {}}>
              <Card>
                <label >{game.title}</label>
                <label >{game.year}</label>
                <label >{Number(game.price).toLocaleString('pt-br', {currency:'BRL', style:'currency' })}</label>
              </Card>
            </li>
            )
          })}

      </ul>
    </section>
    </>
  )
}