<template>
    <div class="container">
      <div>
        Completed--{{ isComplete }} / All--{{ list.length }}
      </div>

      <div v-if="isComplete > 0" class="btn">
        <button @click="clear">Clear Completed Tasks</button>
        
      </div>
    </div>
  </template>
  
  <script>
import { computed, defineComponent, ref} from 'vue';
export default defineComponent ({
    name: 'navFooter',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    setup(props,ctx) {
        let isComplete = computed(() => {
            let arr = props.list.filter(item => {
                return item.complete
            })
            return arr.length
        })
        //清除已完成
        let clear = () => {
            let arr = props.list.filter(item => {
                return item.complete === false
            }) 
            ctx.emit('clear', arr)
            // console.log("clear")
        }
        return {
            isComplete,
            clear
        }
    }
})
  </script>
  
  <style scoped lang="scss">
    .container{
        display: flex;
        align-items: center;
        .btn{
            margin-left: 10px;
        }
        div {
            margin:0 auto
        }
    }

  </style>