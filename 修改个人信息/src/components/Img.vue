<template>
  <div class="info-container">
    <ul class="info-list">
      <li>姓名：{{ person.name }}</li>
      <li>联系方式：{{ person.contact }}</li>
      <li>生日：{{ person.birthday.year }} {{ person.birthday.month }} {{ person.birthday.day }}</li>
      <li>性别：{{ person.gender === 'male' ? '男' : '女' }}</li>
    </ul>
    <button class="edit-btn" @click="showEditModal = true">修改信息</button>

    <!-- 编辑弹窗 -->
    <div v-if="showEditModal" class="modal-overlay" @click.self="showEditModal = false">
      <div class="modal-content">
        <Edit 
          :user="person" 
          @close="showEditModal = false"
          @save="handleUserSave"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Img">
import { ref } from 'vue'
import Edit from './Edit.vue'

// 接收父组件传递的用户数据
const props = defineProps<{
  person: {
    name: string
    contact: string
    birthday: { day: number; month: number; year: number }
    gender: 'male' | 'female'
    avatar?: string
  }
}>()
// 声明要触发的事件
const emit = defineEmits(['update:person'])  // 与 Vue 的 v-model 语法糖兼容

// 控制弹窗显示状态
const showEditModal = ref(false)


const handleUserSave = (updatedUser: typeof props.person) => {
  console.log('用户修改后的数据：', updatedUser)
  emit('update:person', updatedUser)
}
</script>

<style scoped>
.info-container {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.info-list li {
  padding: 8px 0;
  font-size: 16px;
  color: #333;
}

.edit-btn {
  padding: 10px 20px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.edit-btn:hover {
  background: #1976d2;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  width: 90%;
  max-width: 500px;
  padding: 20px;
  position: relative;
}
</style>
    