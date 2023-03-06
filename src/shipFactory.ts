interface Ship {
    length: number;
    timesHit: number;
    hit: () => void;
    isSunk: () => boolean;
  }
  
  function createShip(length: number): Ship {
    let timesHit = 0;
  
    const hit = (): void => {
      timesHit++;
      ship.timesHit = timesHit;
    };
  
    const isSunk = (): boolean => {
      return timesHit >= length;
    };
  
    const ship: Ship = {
      length,
      timesHit,
      hit,
      isSunk,
    };
  
    return ship;
  }
  
  const carlos: Ship = createShip(3);
  
  carlos.hit();
  carlos.hit();
  carlos.hit();

  
  console.log(carlos.timesHit);
  console.log(carlos.isSunk());
  
  export{createShip, Ship}