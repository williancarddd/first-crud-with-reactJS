import { useContext, useState } from "react"
import { contextGame } from "../../Context/ContextGame"
import { ViewGames } from "../ViewGames"
import {useForm} from 'react-hook-form'
import { apiGame } from "../../Api/ApiGames"

export function UpdateGame(){
  const {handleSubmit, register, setValue} = useForm()
  const [gameSelected, dispatch] = useContext(contextGame)
  const [info, setInfo] = useState('')

  async function handleUpdateGame(data){
    console.log(gameSelected.id)
    console.log(data)
    try{
      const responseUpdateGame = await apiGame.put(`/${gameSelected.id}`, data)
      console.log(responseUpdateGame.data)
      dispatch({type:'setGame', payload: {...data}})
      setInfo(responseUpdateGame.data.message)
      setTimeout(() => {
        setInfo("")
      }, 2000)
    }catch(err){
      console.log(err)
    }

  }
  setValue('title', gameSelected.title)
  setValue('year', gameSelected.year)
  setValue('price', gameSelected.price)
  return (
    <>
      <ViewGames update={true}/>
      <form className="data-new-game" onSubmit={handleSubmit(handleUpdateGame)}>
        <label htmlFor="">{info}</label>
        <label >name</label>
        <input type="text" {...register('title', {
          required: 'Required',
          validate: value => isNaN(value)
        })}  />
        <label >year</label>
        <input type="number" {...register('year', {
          required: 'Required',
          validate: value => !isNaN(value)
        })} />
        <label >price</label>
        <input type="number" {...register('price', {
          required: 'Required',
          validate: value => !isNaN(value)
        })}/>
        
        <div>
          <button className='b-submit' type='submit'>Create</button>
        </div>
      </form>
    </>
  )
}