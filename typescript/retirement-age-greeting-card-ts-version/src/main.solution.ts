function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
console.log(result);

interface Todo {
  text: string,
  date: Date,
  isComplete: boolean
}

function createTodo(text: string): Todo {
  return {
    text: text,
    date: new Date,
    isComplete: false,
  }
}

const newTodo = createTodo('learn TypeScript');
function toggleTodo(todo: Todo) {
  todo.isComplete = !todo.isComplete;
}

toggleTodo(newTodo);

export {};
