import { createContext, useContext, useReducer } from "react"
import { act } from "react-dom/test-utils"

export const contextGame =  createContext()

export function GameContextComponent({children}){
  const [game, dispatch] = useReducer(reducer, {
    title: '',
    price:'',
    year: ''
  })

  function reducer(state , action ){
    switch(action.type){
      case 'setGame':
        state = action.payload
        return {...state}
      default:
        return {...state}
    }
  }
  return (
    <>
      <contextGame.Provider value={[game, dispatch]}>
        {children}
      </contextGame.Provider>
    </>
  )
}