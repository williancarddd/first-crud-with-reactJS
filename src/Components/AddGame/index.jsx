import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {apiGame} from '../../Api/ApiGames'
import './style.css'

export function AddGame(){
  const  {handleSubmit, register} = useForm() 
  const [messageErr, setMessageErr ] = useState('')
 async function handleOnSubmit(event) {
   console.log(event)
   try{
    console.log('tentando salvar')
    await apiGame.post('/', event)
    setMessageErr('GAME SAVED.')
  } catch(err) {
    if(err.response.status === 406){
      setMessageErr('id  already exists.')
    }
    console.log(err.response.status === 406)
  }
 }
  return (
    <>
      <form className="data-new-game" onSubmit={handleSubmit(handleOnSubmit)}>
        <label className='info'>{messageErr}</label>
        <label>ID</label>
        <input type="number" {...register('id', {
          required: 'Required'
        })} />
        <label >name</label>
        <input type="text" {...register('title', {
          required: 'Required',
          validate: value => isNaN(value)
        })}/>
        <label >year</label>
        <input type="number" {...register('year', {
          required: 'Required',
          validate: value => !isNaN(value)
        })}/>
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