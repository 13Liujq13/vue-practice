<template>
    <div class = "news-detail">
        <ul>
            <li>编号:{{ route.query.id }}</li>
            <li>题目:{{ route.query.title }}</li>
            <li>内容:{{ route.query.content }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import {useRoute} from 'vue-router'
    let route = useRoute()
</script>

<style scoped>  
   .news-detail {
        margin: 20px;
        padding-left: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    news.detail li{
        line-height: 10px;
    }
</style>