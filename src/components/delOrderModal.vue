<template>
  <div id="delOrderModal" ref="delOrderModal" class="modal fade" tabindex="-1" aria-labelledby="delOrderModal"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除訂單</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 訂單(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delproduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['delorderproduct'],
  data () {
    return {
      delOrderModal: ''
    }
  },
  methods: {
    getOrders () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders`)
        .then((res) => {
          this.orders = res.data.orders
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delproduct () {
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/order/${this.delorderproduct.id}`)
        .then((res) => {
          this.delOrderModal.hide()
          this.getOrders()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.delOrderModal = new Modal(this.$refs.delOrderModal)
  }
}
</script>
