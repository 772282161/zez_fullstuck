import * as React from 'react';
import axios from './api/axios'
// 子组件
// 1.props refreshTodos
// 2.React.FC 
// 3.change 事件类型约定  React.Change<HTMLInputElement></HTMLInputElement>

interface Props {
  refreshTodos: () => void
}

const TodoForm: React.FC<Props> = ({ refreshTodos }) => {
  const [name, setName] = React.useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = {
      id: Math.random(),
      name,
      done: false
    }
    if (name.trim()) { // 
      axios('/api/add', newTodo)
      refreshTodos()
      setName('')
    }
  }

  return (

    <form className="todo-form" onSubmit={onSubmit}>
      <input
        className="todo-input"
        onChange={onChange}
        value={name}
        placeholder="请输入代办事项"
      >

      </input>
      <button type="submit">提交表单</button>
    </form>
  )
}

export default TodoForm