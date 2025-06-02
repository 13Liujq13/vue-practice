<template>
  <div class="counter">
    <h2> 当前求和为：{{ sum }}</h2>
    <h3>school:{{ school }}</h3>
    <h3>class:{{ Class }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts" setup name="Counte">
    import { ref } from 'vue';
    let n = ref(1)
    //引用countStore
    import {useCountStore} from '@/store/count'
    //使用useCountStore，得到一个专门保存count的store
    const countStore = useCountStore()
    //storeToRefs可以将store中的数据转化为响应式数据，方便使用
    import {storeToRefs} from 'pinia'
    const {sum, school, Class} = storeToRefs(countStore)
    //以下两种方式都可以获取到sum的值
    // console.log(countStore.sum)
    // console.log(countStore.$state.sum)
    
    function increment() {
      //第一种修改formStore的方法
      // countStore.sum+=1;
      /*第二种修改formStore的方法
       countStore.$patch({
        sum:countStore.sum+1
      })*/
      //第三种修改formStore的方法 推荐 通过在store中定义actions
        countStore.add(n.value);
    }
    function decrement() {
        countStore.reduce(n.value)
    }
</script>

<style scoped>
.counter {
  align-items: center;
  gap: 10px;
  font-size: 20px;
  background-color: #afaf3d;
}

button {
  padding: 5px 15px;
  font-size: 18px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button:hover {
  background-color: #e0e0e0;
}
</style>