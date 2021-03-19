/*
  type と interface の使い分け
  Interface = Interface は、オブジェクトや関数、クラスの 仕様を定めるため
  type : 再利用する型に対して名前をつける
*/

type PositionType = {
  x: number;
  y: number;
}

interface PositionInterface {
  x: number;
  y: number;
}

// object 
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends 
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };


