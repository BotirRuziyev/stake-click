<template>
  <div class="loader-small"></div>
</template>

<style lang="scss" scoped>
.loader-small {
  width: 18px;
  height: 18px;
  display: none;
  border-radius: 50%;
  border: 2px solid #dbdbdb;
  border-top-color: transparent;
  animation: load 1.3s infinite linear;
}
@keyframes load {
  to {
    transform: rotate(1turn);
  }
}
</style>
