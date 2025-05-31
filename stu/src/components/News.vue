<template>
  <div class="news-layout">
    <!-- 左侧导航区 -->
    <div class="news-nav">
      <h2>新闻列表</h2>
      <ul>
        <li v-for="news in NewsList" :key="news.id">
          <!--第一种写法-->
          <!--<RouterLink  :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"  class="nav-link">-->
          
          <!--第二种写法-->
          <RouterLink  :to="{
            path: '/news/detail',
            query:{
              id: news.id,
              title: news.title,
              content: news.content
            }
          }"  class="nav-link">
            {{ news.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
    
    <!-- 右侧内容区 -->
    <div class="news-content">
      <RouterView/>
    </div>
  </div>
</template>

<script lang="ts" setup name="News">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';

const NewsList = ref([
  {id: 1, title: '新闻1', content: '内容1'},
  {id: 2, title: '新闻2', content: '内容2'},
  {id: 3, title: '新闻3', content: '内容3'},
  {id: 4, title: '新闻4', content: '内容4'}
])
</script>


<style scoped>
/* 整体布局 */
.news-layout {
  display: flex;
  min-height: 80vh;
  margin: 20px;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 左侧导航区 */
.news-nav {
  width: 250px;
  padding: 20px;
  background: #f6f8fa;
  border-right: 1px solid #e1e4e8;
}

.news-nav h2 {
  margin: 0 0 15px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e4e8;
  color: #24292e;
}

.news-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.news-nav li {
  margin-bottom: 8px;
}

.nav-link {
  display: block;
  padding: 8px 12px;
  color: #24292e;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-link:hover {
  background: #e1e4e8;
}


/* 右侧内容区 */
.news-content {
  flex: 1;
  padding: 20px;
  background: white;
}
</style>