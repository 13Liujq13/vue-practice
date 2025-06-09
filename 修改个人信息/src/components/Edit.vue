<template>
  <div class="edit-form">
    <h3 class="form-title">编辑个人信息</h3>

    <!-- 头像上传-->
    <Upload/>

    <!-- 姓名输入 -->
    <div class="form-group">
      <label>姓名：</label>
      <input type="text" v-model="localUser.name" placeholder="请输入姓名">
    </div>

    <!-- 联系方式输入 -->
    <div class="form-group">
      <label>联系方式：</label>
      <input type="tel" v-model="localUser.contact" placeholder="请输入手机号">
    </div>

    <!-- 生日选择 -->
    <div class="form-group">
      <label>生日：</label>
      <div class="birthday-group">
        <select v-model="localUser.birthday.year"><option v-for="y in Array.from({length: 41}, (_, i) => 2020 - i)" :key="'year'+y">{{ y }}年</option>
        </select>
        <select v-model="localUser.birthday.month">
          <option v-for="m in 12" :key="'month'+m">{{ m }}月</option>
        </select>
        <select v-model="localUser.birthday.day">
          <option v-for="d in 31" :key="'day'+d">{{ d }}日</option>
        </select>
        
      </div>
    </div>

    <!-- 性别选择 -->
    <div class="form-group">
      <label>性别：</label>
      <div class="gender-group">
        <label>
          <input type="radio" value="male" v-model="localUser.gender"> 男
        </label>
        <label>
          <input type="radio" value="female" v-model="localUser.gender"> 女
        </label>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="form-actions">
      <button class="btn cancel" @click="onCancel">取消</button>
      <button class="btn save" @click="onSave">保存</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="Edit">
import { reactive,defineEmits} from 'vue'
import Upload from './Upload.vue'

const props = defineProps<{
  user: {
    name: string
    contact: string
    birthday: { day: number; month: number; year: number }
    gender: 'male' | 'female'
    avatar?: string
  }
}>()



const emit = defineEmits(['close', 'save'])

// 创建本地响应式副本（避免直接修改父组件props）
const localUser = reactive({ ...props.user })

// 取消编辑
const onCancel = () => {
  emit('close') // 触发关闭事件
}

// 保存编辑
const onSave = () => {
  emit('save', localUser) // 传递修改后的数据
  emit('close') // 关闭弹窗
}
</script>

<style scoped>
.edit-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-title {
  margin: 0 0 20px 0;
  color: #2c3e50;
  font-size: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #34495e;
  font-size: 14px;
}

input, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 14px;
}

.birthday-group {
  display: flex;
  gap: 10px;
}

.birthday-group select {
  flex: 1;
}

.gender-group {
  display: flex;
  gap: 20px;
}

.gender-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.form-actions {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.cancel {
  background: #ecf0f1;
  color: #7f8c8d;
}

.save {
  background: #2ecc71;
  color: white;
}

.avatar-upload {
  margin-bottom: 20px;
  text-align: center;
}

.avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
}
</style>
    