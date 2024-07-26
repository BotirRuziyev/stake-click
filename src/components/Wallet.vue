<template>
  <div class="wallet d-flex align-items-center">
    <div
      class="wallet_in w-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div class="setting d-flex align-items-center justify-content-center">
        <div
          class="setting_icon position-absolute"
          :class="setting ? 'active' : ''"
        >
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5 30.625C27.8827 30.625 30.625 27.8827 30.625 24.5C30.625 21.1173 27.8827 18.375 24.5 18.375C21.1173 18.375 18.375 21.1173 18.375 24.5C18.375 27.8827 21.1173 30.625 24.5 30.625Z"
              stroke="white"
              stroke-width="3.0625"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42.5046 15.8729L40.9734 13.2208C40.1281 11.7554 38.2554 11.2547 36.79 12.0999L35.9845 12.5654C32.922 14.3325 29.0939 12.1229 29.0939 8.58725V7.65625C29.0939 5.96422 27.7235 4.59375 26.0314 4.59375H22.9689C21.2769 4.59375 19.9064 5.96422 19.9064 7.65625V8.58725C19.9064 12.1229 16.0783 14.334 13.0158 12.5654L12.2104 12.0999C10.745 11.2547 8.87223 11.7554 8.02698 13.2208L6.49573 15.8729C5.65048 17.3383 6.1512 19.2111 7.61661 20.0563L8.42205 20.5218C11.4845 22.2904 11.4845 26.7096 8.42205 28.4782L7.61661 28.9437C6.1512 29.7889 5.65048 31.6617 6.49573 33.1271L8.02698 35.7792C8.87223 37.2446 10.745 37.7453 12.2104 36.9001L13.0158 36.4346C16.0783 34.666 19.9064 36.8771 19.9064 40.4128V41.3438C19.9064 43.0358 21.2769 44.4062 22.9689 44.4062H26.0314C27.7235 44.4062 29.0939 43.0358 29.0939 41.3438V40.4128C29.0939 36.8771 32.922 34.666 35.9845 36.4346L36.79 36.9001C38.2554 37.7453 40.1281 37.2446 40.9734 35.7792L42.5046 33.1271C43.3499 31.6617 42.8491 29.7889 41.3837 28.9437L40.5783 28.4782C37.5158 26.7096 37.5158 22.2904 40.5783 20.5218L41.3837 20.0563C42.8491 19.2111 43.3514 17.3383 42.5046 15.8729Z"
              stroke="white"
              stroke-width="3.0625"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="setting_icon position-absolute"
          :class="!setting ? 'active' : ''"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.366 4.24199L8.634 5.24199C7.677 5.79399 7.35 7.01699 7.902 7.97399L8.206 8.49998C9.36 10.5 7.917 13 5.608 13L5 13C3.895 13 3 13.895 3 15L3 17C3 18.105 3.895 19 5 19L5.608 19C7.917 19 9.361 21.5 8.206 23.5L7.902 24.026C7.35 24.983 7.677 26.206 8.634 26.758L10.366 27.758C11.323 28.31 12.546 27.983 13.098 27.026L13.402 26.5C14.557 24.5 17.443 24.5 18.598 26.5L18.902 27.026C19.454 27.983 20.677 28.31 21.634 27.758L23.366 26.758C24.323 26.206 24.65 24.983 24.098 24.026L23.794 23.5C22.639 21.5 24.083 19 26.392 19L27 19C28.105 19 29 18.105 29 17L29 15C29 13.895 28.105 13 27 13L26.392 13C24.083 13 22.639 10.5 23.794 8.49999L24.098 7.97399C24.65 7.01699 24.323 5.79399 23.366 5.24199L21.634 4.24199C20.677 3.68999 19.454 4.01699 18.902 4.97399L18.598 5.49999C17.443 7.49999 14.557 7.49999 13.402 5.49999L13.098 4.97399C12.546 4.01699 11.323 3.68899 10.366 4.24199Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="description_container position-relative">
        <p
          class="description position-absolute"
          :class="description ? 'active' : ''"
        >
          This section is under development. Please check back later.
        </p>
        <p
          class="description position-absolute"
          :class="!description ? 'active' : ''"
        >
          This section is under construction. Stay tuned for future updates.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setting: true,
      description: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.setting = !this.setting;
    }, 3000);
    setInterval(() => {
      this.description = !this.description;
    }, 6000);
  },
};
</script>

<style lang="scss" scoped>
.wallet {
  width: 100%;
  min-height: 100vh;
  background: url("@/assets/img/задник.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  visibility: visible;
  z-index: 110;
  .wallet_in {
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(3.799999952316284px);
    background: linear-gradient(180deg, rgba(22, 30, 49, 0) 0%, #191f30 100%);
    .setting {
      width: 49px;
      height: 49px;
      .setting_icon {
        visibility: hidden;
        opacity: 0;
        z-index: -1;
        transition: 1s;
        svg {
          width: 49px;
          height: 49px;
        }
      }
      .setting_icon.active {
        animation: setting 1.5s 1.5s forwards;
        visibility: visible;
        opacity: 1;
        z-index: 2;
        @keyframes setting {
          0% {
            transform: rotate(-180deg);
          }
        }
      }
    }
  }
  .description_container {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  .description {
    position: relative;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    transition: 1s;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
  .description.active {
    visibility: visible;
    opacity: 1;
    z-index: 2;
  }
}
</style>
