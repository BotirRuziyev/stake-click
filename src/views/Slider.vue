<template>
  <div class="slider">
    <div class="main_container px-0">
      <swiper
        :pagination="{ clickable: true }"
        :modules="modules"
        autoHeight="{true}"
        class="slider_in"
      >
        <swiper-slide class="position-relative">
          <div class="slider_img">
            <img src="@/assets/img/mobile_ver.png" alt="" />
          </div>
          <div
            class="slider_body position-absolute d-flex flex-column justify-content-end"
          >
            <div class="title">Click the screen and earn coins!</div>
            <p class="description">
              Soon you'll be able to trade them on stake.com or sell them on the
              exchange
            </p>
            <button
              class="body_btn d-flex align-items-center justify-content-center border-0"
            >
              Continue
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider_img">
            <img src="@/assets/img/GIF.png" alt="" />
          </div>
          <div
            class="slider_body position-absolute d-flex flex-column justify-content-end"
          >
            <div class="title">Enter the giveaway!</div>
            <p class="description">
              And while you're waiting for the listing, <br />
              win real money!
            </p>
            <button
              class="body_btn d-flex align-items-center justify-content-center border-0"
            >
              Continue
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="slider_body position-absolute d-flex flex-column justify-content-end"
          >
            <div class="title">Game changer, again!</div>
            <p class="description">
              In 2018, Stake.com became the first cryptocasino, gaining the
              status of the most popular one. In 2023 it had a net profit of
              $2.3 billion and reached 166 million players. We're turning the
              StakeClick game around again!
            </p>
            <button
              class="body_btn d-flex align-items-center justify-content-center border-0"
            >
              Flip the game!
            </button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">
.slider {
  background: #0f1521;
  min-height: 1050px;
  .main_container {
    max-width: 591px;
  }
  .slider_in {
    .swiper-slide {
      min-height: 1050px;

      &:nth-child(1) {
        background: url("@/assets/img/slider1.png");
        background-position: top center;
        background-size: cover;
      }
      &:nth-child(2) {
        background: url("@/assets/img/slider2.png");
        background-position: top center;
        background-size: cover;
        .slider_img {
          max-width: 552px;
          margin: 53px auto 334px;
          img {
            width: 100%;
            animation: rotate 3s infinite;
            transform-origin: bottom left;
          }
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(15deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        }
      }
      &:nth-child(3) {
        background: url("@/assets/img/slider3.png");
        background-position: top center;
        background-size: 100%;
        .slider_body {
          min-height: 665px;
          height: 665px;
        }
      }
      .slider_img {
        max-width: 466px;
        margin: 96px auto 187px;
        padding: 0 22px;
        img {
          width: 100%;
        }
      }
      .slider_body {
        width: 100%;
        min-height: 955px;
        height: 955px;
        left: 0;
        bottom: 0;
        z-index: 2;
        background: url("@/assets/img/bg_blur.png");
        background-size: cover;
        padding: 0 22px 150px;
        .title {
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 33px;
          text-align: center;
          color: #fff;
        }
        .description {
          max-width: 545px;
          margin: 0 auto;
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 20px;
          text-align: center;
          color: #fff;
          margin-bottom: 80px;
        }
        .body_btn {
          max-width: 278px;
          width: 100%;
          height: 67px;
          margin: 0 auto;
          border-radius: 20px;
          background: #3ff2b2;
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 20px;
          text-align: center;
          color: #161e31;
          position: relative;
          overflow: hidden;
          &::before {
            content: "";
            width: 28px;
            height: 233px;
            background: #fff;
            filter: blur(10px);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(15deg);
            z-index: 2;
            animation: buttonblur 2s ease-in infinite;
          }
          @keyframes buttonblur {
            from {
              left: -30px;
            }
            to {
              left: 110%;
            }
          }
        }
      }
    }
    .swiper-pagination {
      display: flex;
      align-items: center;
      background: #0f1521;
      width: fit-content;
      border-radius: 37px;
      padding: 8.5px 20px;
      top: auto;
      bottom: 245px;
      left: 50%;
      transform: translateX(-50%);
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: #989898;
      }
      .swiper-pagination-bullet-active {
        width: 11px;
        height: 11px;
        background: #fff;
      }
    }
  }
}
@media (max-width: 450px) {
  .slider {
    min-height: 850px;
    .slider_in {
      .swiper-slide {
        min-height: 850px;
        .slider_body {
          .title {
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 5px;
          }
          .description {
            font-size: 14px;
            line-height: 20px;
          }
          .body_btn {
            height: 60px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
