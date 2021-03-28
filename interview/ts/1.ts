type FunctionProps = {
    //onSomething 函数 参数 + 返回值
    // onSomething:Function
    onSomething:()=>void;
    // input num 
    onChange:(id:number)=>void;
    //@types/react
    onClick:(event:React.MouseEvent<HTMLButtonElement>)
}
// T 类型的一个占位
type Dog<T> =  {name:string,type:T}
const dog:Dog<number> = {name:'王燕杰',type:438} //泛型

interface Props{
    
}

const Item:React.FC<Props> =(props)=>(
    return(
        <div>

        </div>
    )
)