import { useState } from "react";
import { AddGame } from "../../Components/AddGame";
import { Card } from "../../Components/Card";
import { CheckGame } from "../../Components/CheckGame";
import { ContainerCard } from "../../Components/ContainerCard";
import { ViewGames } from "../../Components/ViewGames";

export function Home(){
  const [cardSelected , setCardSelected] = useState(0)
  function handleCard(){
    switch (cardSelected){
      case 0:
        return <ViewGames />
      case 1:
        return <CheckGame />
      case  2:
        return <AddGame />
      default:
        return ''
    }
  }
  return (
    <>
      <ContainerCard>
        {handleCard()}
      </ContainerCard>
      <ContainerCard>
        <Card onclick={() => setCardSelected(0)}>
          View Games
        </Card>
        <Card onclick={() => setCardSelected(1)}>
          Check Game
        </Card>
        <Card onclick={() => setCardSelected(2)}>
          Add Game
        </Card>
        <Card>
          Delete Game
        </Card>
        <Card>
          Update Game
        </Card>
      </ContainerCard>
    </>
  )
}