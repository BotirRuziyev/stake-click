<template>
  <div class="qr_code">
    <div class="main_container">
      <div class="qr_code_img">
        <img src="@/assets/img/qr-code.svg" alt="" />
      </div>
      <div class="warning">PC access is not allowed</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.qr_code {
  background: url("@/assets/img/qr_code_bg.png");
  background-size: cover;
  background-position: top;
  min-height: 100vh;
  padding-top: 107px;
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
  .qr_code_img {
    max-width: 281px;
    margin: 0 auto;
    background: url("@/assets/img/qr_code_img.png");
    background-size: cover;
    background-position: top;
    border-radius: 21px;
    padding: 27px 31px 22px;
    margin-bottom: 7px;
  }
  .warning {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 22px;
    text-align: center;
    color: #41fdb9;
  }
}
</style>
