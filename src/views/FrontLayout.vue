<template>
  <div class="container">
    這是vite前台頁面
    <router-link to="/">首頁</router-link> |
    <router-link to="/products">產品列表</router-link> |
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/login">登入</router-link> |
    <router-link to="/admin">去後台</router-link> |
    <hr />
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
