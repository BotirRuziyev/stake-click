<template>
  <div class="boost">
    <div class="boost_in">
      <div class="main_container position-ralative">
        <div class="back position-absolute">
          <router-link to="#">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5707 25.4734L5.91016 18.5008C5.51172 18.1156 5.3125 17.591 5.3125 17.0133C5.3125 16.4356 5.51172 15.9176 5.91016 15.5258L12.5707 8.52657C13.3609 7.6965 14.6492 7.6965 15.4395 8.52657C16.2297 9.35665 16.2297 10.6981 15.4395 11.5281L12.2387 14.875L26.6488 14.875C27.7777 14.875 28.6875 15.8246 28.6875 17C28.6875 18.1754 27.7777 19.125 26.6555 19.125L12.2453 19.125L15.4461 22.4719C16.2363 23.302 16.2363 24.6434 15.4461 25.4734C14.6492 26.3035 13.3676 26.3035 12.5707 25.4734Z"
                fill="#DBDBDB"
              />
            </svg>
          </router-link>
        </div>
        <div class="logo d-flex justify-content-center">
          <router-link to="/">
            <img height="52px" src="@/assets/img/Logo.svg" alt="logo" />
          </router-link>
        </div>
        <div class="balance d-flex justify-content-between align-items-center">
          <div class="head">Balance</div>
          <div class="balance_val">100 500 321</div>
        </div>
        <div class="daily_boosters">
          <div class="title">Daily boosters</div>
          <div class="daily_boosters_card d-grid">
            <div class="card_item">
              <swiper
                :pagination="{
                  type: 'fraction',
                }"
                :space-between="8"
                :modules="modules"
                class="daily_boosters_swiper"
              >
                <swiper-slide
                  class="d-flex justify-content-between"
                  v-for="item of 4"
                  :key="item"
                >
                  <div class="card_title">Turbo</div>
                  <div
                    class="card_img d-flex align-items-center justify-content-center"
                  >
                    <img
                      height=""
                      src="/img/rocket.01a520e6.svg"
                      alt="rocket"
                    />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="card_item rest_boots">
              <swiper :space-between="8" class="daily_boosters_swiper">
                <swiper-slide
                  class="rest_boots_slide d-flex justify-content-between"
                  v-for="item of 2"
                  :key="item"
                >
                  <div>
                    <div class="card_title">Reset</div>
                    <div class="card_hour">
                      <span v-if="item == 1">Once 24h</span>
                      <span v-else>23:59:59</span>
                    </div>
                  </div>
                  <div
                    class="card_img d-flex align-items-center justify-content-center"
                  >
                    <img
                      height=""
                      src="@/assets/img/battery.svg"
                      alt="battery"
                    />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div class="level_up">
          <div class="title">Level - ups</div>
          <div class="level_up_list d-flex flex-column">
            <div
              class="list_item d-flex align-items-center justify-content-between"
              v-for="item of levelup"
              :key="item.id"
              @click="loadir(item.id)"
            >
              <div class="list_item_in d-flex align-items-center">
                <div
                  class="list_img d-flex align-items-center justify-content-center"
                >
                  <img :src="item.img" alt="left-click" />
                </div>
                <div class="list_body h-100">
                  <div class="list_body_title">
                    {{ item.title }} <span>{{ item.level }}</span>
                  </div>
                  <div class="list_body_sum">{{ item.sum }}</div>
                  <div class="list_body_time">{{ item.time }}</div>
                </div>
              </div>
              <Loading />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/UI/loading-small.vue";
