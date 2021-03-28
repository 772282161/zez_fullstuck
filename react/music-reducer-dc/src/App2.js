import React, {useContext, useState} from 'react'
// import logo from './logo.svg';
import './App.css';
// 全局 
const ThemeContext = React.createContext(null);//

export function ChildWithTheme(){
  const theme = useContext(ThemeContext)
  return (
    <div>
      王总嫖娼一直不给钱{theme}
    </div>
  )
}

function ChildNoTheme(){
  console.log('不关心皮肤的子组件被渲染')
  return <div>
    我王总嫖娼还要给钱？开玩笑呢 我王总给钱的时候不要让我重新给钱
  </div>
}

// 为什么? 数据变了，组件要检测哪些地方跟相关的变了的数据，重新渲染  
// VDOM树 => 更新局部 函数是组件  React.createElement
// React.createElement({
//   ChildNoTheme,
//   props:{theme:}//immutable 内存中新的一份
// })

function ThemeAPP({children}){
  const [theme,setTheme] = useState("light")
  const onChangeTheme = ()=>setTheme(theme==='light'?'dark':'light')
  return(
    <ThemeContext.Provider value={theme}>
      <button onClick={onChangeTheme}>付钱</button>
      {children}
    </ThemeContext.Provider>
    
  )
}


function App() {
  return (
    
    <ThemeAPP>
      <ChildWithTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
    </ThemeAPP>
  );
}

export default App;
