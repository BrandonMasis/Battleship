interface Coordinate{
  x: number;
  y: number;
  isHit?: boolean;
}

interface Ship {
    length: number;
    timesHit: number;
    hit: () => void;
    isSunk: () => boolean;
    coordinates: Coordinate[];
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

    let coordinates: Coordinate[] = [];
  
    const ship: Ship = {
      length,
      timesHit,
      hit,
      isSunk,
      coordinates
    };
  
    return ship;
  }
  

export{Ship,Coordinate,createShip}