<template>
  <div class="div-cart">
    <h1 class="center">Cart</h1>
    <div class="div-cart-prod">
      <ul class="cart-list">
        <li v-for="item in cart" :key="item.id" class="cart-item">
          <div style="margin-right: 30px; font-family: 'Courier New', Courier, monospace">
            {{ item.name }}
          </div>
          <div>₱{{ item.price }}</div>
          <br />
          <br />
          <div>
            <input
              class="qty"
              type="number"
              v-model="item.quantity"
              @change="updateQuantity(item.id, item.quantity)"
            />
          </div>
          <button class="remove-from-cart-btn" @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
    </div>
    <br />
    <h2 class="total">Total: ₱{{ totalPrice }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId)
    },
    updateQuantity(productId, quantity) {
      this.$emit('update-quantity', { productId, quantity: parseInt(quantity) })
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.remove-from-cart-btn {
  background-color: #ffffff;
  border: 3%;
  color: black;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.total {
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  margin-top: 10px;
}

.qty {
  width: 50px;
}
</style>
