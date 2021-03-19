{
  type ToDo = {
    title : string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    todo.title = 'hello?' // readonly なので、変更ができない
  }

}
