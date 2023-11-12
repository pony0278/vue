<template>
  <div class="home">
    <Navbar />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { onMounted } from "vue";
import axios from "../utils/http";
import { registerType, registerRulesType, userType } from "../utils/types";
import { useAuthStore } from "../store";

const store = useAuthStore();
const loginUser = ref<registerType>({
  email: "27732357@qq.com",
  password: "321321",
});
const { email, password } = loginUser.value;
onMounted(async () => {
  try {
    const data = await axios.get(`http://localhost:5000/login?email=${email}&password=${password}`);
    store.setUser(data.data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>