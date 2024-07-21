<template>
  <div
    class="daily_rewerds_modal d-flex align-items-center justify-content-center"
    @click="modal($event)"
  >
    <div class="modal_in w-100 d-flex flex-column align-items-center">
      <div class="modal_card">
        <div class="card_title">
          YOUR DAILY <router-link to="#">REWARDS</router-link>
        </div>
        <swiper
          :modules="modules"
          :slides-per-view="3.5"
          :space-between="8"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="card_swiper"
        >
          <swiper-slide
            class="position-relative"
            v-for="(item, i) in coin"
            :key="i"
            @click="done(i)"
          >
            <div class="coin">
              <span class="coin_num d-block">{{ item }}</span>
              COIN
            </div>
            <div class="day d-flex align-items-center justify-content-center">
              {{ i + 1 }} DAY
            </div>
            <div class="done">
              <svg
                width="35"
                height="27"
                viewBox="0 0 35 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3333 2L11.7917 23.5417L2 13.75"
                  stroke="white"
                  stroke-width="3.91667"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
          </swiper-slide>
        </swiper>
        <button
          class="get_btn border-0 d-flex align-items-center justify-content-center"
        >
          GET
        </button>
      </div>
      <div class="hoar d-flex align-items-center justify-content-center">
        23:59:59
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Scrollbar, A11y],
    };
  },
  data() {
    return {
      coin: [
        "1K",
        "5K",
        "10K",
        "20K",
        "25K",
        "30K",
        "40K",
        "50K",
        "200K",
        "500K",
        "1M",
        "2M",
        "10M",
      ],
    };
  },
  methods: {
    modal(e) {
      if (!e.target.closest(".modal_in")) {
        this.$emit("modalupdate", false);
      }
    },
    done(i) {
      document.querySelectorAll(".swiper-slide").forEach((e, index) => {
        if (i == index) {
          e.classList.add("active");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.daily_rewerds_modal {
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(3.799999952316284px);
  background: linear-gradient(180deg, rgba(22, 30, 49, 0) 0%, #191f30 100%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  transition: 0.3s;
  .modal_in {
    transform: scale(0.7);
    transition: 0.3s;
    .modal_card {
      max-width: 360px;
      width: 100%;
      border-radius: 29px;
      background: #151d30;
      padding: 40px 0 16px 20px;
      margin-bottom: 26px;
      overflow: hidden;
      .card_title {
        padding-right: 20px;
        margin-bottom: 15px;
        color: #fff;
        text-align: center;
        font-family: "DM Sans";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        a {
          color: #41fdba;
          font-family: "DM Sans";
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-decoration: none;
        }
      }
      .card_swiper {
        padding-right: 20px;
        padding-bottom: 40px;
        .swiper-slide {
          border-radius: 14px;
          background: radial-gradient(
            82.02% 60.33% at 50% 50%,
            #27785b 0%,
            #202e49 100%
          );
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          padding: 33px 0 0 0;
          cursor: pointer;
          &:nth-child(6),
          &:nth-child(7),
          &:nth-child(8) {
            background: radial-gradient(
              82.02% 60.33% at 53.27% 50%,
              rgb(254, 219, 65) 0%,
              rgb(32, 46, 73) 100%
            );
          }
          &:nth-child(9),
          &:nth-child(10),
          &:nth-child(11) {
            background: radial-gradient(
              82.02% 60.33% at 53.27% 50%,
              rgb(254, 153, 35) 0%,
              rgb(32, 46, 73) 100%
            );
          }
          &:nth-child(12),
          &:nth-child(13) {
            background: radial-gradient(
              82.02% 60.33% at 53.27% 50%,
              rgb(254, 35, 35) 0%,
              rgb(32, 46, 73) 100%
            );
          }
          .coin {
            margin-bottom: 18px;
            color: #fff;
            text-align: center;
            font-family: "DM Sans";
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            transition: 0.3s;
            .coin_num {
              color: #fff;
              text-align: center;
              font-family: "DM Sans";
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: 14px;
            }
          }
          .day {
            width: 100%;
            height: 27px;
            border-radius: 11px;
            background: #14303a;
            color: #41fdba;
            text-align: center;
            font-family: "DM Sans";
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            transition: 0.3s;
          }
          .done {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.7);
            opacity: 0;
            z-index: -1;
            visibility: hidden;
            transition: 0.3s;
          }
        }
        .swiper-slide.active {
          .coin {
            opacity: 0;
            z-index: -1;
            visibility: hidden;
            transform: scale(0.7);
          }
          .day {
            opacity: 0;
            z-index: -1;
            visibility: hidden;
            transform: scale(0.7);
          }
          .done {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
            z-index: 2;
            visibility: visible;
          }
        }
      }
      .get_btn {
        width: 319px;
        height: 57px;
        color: #151d30;
        text-align: center;
        font-family: "DM Sans";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border-radius: 14px;
        background: #41fdba;
      }
    }
    .hoar {
      width: 319px;
      height: 57px;
      border-radius: 14px;
      background: #202e49;
      color: #41fdba;
      text-align: center;
      font-family: "DM Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
}
.daily_rewerds_modal.active {
  z-index: 1;
  opacity: 1;
  .modal_in {
    transform: scale(1);
  }
}
</style>
