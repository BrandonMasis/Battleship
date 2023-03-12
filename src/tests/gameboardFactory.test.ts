import { createGameboard,Gameboard } from "../functions/gameboardFactory";



let testGameboard: Gameboard;


beforeEach(()=>{
    testGameboard = createGameboard()

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


    
    
})

test("Correct total number of ships",()=>{
    expect(testGameboard.allShips.length).toBe(3)


})



test("Registers attack correctly",()=>{
    expect(testGameboard.allShips[0].coordinates[0].isHit).toBeFalsy()

    testGameboard.receiveAttack(1,2)

    expect(testGameboard.allShips[0].coordinates[0].isHit).toBeTruthy()
})



test("Registers missed-attacks correctly",()=>{
    expect(testGameboard.missedAttacks.length).toBe(0)

    testGameboard.receiveAttack(9,9)


    expect(testGameboard.missedAttacks.length).toBe(1)


   
})



test("Report 2/3 ships sunked",()=>{

    expect(testGameboard.areShipsSunked()).toBeFalsy()

   // Attack the first ship
    testGameboard.receiveAttack(1, 2);
    testGameboard.receiveAttack(2, 2);
    testGameboard.receiveAttack(3, 2);

    // Attack the second ship
    testGameboard.receiveAttack(4, 4);
    testGameboard.receiveAttack(4, 5);
    testGameboard.receiveAttack(4, 6);
    testGameboard.receiveAttack(4, 7);

   


    expect(testGameboard.areShipsSunked()).toBeFalsy()


   
})


test("Report all ships sunked",()=>{

    expect(testGameboard.areShipsSunked()).toBeFalsy()

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


    expect(testGameboard.areShipsSunked()).toBeTruthy()


   
})
