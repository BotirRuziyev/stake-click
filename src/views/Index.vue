<template>
  <div class="home">
    <div class="home_in">
      <div class="main_container d-flex flex-column align-items-center w-100">
        <Header class="w-100" />
        <div class="home_balance d-inline-flex flex-column align-items-center">
          <h2 class="title">BALANCE:</h2>
          <div class="balance_val">100 500 000</div>
          <div
            class="home_balance_bottom d-flex align-items-center justify-content-between w-100"
          >
            <div class="item d-flex align-items-center">
              <span class="item_head"> +1 </span>
              PER CLICK
            </div>
            <div class="item d-flex align-items-center">
              <span class="item_head"> 15/sec </span>
              CLICK SPEED
            </div>
          </div>
        </div>
        <div
          class="home_bottom d-flex align-items-center justify-content-between w-100"
        >
          <router-link to="/" class="home_btn position-relative">
            <span class="home_btn_sum">100.000$</span>
            <span class="home_btn_title">AIRDROP</span>
            <div class="btn_img position-absolute">
              <img src="@/assets/img/rocket.svg" alt="rocket" />
            </div>
          </router-link>
          <router-link to="/" class="home_btn position-relative">
            <div class="btn_img position-absolute">
              <img src="@/assets/img/lightning.svg" alt="lightning" />
            </div>
            <span class="home_btn_title">BOOST</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background: linear-gradient(180deg, #151d30 0%, #151d30 44.59%, #151d30 100%);
  .home_in {
    min-height: 100vh;
    width: 100%;
    background-image: url("@/assets/img/home_bg.png");
    background-position: center;
    background-size: 760px;
    background-repeat: no-repeat;
  }
  .main_container {
    padding: 0 22px;
    min-height: 100vh;
  }
  .home_balance {
    gap: 8px;
    margin-bottom: 325px;
    .title {
      background: linear-gradient(177deg, #6bff71 2.45%, #409944 229.03%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      font-family: Inter;
      font-size: 12.61px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .balance_val {
      color: #dbdbdb;
      text-align: center;
      font-family: Inter;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .home_balance_bottom {
      .item {
        color: #dbdbdb;
        font-family: Inter;
        font-size: 6.667px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        .item_head {
          border-radius: 24px;
          background: #00e701;
          padding: 1.67px 7.3px;
          gap: 7px;
          color: #1e313d;
          text-align: center;
          font-family: Inter;
          font-size: 6.667px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }
  }
  .home_bottom {
    .home_btn {
      width: 121px;
      height: 39px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 48px;
      padding-left: 17px;
      background: linear-gradient(
        90deg,
        rgba(129, 190, 223, 0.4) 0%,
        rgba(70, 103, 121, 0.4) 100%
      );
      text-decoration: none;
      &:nth-child(1) {
        .btn_img {
          top: -5px;
          right: -13px;
        }
      }
      &:nth-child(2) {
        padding-left: 45px;
        .btn_img {
          top: -6px;
          left: -10px;
        }
      }
      .home_btn_sum {
        color: #05ff69;
        font-family: Inter;
        font-size: 10px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }
      .home_btn_title {
        color: #dbdbdb;
        font-family: Manrope;
        font-size: 14.773px;
        font-style: normal;
        font-weight: 700;
        line-height: 14px;
      }
    }
  }
}
</style>
