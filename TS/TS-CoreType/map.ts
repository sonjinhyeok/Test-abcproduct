{// Map Type

  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [V in keyof T]?: T[V];     // for...in
  };

  type ReadOnly<T> = {
    readonly [V in keyof T]: T[V];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'jinhyeok',
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title?: string;
  //   readonly author?: string;
  // };

}