<template>
  <div id="app" class="container" style="height: 100vh">
    <div class="products-container">
      <product-list
        :products="products"
        @add-to-cart="addToCart"
        :logged-in="isLoggedIn"
      ></product-list>
    </div>
    <div v-if="cart.length > 0" class="cart-container">
      <shopping-cart
        :cart="cart"
        @remove-from-cart="removeFromCart"
        @update-quantity="updateQuantity"
      ></shopping-cart>
    </div>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart,
    LoginForm // Include LoginForm component here
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Lipstick', price: 15 },
        { id: 2, name: 'Foundation', price: 25 },
        { id: 3, name: 'Blush-on', price: 35 },
        { id: 4, name: 'Sunscreen', price: 30 },
        { id: 5, name: 'Mascara', price: 20 }, // Corrected spelling
        { id: 6, name: 'Contact Lens', price: 40 }
      ],
      cart: [],
      isLoggedIn: false
    }
  },
  methods: {
    addToCart(product) {
      if (!this.isLoggedIn) {
        alert('Please login to add items to your cart.')
        this.$router.push('/Login') // Corrected path
        return
      }

      const existingItemIndex = this.cart.findIndex((item) => item.id === product.id)
      if (existingItemIndex !== -1) {
        this.cart[existingItemIndex].quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId)
    },
    updateQuantity(payload) {
      const { productId, quantity } = payload
      const cartItem = this.cart.find((item) => item.id === productId)
      if (cartItem) {
        cartItem.quantity = quantity
      }
    },
    login() {
      this.isLoggedIn = true
    }
  }
}
</script>

<style>
.container {
  width: 500vh;
  justify-content: space-between;
}

.products-container {
  padding: 20px;
  flex-grow: 1;
}

.cart-container {
  background-color: rgb(0, 181, 253);
  border: 1px solid #ccc;
  padding: 20px;
  width: 70%;
}
</style>
