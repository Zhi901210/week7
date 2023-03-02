<template>
  <h1>這是單一產品頁面</h1>
  <div class="container">
    <div class="modal-body">
      <h5 class="modal-title" id="exampleModalLabel">
        <span>{{ product.title }}</span>
      </h5>
      <div class="row">
        <div class="col-sm-6">
          <img class="img-fluid" :src="product.imageUrl" alt="">
        </div>
        <div class="col-sm-6">
          <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
          <p>商品描述：{{ product.description }}</p>
          <p>商品內容：{{ product.content }}</p>
          <div class="h5" v-if="!product.price">{{ product.price }} 元</div>
          <del class="h6" v-if="!product.price">原價 {{ product.origin_price }} 元</del>
          <div class="h5" v-if="!product.price">現在只要 {{ product.price }} 元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route.params)
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
