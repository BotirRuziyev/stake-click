<template>
  <div class="wallet d-flex align-items-center">
    <div class="wallet_in w-100 d-flex flex-column align-items-center">
      <div class="setting">
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
      <p class="description">
        This section is under development. Please check back later.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  width: 100%;
  min-height: 100vh;
  backdrop-filter: blur(3.799999952316284px);
  background: linear-gradient(180deg, rgba(22, 30, 49, 0) 0%, #191f30 100%);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  visibility: visible;
  z-index: 10;
  .description {
    max-width: 300px;
    margin-top: 20px;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
}
</style>
