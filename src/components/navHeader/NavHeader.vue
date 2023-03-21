<template>
  <div>
    <input
     placeholder="Please enter the task name" 
     v-model="value"
     @keydown.enter="enter"
     >
  </div>
</template>

<script>
import { defineComponent, ref} from 'vue';
export default defineComponent ({
    name: 'navHeader',
    setup(props, ctx) {
        let value = ref('')
        //按下回车确认
        let enter = () => {
            ctx.emit('add', value.value)
            value.value = ''
            // console.log(value.value)
        }
        return {
            value,
            enter
        }
    }
})
</script>

<style scoped lang="scss">
    input {
        width: 300px;
        height: 30px;
        margin-bottom: 10px;
        margin-left:650px;
    }
</style>