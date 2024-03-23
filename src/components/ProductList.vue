<template>
  <div>
    <h1 class="center">Products</h1>

    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="each-prod">
        <div class="product-name">{{ product.name }}</div>
        <div class="prod-pic"></div>
        <div>₱{{ product.price }}</div>
        <button class="add-to-cart-btn" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product)
    }
  }
}
</script>

<style scoped>
.center {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  text-align: center;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.each-prod {
  padding: 20px;
  width: calc(33.33% - 20px);
  border-radius: 8px;
  border: solid 2px;
  border-color: rgb(0, 181, 253);
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
}

.each-prod .product-name {
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 10px;
}

.each-prod .prod-pic {
  background-color: white;
  height: 100px;
  width: 100px;
}

.add-to-cart-btn {
  background-color: #ffffff;
  border: 3%;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
