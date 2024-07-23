<template>
  <div class="earn">
    <div class="earn_in">
      <div class="main_container">
        <div class="logo d-flex justify-content-center">
          <router-link to="/">
            <img height="52px" src="@/assets/img/Logo.svg" alt="logo" />
          </router-link>
        </div>
        <h2 class="page_title">
          Earn <router-link to="#">more coins</router-link>
        </h2>
        <p class="page_description">Complete simple tasks and get coins</p>
        <div class="daily_task earn_card">
          <div class="title">Daily tasks</div>
          <button
            class="daily_task_btn w-100 d-flex align-items-center justify-content-between"
            @click="modal = true"
            :class="loading ? 'loading' : ''"
          >
            <div class="daily_task_btn_in d-flex align-items-center">
              <div class="star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.9841 0.966775L32.2728 14.3182C32.5039 14.8225 32.9713 15.1784 33.519 15.267L47.5808 17.408C48.2165 17.5312 48.7329 17.9941 48.9247 18.6126C49.1165 19.2311 48.9526 19.9049 48.4982 20.3663L38.3229 30.7589C37.93 31.1663 37.7534 31.7358 37.8469 32.294L40.249 46.9686C40.38 47.5995 40.1371 48.2495 39.6244 48.6398C39.1118 49.03 38.4205 49.0912 37.8473 48.7969L25.2701 41.8685C24.7909 41.6029 24.2087 41.6029 23.7296 41.8685L11.1523 48.7969C10.5791 49.0912 9.88789 49.03 9.37524 48.6398C8.86259 48.2495 8.61967 47.5995 8.75071 46.9686L11.1528 32.294C11.2462 31.7358 11.0696 31.1663 10.6767 30.7589L0.50149 20.3663C0.0470828 19.9049 -0.116804 19.2311 0.0749812 18.6126C0.266767 17.9942 0.783144 17.5313 1.41883 17.408L15.4807 15.267C16.0283 15.1784 16.4958 14.8226 16.7269 14.3182L23.0156 0.966775C23.2753 0.379089 23.8573 -7.62939e-06 24.4998 -7.62939e-06C25.1424 -7.62939e-06 25.7244 0.379089 25.9841 0.966775Z"
                    fill="#00FFC2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.487 32.8398C14.7531 31.2198 14.2344 29.5698 13.0894 28.3933L5.12793 20.2614L15.9894 18.6081C17.6493 18.3506 19.0718 17.2831 19.7829 15.7613L24.4996 5.74673L29.2145 15.7584C29.9256 17.2814 31.3488 18.35 33.0097 18.608L43.8712 20.2614L35.908 28.3949C34.7637 29.5719 34.2457 31.222 34.5121 32.8418L36.3577 44.1183L26.9004 38.9087C25.4065 38.0839 23.5938 38.0836 22.0996 38.9078L12.6415 44.1183L14.487 32.8398Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="btn_body">
                <div class="btn_title">Daily rewards</div>
                <p class="btn_description">Perform and earn</p>
              </div>
            </div>
            <Loading />
          </button>
          <div class="task_list">
            <div class="task_list_title">Task list</div>
            <div
              class="list_item position-relative"
              v-for="(item, i) in 3"
              :key="i"
              @click="taskBtn(i, $event)"
            >
              <div
                class="list_item_in d-flex align-items-center position-ralative"
              >
                <div class="star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M21.4995 4.33334L25.3329 12.6667C25.4995 13.1667 25.9995 13.5 26.4995 13.6667L35.1662 15C36.6662 15 37.1662 16.6667 36.1662 17.6667L29.8329 24.1667C29.4995 24.5 29.3329 25.1667 29.3329 25.6667L30.8329 34.6667C30.9995 36 29.6662 37.1667 28.4995 36.5L20.6662 32.1667C20.1662 31.8333 19.6662 31.8333 19.1662 32.1667L11.3329 36.5C10.1662 37.1667 8.6662 36.1667 8.99953 34.6667L10.4995 25.6667C10.6662 25.1667 10.3329 24.5 9.99953 24.1667L3.6662 17.6667C2.83286 16.6667 3.33286 15 4.6662 14.8333L13.3329 13.5C13.8329 13.5 14.3329 13 14.4995 12.5L18.3329 4.16667C19.1662 3 20.8329 3 21.4995 4.33334Z"
                      fill="#DBDBDB"
                    />
                  </svg>
                </div>
                <div class="list_body">
                  <div class="list_title">Subscribe to Stake click</div>
                  <p class="list_description">Get: 15 000 STAKE</p>
                </div>
                <div class="galchca position-absolute">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.15625 13.8437C0.15625 21.4044 6.28482 27.5312 13.8437 27.5312C21.4026 27.5312 27.5312 21.4044 27.5312 13.8437C27.5312 6.28482 21.4026 0.15625 13.8437 0.15625C6.28482 0.15625 0.15625 6.28482 0.15625 13.8437ZM11.6828 19.8337L9.14379 17.2921L6.57226 14.7146L9.11129 12.173L11.6888 14.7462L18.5762 7.85546L21.1152 10.3971L11.6828 19.8337Z"
                      fill="#41FDB9"
                    />
                  </svg>
                </div>
              </div>
              <div class="list_item_btn d-grid position-absolute">
                <button
                  class="go_again_btn d-flex align-items-center justify-content-center border-0"
                >
                  Go again
                </button>
                <button
                  class="check_btn d-flex align-items-center justify-content-center border-0"
                  @click="check(i)"
                >
                  <span>Check</span>
                  <Loading />
                </button>
              </div>
            </div>
          </div>
        </div>
        <daily-rewerds
          :class="modal ? 'active' : ''"
          @modalupdate="modalupdate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/UI/loading-small.vue";
