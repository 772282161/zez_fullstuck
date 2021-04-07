<template>
    <div>
        <h1>{{count}}*2={{double}}</h1>
        <button v-on:click="add">累加</button>
        <div> {{num}} </div>
    </div>
</template>

<script>
import {computed, onMounted, reactive,ref, toRefs } from 'vue'
export default {
    setup(){// 入口函数
        // const state = reactive({//响应式方法 复杂类型
        //     count:1
        // })

        const {state,double} = useCounter(1)

        const num = ref(2)// 用于处理原始类型,响应式

        function add(){
            state.count++
            console.log(state.count)
        }

        

        onMounted(()=>{//声明周期函数
            console.log('onMounted')
        })

        

        return{
            ...toRefs(state),
            add,
            double,
            num
        }
    }
}
function useCounter(count){
            const state = reactive({
                count
            })
            const double = computed(()=>state.count*2)//computed 计算API
            return {state,double}
        }
</script>

<style>

</style>