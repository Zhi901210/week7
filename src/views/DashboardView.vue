<template>
  <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary">
    <div class="container-fluid">
      <router-link to="/admin" class="navbar-brand">後台頁面</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/admin/products" class="nav-link" >產品</router-link>
          <router-link to="/admin/Orders" class="nav-link ">訂單</router-link>
          <router-link to="/admin/coupons" class="nav-link">優惠券</router-link>
          <a href="#" class="nav-link" @click.prevent="logout()">登出</a>
          <router-link to="/" class="nav-link">回前台</router-link>
        </div>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = 'qqqapi= ;expires= ;'
      this.$router.push('/login')
    },
    check () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)qqqapi\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${VITE_APP_URL}/v2/api/user/check`)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  },
  mounted () {
    this.check()
  }
}
</script>
