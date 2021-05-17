// import React, { useState, useEffect } from 'react';
// // styled-component,moment(格式化时间戳),lodash(处理数组去重问题),better-scroll(滚动),axios(数据请求)
// import classNames from 'classnames'
// import TodoForm from './TodoForm'
// import axios from './api/axios'
// // ts+react 类型检测 
// // 1.内置
// // 2.安装 npm i @types/react  类型系统 
// // 3. Prop State type interface 自定义类型  多一个 models文件夹 

// // Todo +  Todos   Promise<Todos>

// // 声明一个类型 ,type 自定义类型关键字
// type Todo = {
//   id: number;
//   name: string;
//   done: boolean;
// }

// //元组 类型 数组  里面的每一项都是Todo
// type Todos = Todo[]





// const App: React.FC = () => {// ts 约束App 函数式组件
//   const [todos, setTodos] = useState<Todos>([])// [] 初始化 Todos 返回类型定义
//   const onToggleTodo = (todo: Todo) => {

//   }
//   const refreshTodos = () => {

//   }

//   useEffect(()=>{

//   },[])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <TodoForm refreshTodos={refreshTodos} />
//         <ul>
//           {
//             todos.map((todo, index) => {
//               <li
//                 key={index}
//                 className={classNames{done:todo.done}}
//                 onClick = {() => onToggleTodo(todo)}
//                 >
//                   {todo.name}
//                 </li>
//             })
//           }
//         </ul>
//       </header>
//     </div >
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
// style-component moment lodash better-scroll axios  
import classNames from 'classnames';
import TodoForm from './TodoForm';
import axios from './api/axios';
// ts + react  类型检测？ 
// 1. 内置
// 2. npm i @types/react 
// 3. Prop  State type interface 自定义类型 models 
//   Todo  Todos  Promise<Todos> 
type Todo = {
  id: number;
  name: string;
  done: boolean;
}
// 元组 
type Todos = Todo[]
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todos>([]);

  const onToggleTodo = (todo: Todo) => {

  }
  const refreshTodos = () => {
    //  接收 todos  .then 交给setTodos
    axios<Todos>('/api/todos')
      .then(setTodos)// 传值需要约束类型
  }
  useEffect(() => {
    refreshTodos()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm refreshTodos={refreshTodos} />
        <ul>
          {
            todos.map((todo, index) => (
              <li
                key={index}
                className={classNames({ done: todo.done })}
                onClick={() => onToggleTodo(todo)}
              >
                {todo.name}
              </li>
            )
            )
          }
        </ul>
      </header>
    </div>
  )
}

export default App;