import { createGameboard,Gameboard } from "./gameboardFactory"

interface Player{
    gameboard:Gameboard;
}


const player: Player={
    gameboard: createGameboard()
}


const computer: Player={
    gameboard: createGameboard()
}