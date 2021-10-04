import { useState } from "react";
import { AddGame } from "../../Components/AddGame";
import { Card } from "../../Components/Card";
import { CheckGame } from "../../Components/CheckGame";
import { ContainerCard } from "../../Components/ContainerCard";
import { DeleteGame } from "../../Components/DeleteGame";
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
      case 3:
        return <DeleteGame/>
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
        <Card onclick={() => setCardSelected(3)}>
          Delete Game
        </Card>
        <Card>
          Update Game
        </Card>
      </ContainerCard>
    </>
  )
}