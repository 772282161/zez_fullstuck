

let todos = [
  {
    id: 1,
    name: "代办1",
    done: false
  },
  {
    id: 2,
    name: "代办2",
    done: false
  },
  {
    id: 3,
    name: "代办3",
    done: false
  },

]

type URL = '/api/todos' | '/api/toggle' | '/api/add'

const axios = <T>(url: URL, payload?: any): Promise<T> => {
  let data
  switch (url) {
    case '/api/todos': {
      data = todos.slice()
      break
    }
    case '/api/add': {
      todos.push(payload)
      break
    }
    case '/api/toggle': {
      const todo = todos.find(({ id }) => id === payload)
      if (todo) {
        todo.done = !todo.done
      }
      break
    }
  }
  return Promise.resolve(data as any)
}


export default axios