import dailyRewerds from "@/components/daily-rewerds.vue";
export default {
  components: {
    Loading,
    dailyRewerds,
  },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    modalupdate(modal) {
      this.modal = modal;
    },
    taskBtn(index, e) {
      let check = !e.target.closest(".check_btn");
      document.querySelectorAll(".task_list .list_item_btn").forEach((e, i) => {
        if (i == index && check) {
          e.classList.add("active");
        }
      });
    },
    check(index) {
      document.querySelectorAll(".task_list .list_item").forEach((e, i) => {
        if (i == index) {
          e.classList.add("active");
        }
      });
      document.querySelectorAll(".task_list .list_item_btn").forEach((e, i) => {
        if (i == index) {
          e.classList.remove("active");
        }
      });
      // star animation
      document.querySelectorAll(".task_list .list_item").forEach((e, i) => {
        if (i == index) {
          e.classList.add("animation");
        }
      });
      setTimeout(() => {
        document.querySelectorAll(".task_list .list_item").forEach((e, i) => {
          if (i == index) {
            e.classList.remove("animation");
          }
        });
      }, 3000);

      // loading start
      // document.querySelectorAll(".task_list .check_btn").forEach((e, i) => {
      //   if (i == index) {
      //     e.classList.add("loading");
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.earn {
  background: linear-gradient(180deg, #151d30 0%, #151d30 44.59%, #151d30 100%);
  .earn_in {
    min-height: 100vh;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    padding: 20px 0 150px;
    background-image: url("@/assets/img/earn_bg.png");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    .logo {
      margin-bottom: 17px;
    }
    .page_title {
      color: #dbdbdb;
      text-align: center;
      font-family: Inter;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 34px;
      align-self: stretch;
      a {
        color: #41fdb9;
        font-family: Inter;
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
      }
    }
    .page_description {
      color: rgba(220, 236, 255, 0.8);
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 14px;
    }
    .earn_card {
      .title {
        color: #dbdbdb;
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        opacity: 0.9;
        margin-bottom: 11px;
      }
      .daily_task_btn {
        border-radius: 14px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: linear-gradient(
          90deg,
          rgba(65, 253, 186, 0.5) 0%,
          rgba(21, 29, 48, 0.5) 100%
        );
        backdrop-filter: blur(4.75px);
        padding: 15px 14px;
        gap: 13px;
        margin-bottom: 15px;
        &::before {
          content: "";
          position: absolute;
          width: 9px;
          height: 16px;
          background: url("@/assets/img/arrown.svg");
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
        }
        .daily_task_btn_in {
          gap: 13px;
        }
        .btn_body {
          .btn_title {
            color: #fff;
            font-family: Manrope;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px;
          }
          .btn_description {
            color: #b8e1ff;
            text-align: left;
            font-family: Manrope;
            font-size: 13px;
            font-style: normal;
            font-weight: 600;
            line-height: 13px;
          }
        }
      }
      .loading {
        .loader-small {
          display: block;
        }
        &::before {
          display: none;
        }
      }
      .task_list {
        .task_list_title {
          color: #dbdbdb;
          font-family: Manrope;
          font-size: 15px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          opacity: 0.9;
          margin-bottom: 15px;
        }
        .list_item {
          position: relative;
          border-radius: 14px;
          background: rgba(43, 104, 149, 0.6);
          padding: 11px 18px;
          margin-bottom: 15px;
          overflow: hidden;
          transition: 0.2s;
          &::after {
            content: "";
            width: 100%;
            height: 100%;
            background: url("@/assets/img/starts.svg");
            background-size: 100%;
            background-repeat: no-repeat;
            position: absolute;
            top: 100%;
            left: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
          &::before {
            content: "";
            position: absolute;
            width: 9px;
            height: 16px;
            background: url("@/assets/img/arrown.svg");
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
          }
          .list_item_in {
            gap: 13px;
            position: relative;
            z-index: 9;
            .list_body {
              transition: 0.4s;
              .list_title {
                color: #dbdbdb;
                font-family: Manrope;
                font-size: 15.122px;
                font-style: normal;
                font-weight: 600;
                line-height: 18px;
              }
              .list_description {
                color: #41fdb9;
                font-family: Manrope;
                font-size: 11.394px;
                font-style: normal;
                font-weight: 600;
                line-height: 11px;
              }
            }
            .galchca {
              top: 50%;
              right: 0;
              transform: translateY(-50%) scale(0.4);
              opacity: 0;
              visibility: hidden;
              transition: 1s;
              z-index: 10;
            }
          }
          .list_item_btn {
            width: 100%;
            height: 100%;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
            background: rgba(43, 104, 149, 1);
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
            align-items: center;
            padding: 0 15px;
            top: 0;
            left: 0;
            visibility: hidden;
            opacity: 0;
            z-index: -1;
            transition: 0.2s;
            button {
              width: 100%;
              height: 43px;
              border-radius: 14px;
            }
            .go_again_btn {
              background: #172c3b;
              font-family: var(--second-family);
              font-weight: 600;
              font-size: 11px;
              text-align: center;
              color: #dbdbdb;
            }
            .check_btn {
              background: #41fdb9;
              font-family: var(--second-family);
              font-weight: 600;
              font-size: 11px;
              text-align: center;
              color: #264b65;
              transition: 0.2s;
              span {
                transition: 0.2s;
              }
            }
            .check_btn.loading {
              background: #33bc8b;
              span {
                display: none;
              }
              .loader-small {
                display: block;
              }
            }
          }
          .list_item_btn.active {
            visibility: visible;
            z-index: 10;
            opacity: 1;
          }
        }
        .list_item.active {
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          background: rgba(18, 53, 79, 0.6);
          &::before {
            display: none;
          }
          .list_item_in {
            .galchca {
              opacity: 1;
              visibility: visible;
              transform: translateY(-50%) scale(0.6);
              animation: scale 5s forwards;
            }
            @keyframes scale {
              0% {
                opacity: 0;
                visibility: hidden;
                transform: translateY(-50%) scale(0);
              }
              50% {
                opacity: 1;
                visibility: visible;
                transform: translateY(-50%) scale(1);
              }
              100% {
                opacity: 1;
                visibility: visible;
                transform: translateY(-50%) scale(0.6);
              }
            }
          }
        }
        .list_item.animation {
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          background: rgba(27, 82, 122, 0.6);
          &::after {
            animation: verticalAnimation 3s forwards;
          }
          @keyframes verticalAnimation {
            to {
              top: calc(1px - 62px);
            }
          }
          &::before {
            display: none;
          }
          .list_item_in {
            .list_body {
              opacity: 0;
              visibility: hidden;
            }
            .star {
              svg {
                animation: star 3s;
              }
              @keyframes star {
                0% {
                  transform: rotate(0);
                }
                33% {
                  transform: rotate(30deg);
                }
                66% {
                  transform: rotate(-30deg);
                }
                100% {
                  transform: rotate(0);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
