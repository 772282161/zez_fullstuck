import * as React from 'react'
import {useEffect} from 'react'
import { connect } from 'react-redux';
import {addToCart,getGoods} from './redux/actions'


const App=(props)=>{
  const {goods,getGoodsDispatch,handleAddCartClick} = props
  useEffect(()=>{
    getGoodsDispatch()
  },[])
  return(
    <div>
      <h1>Shopping Cart Example</h1>
      <hr/>
      <div className="goods">
        <h2>goods</h2>
        <ul>
          {
            goods.map(good=>(
              <li key={good.id}>
                <p>{good.name}-{good.price}</p>
                <button disabled={good.inventory<=0} onClick={()=>this.handleAddCartClick(good)}>add to cart</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const mapStateToPeops=(state)=>({
  goods:state.goods,
  shopCart:state.shopCart
})

const mapDispatchToPeops =(dispatch)=>({
  handleAddCartClick(good){
    dispatch(addToCart(good))
  },
  getGoodsDispatch(){
    dispatch(getGoods(dispatch));
  }

  
})

export default  connect(mapStateToPeops,mapDispatchToPeops)(App);