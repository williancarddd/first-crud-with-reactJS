import { useEffect, useState } from 'react'
import { apiGame } from '../../Api/ApiGames'
import { Card } from '../Card'
import './style.css'

export function ViewGames(){
  const [listGames, setListGames] = useState([])

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

  return (
    <>
    <section className="data-games">
      <ul className='list-games'>
          {listGames.map(game => {
           return (
           <li key={game.id}>
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