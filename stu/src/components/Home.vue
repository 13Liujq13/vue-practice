<template>
    <h2>Home</h2>
</template>

<script lang="ts" setup>
    import {onMounted} from 'vue'
    import {useRouter} from 'vue-router'
    //在此处写一段代码，使得Home页面在3秒后自动跳转到news页面
    const router = useRouter()
    onMounted(()=>{
        setTimeout(()=>{
            router.push('/news')
        },3000)
    })
</script>