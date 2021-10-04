import { useState } from "react";
import { AddGame } from "../../Components/AddGame";
import { Card } from "../../Components/Card";
import { CheckGame } from "../../Components/CheckGame";
import { ContainerCard } from "../../Components/ContainerCard";
import { DeleteGame } from "../../Components/DeleteGame";
import { UpdateGame } from "../../Components/UpdateGame";
import { ViewGames } from "../../Components/ViewGames";
import { GameContextComponent } from "../../Context/ContextGame";

export function Home(){
  const [cardSelected , setCardSelected] = useState(0)
  function handleCard(){
    switch (cardSelected){
      case 0:
        return <ViewGames update={false}/>
      case 1:
        return <CheckGame />
      case  2:
        return <AddGame />
      case 3:
        return <DeleteGame />
      case 4:
        return <UpdateGame />
      default:
        return ''
    }
  }
  return (
    <>
      <GameContextComponent>
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
            <Card onclick={() => setCardSelected(4)}>
              Update Game
            </Card>
          </ContainerCard>
      </GameContextComponent>
        
    </>
  )
}