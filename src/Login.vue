<template>
    <div>
      <input v-model="userId" placeholder="ID" />
      <input v-model="password" placeholder="Password" type="password" />
      <button @click="handleLogin">登入</button>
      
      <div v-if="loginMessage">{{ loginMessage }}</div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import membersData from './members.json';
  
  export default {
    setup() {
      const userId = ref('');
      const password = ref('');
      const loginMessage = ref('');
      const router = useRouter();
  
      function handleLogin() {
        const member = membersData.members.find(m => m.id === userId.value && m.password === password.value);
        
        if (member) {
          const octalValue = parseInt(member.octal_encoding, 8);
          
          if (octalValue > 7) {
            router.push({ name: 'Dashboard', params: { message: 'AB' } });
          } else {
            router.push({ name: 'Dashboard', params: { message: 'A' } });
          }
        } else {
          loginMessage.value = '登入失敗';
        }
      }
  
      return {
        userId,
        password,
        handleLogin,
        loginMessage
      };
    }
  };
  </script>
  