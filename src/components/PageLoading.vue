<template>
  <div
    class="page_loading d-flex align-items-center justify-content-center position-fixed"
  >
    <div
      class="page_loading_animation position-relative d-flex align-items-center justify-content-center"
    >
      <div class="loading_border"></div>
      <div class="logo position-absolute">
        <img height="70px" src="@/assets/img/Logo.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import loadingSmall from "./UI/loading-small.vue";
export default {
  components: {
    loadingSmall,
  },
};
</script>

<style lang="scss">
.page_loading {
  width: 100%;
  min-height: 100vh;
  background: #151d30;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: 0.2s;
  .page_loading_animation {
    width: 202px;
    height: 202px;
    .loading_border {
      width: 100%;
      height: 100%;
      transform-origin: center;
      border-radius: 50%;
      border: 4px solid #dbdbdb;
      border-top-color: transparent;
      animation: load 1.3s infinite linear;
    }
    @keyframes load {
      to {
        transform: rotate(1turn);
      }
    }
    .logo {
      transform-origin: center;
      animation: scale 1.3s infinite;
      transition: all 0.2s ease-out;
    }
    @keyframes scale {
      0% {
        transform: scale(0.4);
        filter: blur(3px);
      }
      50% {
        transform: scale(1.1);
        filter: blur(0px);
      }
      100% {
        transform: scale(0.4);
        filter: blur(3px);
      }
    }
  }
}
.page_loading.no_loading {
  z-index: -1;
  visibility: hidden;
}
</style>
