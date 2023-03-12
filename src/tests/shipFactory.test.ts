import { createShip, Ship } from "../functions/shipFactory";

let testShip: Ship;

beforeEach(() => {
  testShip = createShip(5);
});

test("Registers hit correctly", () => {
  testShip.hit();
  expect(testShip.timesHit).toBe(1);
  testShip.hit();
  expect(testShip.timesHit).toBe(2);
});


test("Isn't sinked at 0 hits", () => {


  expect(testShip.isSunk()).toBeFalsy()
})

test("Isn't sinked at 4/5 hits", () => {
  testShip.hit()
  testShip.hit()
  testShip.hit()
  testShip.hit()

  expect(testShip.isSunk()).toBeFalsy()
})

test("Sinks at 5/5 hits", () => {
  testShip.hit()
  testShip.hit()
  testShip.hit()
  testShip.hit()
  testShip.hit()
  expect(testShip.isSunk()).toBeTruthy()
})