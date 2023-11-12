<template>
  <el-row class="menu-container">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#074c62"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
      >
        <el-menu-item index="1">
          <el-icon><HomeFilled /></el-icon>
          <span>這是首頁</span>
        </el-menu-item>
        <template v-for="menu in menus" :key="menu.path">
          <el-sub-menu v-if="menu.children" :index="menu.path">
            <template #title>
              <el-icon>
                <component :is="menu.icon"></component>
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item, index) in menu.children"
                :key="index"
                :index="item.path"
                >{{ item.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref , computed} from "vue";
import { useAuthStore } from "../store";

const store:any = useAuthStore();
const user = computed(() => store.getUser);
const isAuthenticated = computed(() => store.getAuthenticated);

// const menus = ref([
//   {
//     icon: "Money",
//     name: "外網",
//     path: "fund",
//     children: [
//       { path: "fundList", name: "外網組件", requiresPermission: 'external_network' }
//     ],
//   },
//   {
//     icon: "InfoFilled",
//     name: "內網",
//     path: "info",
//     children: [{ path: "infoshow", name: "內網組件2" }],
//   },
// ]);


// console.log(store.getUser[0].accessible_pages);

const menus = computed(() => {
  const userPermissions = store.getUser[0].accessible_pages || {};
  let dynamicMenus = [];

  if (userPermissions.external_network) {
    dynamicMenus.push({
      icon: "Money",
      name: "外網",
      path: "fund",
      children: [{ path: "fundList", name: "外網組件" }]
    });
  }else{
    dynamicMenus.push({
      icon: "InfoFilled",
      name: "內網",
      path: "info",
      children: [{ path: "infoshow", name: "內網組件" }],
    });
  }

  return dynamicMenus;
});
</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  background-color: #074c62;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 100vh;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-sub-menu .el-menu-item {
  min-width: 180px;
  padding-left: 48px !important;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>