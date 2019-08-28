<template>
  <div class="slot" v-show="show">
    <div class="body">
      <button class="close" @click="close">x</button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Signin",
  data() {
    return {
      show: true
    };
  },
  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
