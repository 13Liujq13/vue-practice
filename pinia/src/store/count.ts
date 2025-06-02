import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    // actions中放入的是一个一个方法，用于响应组件中的动作
    actions: {
        add(value: number = 1) { // 提供默认值1，确保value是一个数字
            if (this.sum < 10) {
                // 修改数据（this是当前的store）
                this.sum += value;
            }
        },
        reduce(value: number = 1) { // 提供默认值1，确保value是一个数字
            this.sum -= value;
        }
    },

    // state中放入的是一个对象，用于存储组件中的数据
    state: () => ({
        sum: 1,
        school: 'jinan',
        Class: '数据科学与大数据技术'
    }),
    // getters中放入的是一个对象，对state数据进行计算，返回计算结果，类似于计算属性
    getters:{
        getSum(state){
            return state.sum*2
        },
        upSchool(state){
            return state.school.toUpperCase()
        }
    }
})
