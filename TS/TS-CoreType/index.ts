{
  const person1 = {
    name: 'jinhyeok',
  };

  console.log(person1.name);    // jinhyeok
  console.log(person1['name']); // jinhyeok
  
  type Animal = {
    name : string;
    age : number;
    gender : 'male' | 'female';
  };

  type Name = Animal['name'];  // string
  const text: Name = 'hello';  // stringのみ

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal;    // 'name' | 'age' | 'gender'
  const key1: Keys = 'age';
  const key2: Keys = 'name';
  const key3: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person:Person = {
    name: 'jinhyeok',
    gender: 'male',
  };


}