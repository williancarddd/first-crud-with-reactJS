import './style.css'
import {useForm} from 'react-hook-form'
import { useEffect, useState } from 'react'
import {apiGame} from '../../Api/ApiGames/'
export function DeleteGame(){
  const  {handleSubmit, register} = useForm()
  const [infoDelet, setInfoDelet] = useState('Type id for delete')

  useEffect(() => {
    const refTime = setTimeout(() => {
      setInfoDelet(e => e = 'Type id for delete' )
    }, 4000);

    return () =>  clearTimeout(refTime)
  }, [infoDelet])

  async function handleOnSubmit({id}){
    try{
      const responseDelete = await apiGame.delete(`/${id}` )
      setInfoDelet(responseDelete.data.message)
    } catch(err) {
      console.log(err.response)
      setInfoDelet(err.response.data.message)
    }
    }

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="deleteGame">
          <label >{infoDelet}</label>
          <input type="number" {...register('id', {
            required: 'Required'
          })}/>
          <button type='submit'>Delete</button>
        </div>
      </form>
    </>
  )
}