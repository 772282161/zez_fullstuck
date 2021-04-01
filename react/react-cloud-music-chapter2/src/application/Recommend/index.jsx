import * as React from 'react'
import {useEffect} from 'react'
import { connect } from 'react-redux'
import {actionCreators} from './store'
const Recommend =(props)=>{
    const {enterLoading,recommendList,getRecommendListDataDispatch}=props
    // console.log(props.enterLoading)
    useEffect(()=>{
        getRecommendListDataDispatch()
    },[])
    const recommendListJS= recommendList?recommendList.toJS():[]
    return(
        <div>
            Recommend
            {recommendListJS
                .map((item,index)=>(
                    <img key={index} src={item.picUrl}>
                        
                    </img>
                ))
            }
            {enterLoading?'enterLoading':null}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        recommendList:state.getIn(['recommend','recommendList']),
        enterLoading:state.getIn(['recommend','enterLoading'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getRecommendListDataDispatch(){
            dispatch(actionCreators.getRecommendList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommend)