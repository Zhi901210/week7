<template>
  <div class="container">
    <h1>這是後台訂單頁面</h1>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="180">Email</th>
          <th width="150">購買款項</th>
          <th width="100">應付金額</th>
          <th width="100">是否付款</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
    </table>
    <tbody>
      <template v-for="order in orders" :key="order.id">
        <tr>
          <td width="260">
            <span v-if="order.user">{{ order.user.email }}</span>
          </td>
          <td width="250">
            <ul class="list-unstyled">
              <li v-for="product in order.products" :key="product.id">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right" width="120">{{ order.total }}</td>
          <td width="150">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${order.id}`"
                v-model="order.is_paid"
              />
              <label class="form-check-label" :for="`paidSwitch${order.id}`">
                <span v-if="order.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td width="150">
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#lookOrderModal"
                @click="upOrder(order)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#delOrderModal"
                @click="delOrder(order)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>

    <!-- 分頁 -->
    <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
    <!-- 刪除 -->
    <delOrderModal
      ref="delOrderModal"
      :delorderproduct="copyOrders"
    ></delOrderModal>
    <!-- 檢視 -->
    <lookOrderModal
      ref="lookOrderModal"
      :lookorders="lookorders"
      :copyOrders="copyOrders"
    ></lookOrderModal>
  </div>
</template>

<script>
import delOrderModal from '@/components/delOrderModal.vue'
import lookOrderModal from '@/components/lookOrderModal.vue'
import Pagination from '@/components/PaginationComponents.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      usedata: {
        username: ' ',
        password: ''
      },
      orders: [],
      lookorders: [],
      currentPage: 1,
      pagination: {}
    }
  },
  components: {
    delOrderModal,
    lookOrderModal,
    Pagination
  },
  methods: {
    getOrders (currentPage = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders?page=${currentPage}`
        )
        .then((res) => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delOrder (order) {
      this.copyOrders = { ...order }
    },
    upOrder (order) {
      this.lookorders = { ...order.user }
      this.copyOrders = { ...order }
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
