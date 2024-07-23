<template>
  <div class="reload">
    <div class="main_container d-flex flex-column align-items-center">
      <div class="reload_top d-flex justify-content-end w-100">
        <router-link to="#">
          <svg
            width="50"
            height="108"
            viewBox="0 0 50 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.0607 57.9393C25.4749 57.3536 24.5251 57.3536 23.9393 57.9393L14.3934 67.4853C13.8076 68.0711 13.8076 69.0208 14.3934 69.6066C14.9792 70.1924 15.9289 70.1924 16.5147 69.6066L25 61.1213L33.4853 69.6066C34.0711 70.1924 35.0208 70.1924 35.6066 69.6066C36.1924 69.0208 36.1924 68.0711 35.6066 67.4853L26.0607 57.9393ZM26.5 102L26.5 59L23.5 59L23.5 102L26.5 102Z"
              fill="white"
            />
          </svg>
        </router-link>
      </div>
      <div class="logo">
        <router-link to="/">
          <img height="118" src="@/assets/img/Logo.svg" alt="" />
        </router-link>
      </div>
      <div class="reload_in d-flex align-items-center">
        <loading-small class="d-block" />
        RELOAD APP
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
.reload {
  min-height: 100vh;
  background: url("@/assets/img/qr_code_bg.png");
  background-size: cover;
  background-position: top -2px;
  overflow: hidden;
  position: relative;
  z-index: 1000;
  &::before {
    content: "";
    width: 396px;
    height: 222px;
    background: url("@/assets/img/stake-sign.svg");
    position: absolute;
    left: 50%;
    bottom: -52px;
    transform: translateX(-50%);
    z-index: 1;
  }
  .reload_top {
    margin-right: -22px;
    margin-bottom: 100px;
  }
  .logo {
    margin-bottom: 26px;
  }
  .loader-small {
    width: 23px;
    height: 23px;
    border-width: 3px;
  }
  .reload_in {
    gap: 8px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 26px;
    color: #fff;
  }
}
</style>