import Wallet from "@/components/Wallet.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import imgUrl1 from "@/assets/img/left-click.svg";
import imgUrl2 from "@/assets/img/speedometer.svg";
import imgUrl3 from "@/assets/img/robot.svg";
import imgUrl4 from "@/assets/img/MINING.svg";
import imgUrl5 from "@/assets/img/safe.svg";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Loading,
    Wallet,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      loading: false,
      levelup: [
        {
          id: 1,
          img: imgUrl1,
          title: "Multitap",
          level: "1 lvl",
          sum: "5 000",
        },
        {
          id: 2,
          img: imgUrl2,
          title: "Speed limit",
          level: "1 lvl",
          sum: "5 000",
          time: "15 click / sec",
        },
        {
          id: 3,
          img: imgUrl3,
          title: "Autobot",
          level: "1 lvl",
          sum: "5 000",
          time: "500/min",
        },
        {
          id: 4,
          img: imgUrl4,
          title: "Mining",
          level: "1 lvl",
          sum: "5 000",
          time: "500/1h",
        },
        {
          id: 5,
          img: imgUrl5,
          title: "Staking",
          level: "1 lvl",
          sum: "5 000 000",
          time: "15 000 000/7 day",
        },
      ],
    };
  },
  methods: {
    loadir(id) {
      document.querySelectorAll(".level_up .list_item").forEach((e, i) => {
        if (i == id - 1) {
          e.classList.add("loading");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.boost {
  background: linear-gradient(180deg, #151d30 0%, #151d30 44.59%, #151d30 100%);
  .boost_in {
    min-height: 100vh;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    padding: 20px 0 50px;
    background-image: url("@/assets/img/boost_bg.png");
    background-position: bottom center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    .back {
      top: 16px;
      left: 22px;
    }
    .logo {
      margin-bottom: 17px;
    }
    .balance {
      background: linear-gradient(90deg, #52ff53 0%, #41fdb9 68.5%);
      border-radius: 13px;
      width: 314px;
      height: 42px;
      padding: 0 24px 0 12px;
      margin-bottom: 6px;
      .head {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 18px;
        color: #000;
      }
      .balance_val {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 18px;
        color: #000;
      }
    }
    .daily_boosters {
      margin-bottom: 33px;
      .title {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 18px;
        color: #dbdbdb;
        line-height: 24px;
        margin-bottom: 11px;
      }
      .daily_boosters_card {
        grid-template-columns: repeat(2, 1fr);
        gap: 23px;
        .card_item {
          max-width: 145px;
          .daily_boosters_swiper {
            border-radius: 8px;
            .swiper-slide {
              padding: 10px 15px 10px 13px;
              background: #40515a;
              border-radius: 8px;
              .card_img {
                border-radius: 8px;
                width: 38px;
                height: 38px;
                img {
                  width: 30px;
                  height: 30px;
                }
              }
              .card_title {
                font-family: var(--font-family);
                font-weight: 500;
                font-size: 14px;
                color: #dbdbdb;
              }
              .card_hour {
                font-family: var(--font-family);
                font-weight: 500;
                font-size: 13px;
                color: #dbdbdb;
                line-height: 13px;
              }
              &:nth-child(1) {
                .card_img {
                  background: #bdffe7;
                }
              }
              &:nth-child(2) {
                background: linear-gradient(90deg, #5a99bc 0%, #dadd26 100%);
                .card_img {
                  background: #fcff50;
                }
              }
              &:nth-child(3) {
                background: linear-gradient(90deg, #5a99bc 0%, #e78a1c 100%);
                .card_img {
                  background: #ffaf50;
                }
              }
              &:nth-child(4) {
                background: linear-gradient(90deg, #5a99bc 0%, #bc2e2e 100%);
                .card_img {
                  background: #41fdba;
                }
              }
            }
            .rest_boots_slide {
              &:nth-child(1) {
                background: linear-gradient(90deg, #294656 0%, #31bc2e 100%);
                .card_img {
                  background: #41fdba;
                }
              }
              &:nth-child(2) {
                background: #40515a;
                .card_img {
                  background: #bdffe8;
                }
              }
            }
            .swiper-pagination-fraction {
              width: fit-content;
              left: 13px;
              font-family: var(--font-family);
              font-weight: 500;
              font-size: 13px;
              color: #dbdbdb;
            }
          }
        }
      }
    }
    .level_up {
      .title {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 18px;
        color: #dbdbdb;
        margin-bottom: 10px;
      }
      .level_up_list {
        gap: 10px;
        .list_item {
          border-radius: 11px;
          backdrop-filter: blur(10px);
          height: 65px;
          padding: 12px;
          gap: 20px;
          .list_item_in {
            gap: 20px;
          }
          .list_img {
            border-radius: 11px;
            width: 45px;
            height: 45px;
            background: linear-gradient(180deg, #41fdba 0%, #52ff54 100%);
          }
          .list_body {
            .list_body_title {
              font-family: var(--font-family);
              font-weight: 500;
              font-size: 14px;
              color: #dbdbdb;
              line-height: 14px;
              span {
                color: rgba(255, 255, 255, 0.5);
              }
            }
            .list_body_sum {
              font-family: var(--font-family);
              font-weight: 500;
              font-size: 14px;
              color: #dbdbdb;
              line-height: 17px;
            }
            .list_body_time {
              font-family: var(--font-family);
              font-weight: 500;
              font-size: 14px;
              color: #dbdbdb;
              line-height: 14px;
            }
          }
          &:nth-child(1) {
            background: linear-gradient(
              90deg,
              rgba(67, 254, 176, 0.5) 0%,
              rgba(41, 70, 86, 0.5) 100%
            );
          }
          &:nth-child(2) {
            background: linear-gradient(
              90deg,
              rgba(49, 148, 104, 0.5) 0%,
              rgba(23, 60, 78, 0.5) 100%
            );
            .list_img {
              background: linear-gradient(90deg, #41fdba 0%, #ffce2e 100%);
            }
          }
          &:nth-child(3) {
            background: linear-gradient(
              90deg,
              rgba(254, 219, 65, 0.5) 0%,
              rgba(41, 70, 86, 0.5) 100%
            );
            .list_img {
              background: linear-gradient(180deg, #52ff55 0%, #fcf429 100%);
            }
          }
          &:nth-child(4) {
            background: linear-gradient(
              90deg,
              rgba(184, 143, 255, 0.5) 0%,
              rgba(41, 70, 86, 0.5) 100%
            );
            .list_img {
              background: linear-gradient(180deg, #d2c0ff 0%, #f9ea67 100%);
            }
          }
          &:nth-child(5) {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.5) 0%,
              rgba(41, 70, 86, 0.5) 100%
            );
            .list_img {
              background: linear-gradient(180deg, #e7ffe8 0%, #8e8e8e 100%);
            }
          }
        }
        .loading {
          .loader-small {
            display: block;
          }
        }
      }
    }
  }
}
</style>
