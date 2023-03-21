<template>
  <body>
    <h1 align="center">TO DO LIST</h1> 
    <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list='list' @del="del"></nav-main>
    <nav-footer :list='list' @clear='clear'></nav-footer>
  </div>
  </body>
</template>

<script>
import NavHeader from'@/components/navHeader/NavHeader.vue'
import NavMain from'@/components/navMain/NavMain.vue'
import NavFooter from'@/components/navFooter/NavFooter.vue'
import {defineComponent, ref, computed} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let value = ref('')
    //添加
    let add = (val) => {    
      value.value = val
      let flag = true
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false
          alert("The task is repeated!")
        }
      })
      if (flag) {
        store.commit('addTodo', {
        title: value.value,
        complete: false
      })
      }
      
      console.log(val)
    }
    //删除
    let del = (val) => {
      store.commit('delTodo', val)
      console.log(val)
    }
    //清除已完成
    let clear = (val) => {
      store.commit('clear', val)
    }
    return {
      add,
      value,
      list,
      del, 
      clear
    }
  }
})
</script>

<style scoped lang="scss">
  body {
    background-image: url('../assets/abstract-g70122296e_1920.jpg');
  }
  div {
    font-family: 'Courier New', Courier, monospace;
    // background-color: bisque;
  }
  h1 {
    margin: 0 auto;
  }
</style>