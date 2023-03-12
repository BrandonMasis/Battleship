import { createShip,Ship,Coordinate } from "./shipFactory";

interface Gameboard {
    allShips: Ship[];
    missedAttacks: Coordinate[];
    areShipsSunked:()=>boolean;
    placeShip:(length:number, coordinates: Coordinate[])=>  any;
    searchShip: (coordX:number,coordY:number) => any;
    receiveAttack: (coordX:number,coordY:number) => any;
  }


function createGameboard(): Gameboard{
    
    let allShips: Ship[] = []
    let missedAttacks: Coordinate[] = []
   
    function areShipsSunked() {
      for (let i = 0; i < allShips.length; i++) {
        if (!allShips[i].isSunk()) {
          return false;
        }
      }
      return true;
    }
    
    function placeShip(length:number,coordinates:Coordinate[]){
        let newShip = createShip(length)
        newShip.coordinates = coordinates
        allShips.push(newShip)
    }

    function searchShip(coordX:number,coordY:number){
     
      let foundShip;

      allShips.forEach(ship=>{
        
       ship.coordinates.forEach(coordinate=>{
        if(coordinate.x == coordX && coordinate.y == coordY){
          foundShip = coordinate
          coordinate.isHit = true
          ship.hit()
        }
       })
      })

      if(foundShip){
        return true
      }else{
        missedAttacks.push({x:coordX,y:coordY,isHit:true})
        return false
      }

    }

    function receiveAttack(coordX:number,coordY:number){


      return(searchShip(coordX,coordY))
      
      
    }

 
    const gameboard:Gameboard={
      allShips, 
      missedAttacks,
      searchShip,
      placeShip,
      receiveAttack,
      areShipsSunked
    }

    return gameboard
}




let testGameboard = createGameboard()

testGameboard.placeShip(3, [
    { x: 1, y: 2, isHit: false },
    { x: 2, y: 2, isHit: false },
    { x: 3, y: 2, isHit: false },
]);

testGameboard.placeShip(4, [
    { x: 4, y: 4, isHit: false },
    { x: 4, y: 5, isHit: false },
    { x: 4, y: 6, isHit: false },
    { x: 4, y: 7, isHit: false },
]);

testGameboard.placeShip(2, [
    { x: 6, y: 3, isHit: false },
    { x: 7, y: 3, isHit: false },
]);

 // Attack the first ship
 testGameboard.receiveAttack(1, 2);
 testGameboard.receiveAttack(2, 2);
 testGameboard.receiveAttack(3, 2);

 // Attack the second ship
 testGameboard.receiveAttack(4, 4);
 testGameboard.receiveAttack(4, 5);
 testGameboard.receiveAttack(4, 6);
 testGameboard.receiveAttack(4, 7);

 // Attack the third ship
 testGameboard.receiveAttack(6, 3);
 testGameboard.receiveAttack(7, 3);


export{createGameboard, Gameboard}