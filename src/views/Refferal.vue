<template>
  <div class="refferal">
    <div class="refferal_in">
      <div class="main_container">
        <div class="logo d-flex justify-content-center">
          <router-link to="/">
            <img height="52px" src="@/assets/img/Logo.svg" alt="logo" />
          </router-link>
        </div>
        <div class="invite_friends">
          <div class="invite_friends_title">Invite friends!</div>
          <div class="invite_friends_body">You'll get 20% of their income</div>
          <div class="invite_friends_card d-flex align-items-center">
            <div class="card_img">
              <svg
                width="61"
                height="58"
                viewBox="0 0 61 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.8291 22.0446V22.0908C60.7586 22.1814 60.7493 22.4194 60.8291 22.5068V22.8303C60.7103 24.6789 59.7531 26.6828 58.7736 28.1774C56.6569 31.1245 53.5472 33.5457 50.2849 35.1143C49.7476 35.4382 49.1226 35.6282 48.6155 35.9447C47.6754 35.9729 48.074 36.9883 48.0076 37.6039C47.8689 39.6554 47.9376 41.8159 47.6991 43.8129C47.5418 45.6296 47.3144 47.6534 46.7808 49.5533C46.6616 50.7558 46.0988 52.0923 45.413 53.1821C44.3147 54.9161 42.0323 54.9475 40.3819 55.3805C38.0281 55.5238 35.4339 55.5483 33.2643 54.0754C32.7251 53.6793 32.3939 53.1973 32.0477 52.6529C31.7661 52.1894 31.9322 51.0622 31.1026 51.3603C30.2354 51.1481 30.4521 52.3123 30.1166 52.8276C29.1042 55.118 27.4454 57.1991 24.951 57.7135C24.3798 57.8993 23.843 57.8207 23.2458 58H23.1066C23.0008 57.9288 22.7452 57.9205 22.6426 58H22.3642C21.0864 57.8239 19.8062 57.81 18.5094 57.218C17.2339 56.7619 16.0029 56.1274 15.1144 55.0538C14.1279 54.1249 13.7706 52.7014 13.4588 51.4342C12.7202 47.1704 12.7944 42.7596 12.9763 38.3738C13.0227 37.0595 12.4631 35.8052 12.574 34.4765C11.8576 34.0264 10.9259 33.786 10.1288 33.3535C6.23263 31.485 2.36063 28.4958 0.643394 24.5901C0.282867 23.7583 0.0675812 22.7915 -0.000164032 21.8135V21.3976C0.204922 20.2686 0.714844 18.8003 2.08826 19.0411C2.68124 18.859 3.17215 19.5851 3.71548 19.3216C5.06987 19.0605 5.52644 20.6716 5.74312 21.7313C5.77607 22.3607 6.47298 22.5895 6.97038 22.8659C8.71638 23.4972 10.3881 24.0138 12.11 24.5402C12.3309 23.8401 12.0771 23.1173 12.239 22.4042C12.2747 20.391 12.6877 18.1385 13.7024 16.2363C14.1734 14.8767 14.9492 13.7421 15.7709 12.6121C15.9495 11.9013 15.7426 11.2127 15.9143 10.4904C15.9245 8.9588 16.0066 7.5742 16.3783 6.14615C16.5926 5.48574 16.9081 4.579 17.7554 4.82163C19.1701 5.14698 20.0531 6.3592 21.0975 7.26964C21.42 8.10521 22.1633 7.21788 22.7238 7.08986C24.3928 6.28618 26.5313 5.85037 28.4889 5.59203C28.2467 5.06056 27.6096 4.69592 27.425 4.0637C27.6036 3.36539 28.4063 3.6302 28.8601 3.28127C28.5497 2.93004 28.1595 2.53351 27.8857 2.1259C27.3679 2.27656 26.4608 2.01128 26.4102 1.3749C26.1481 0.608191 26.781 0.1331 27.4217 0H27.4681C28.0393 0.147426 28.4272 0.633147 28.4889 1.20159C28.6708 1.69286 29.1765 2.02977 29.4596 2.49931C29.7923 2.9 30.3713 3.27203 30.3133 3.80443C30.1101 4.3701 29.3756 4.23516 28.9529 4.34422C29.2086 4.80961 29.4772 5.28794 29.9426 5.57678C32.0403 5.58325 34.1802 5.96776 36.1438 6.70212C36.6584 6.72245 37.2644 7.50349 37.6305 6.97941C37.8123 6.47982 38.1947 6.06666 38.4285 5.6022C39.1022 4.34746 40.5077 2.73825 42.0514 3.59092C43.9106 4.94548 44.085 7.46698 44.775 9.4741C45.187 11.7349 45.6366 13.6922 46.0445 15.9119C47.2819 18.566 47.7028 21.6948 47.6517 24.5402C47.7538 25.0865 47.591 25.6707 47.8373 26.1578C49.8766 25.4826 51.984 24.7269 53.904 23.7453C54.5699 23.5443 55.2923 23.0188 55.1721 22.2332C55.3081 21.4997 55.4872 20.7386 55.992 20.2769C56.6546 19.7574 57.3942 20.3379 58.0141 19.7491C58.6692 19.5106 59.4993 19.5795 60.051 20.093C60.5818 20.6813 60.6092 21.3394 60.8291 22.0446ZM31.5976 13.0327C30.0628 13.0304 28.5214 13.5646 27.4565 14.7773C26.3448 16.02 25.8474 17.791 26.2047 19.421C26.4427 21.057 27.5363 22.5146 28.9566 23.2887C31.7953 24.7621 35.3203 23.182 36.2524 20.1184C36.7196 18.5383 36.4603 16.7904 35.5522 15.379C34.6864 14.0314 33.1177 13.1884 31.5976 13.0327ZM26.8185 28.3299C26.5248 28.7056 26.8232 29.2325 26.9076 29.6276C28.0741 31.7031 30.9207 32.5844 33.0704 31.9226C33.9134 31.6283 34.7783 31.186 35.3453 30.4914C35.4933 30.1725 36.0237 29.8074 35.8664 29.3004C35.6288 28.8142 35.0562 29.2343 34.7027 29.2107C33.126 29.8624 31.3837 30.0126 29.5992 29.6734C29.068 29.287 28.9956 30.1785 28.4884 30.0856C27.9841 30.0898 27.4871 29.7935 27.3758 29.2999C27.5113 28.9464 27.1531 28.4205 26.8185 28.3299Z"
                  fill="#DBDBDB"
                />
                <circle cx="32.8904" cy="17.3293" r="1.76829" fill="#D9D9D9" />
                <circle cx="29.7073" cy="18.3902" r="0.707317" fill="#D9D9D9" />
              </svg>
            </div>
            <div class="card_body">
              <div class="card_title">Invite a friend</div>
              <div class="card_body_bottom d-flex align-items-center">
                <div class="card_body_icon">
                  <img src="@/assets/img/invite_friends_card_icon.svg" alt="" />
                </div>
                <div class="friends_num"><span>+50 000</span></div>
                <div class="card_body_bottom_text">
                  for you and your friend!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="friend_list">
          <div class="title">Your friend list</div>
          <div class="list_item d-flex align-items-center">
            <div class="item_img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M26.2857 24.0023C28.067 24.0023 29.5323 25.363 29.6985 27.1008L29.7143 27.4309V29.7143H26.2857C23.1298 29.7143 20.5714 32.2727 20.5714 35.4286V42.792C18.6576 43.243 16.671 43.4286 14.8571 43.4286C8.63513 43.4286 0.376457 41.2434 0.0124572 33.6677L0 33.1429V27.4286C0 25.6473 1.36062 24.1819 3.09854 24.0158L3.42857 24L26.2857 24.0023ZM44.5714 29.7143C44.9627 29.7143 45.3449 29.7536 45.7143 29.8286V27.4286L45.6985 27.0983C45.5323 25.3586 44.067 24 42.2857 24H30.8297L31.088 24.3694C31.6587 25.2544 32 26.2985 32 27.4286V29.7143H44.5714ZM14.8571 0C20.5371 0 25.1429 4.60571 25.1429 10.2857C25.1429 15.9657 20.5371 20.5714 14.8571 20.5714C9.17714 20.5714 4.57143 15.9657 4.57143 10.2857C4.57143 4.60571 9.17714 0 14.8571 0ZM35.4286 4.57143C39.8469 4.57143 43.4286 8.15314 43.4286 12.5714C43.4286 16.9897 39.8469 20.5714 35.4286 20.5714C31.0103 20.5714 27.4286 16.9897 27.4286 12.5714C27.4286 8.15314 31.0103 4.57143 35.4286 4.57143ZM22.8571 35.4286C22.8571 33.5351 24.3922 32 26.2857 32H44.5714C46.4649 32 48 33.5351 48 35.4286V44.5714C48 46.4649 46.4649 48 44.5714 48H26.2857C24.3922 48 22.8571 46.4649 22.8571 44.5714V35.4286ZM45.7143 36.5714C44.4519 36.5714 43.4286 35.5481 43.4286 34.2857H41.1429C41.1429 36.8105 43.1895 38.8571 45.7143 38.8571V36.5714ZM45.7143 41.1429C43.1895 41.1429 41.1429 43.1895 41.1429 45.7143H43.4286C43.4286 44.4519 44.4519 43.4286 45.7143 43.4286V41.1429ZM27.4286 34.2857C27.4286 35.5481 26.4053 36.5714 25.1429 36.5714V38.8571C27.6677 38.8571 29.7143 36.8105 29.7143 34.2857H27.4286ZM29.7143 45.7143C29.7143 43.1895 27.6677 41.1429 25.1429 41.1429V43.4286C26.4053 43.4286 27.4286 44.4519 27.4286 45.7143H29.7143ZM39.4286 40C39.4286 37.7909 37.6377 36 35.4286 36C33.2194 36 31.4286 37.7909 31.4286 40C31.4286 42.2091 33.2194 44 35.4286 44C37.6377 44 39.4286 42.2091 39.4286 40Z"
                  fill="#DBDBDB"
                />
              </svg>
            </div>
            <div class="list_item_body">
              <div class="item_title">Your friends earned you:</div>
              <div class="item_num">+11 150 000</div>
              <button class="teke_away_btn border-0">
                <span>Take away</span>
              </button>
            </div>
          </div>
          <div class="list_item">
            <div class="list_title">YOUR INVITE LINK</div>
            <div
              class="copy_link d-flex align-items-center"
              :class="copy ? 'copy' : ''"
            >
              <button class="copy_link_btn border-0" @click="copyURL">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 8H4C2.897 8 2 8.897 2 10V20C2 21.103 2.897 22 4 22H14C15.103 22 16 21.103 16 20V10C16 8.897 15.103 8 14 8Z"
                    fill="white"
                  />
                  <path
                    d="M20 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2Z"
                    fill="white"
                  />
                </svg>
              </button>
              <div class="copy_body w-100 position-relative">
                <div class="url" id="my_url" :class="copy ? 'no_active' : ''">
                  T.ME/ASDDASDKLASDAS/DSD
                </div>
                <div class="copied" :class="copy ? 'active' : ''">COPIED!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copy: false,
    };
  },
  methods: {
    copyURL() {
      let Url = document.getElementById("my_url").textContent;
      navigator.clipboard.writeText(Url);
      this.copy = true;
      setTimeout(() => {
        this.copy = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.refferal {
  background: linear-gradient(180deg, #151d30 0%, #151d30 44.59%, #151d30 100%);
  .refferal_in {
    min-height: 100vh;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    padding: 20px 0 100px;
    background-image: url("@/assets/img/refferal_bg.png");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    .logo {
      margin-bottom: 17px;
    }
    .invite_friends {
      margin-bottom: 25px;
      .invite_friends_title {
        margin-bottom: 17px;
        color: #dbdbdb;
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .invite_friends_body {
        border-radius: 63px;
        background: linear-gradient(90deg, #52ff53 0%, #41fdb9 68.5%);
        padding: 10px;
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 21px;
      }
      .invite_friends_card {
        border-radius: 11px;
        background: #294656;
        padding: 12px 9px 12px 15px;
        gap: 15px;
        .card_body {
          .card_title {
            color: #dbdbdb;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 7px;
          }
          .card_body_bottom {
            gap: 2px;
            .friends_num {
              display: flex;
              width: 77px;
              height: 22px;
              flex-direction: column;
              justify-content: center;
              border-radius: 41px;
              background: linear-gradient(90deg, #5bff63 0%, #41fdb9 100%);
              span {
                background: linear-gradient(90deg, #294656 0%, #1a2c38 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-align: center;
                font-family: Inter;
                font-size: 13px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
              }
            }
            .card_body_bottom_text {
              width: 110px;
              color: #dbdbdb;
              text-align: center;
              font-family: Inter;
              font-size: 9px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
              line-height: normal;
            }
          }
        }
      }
    }
    .friend_list {
      .title {
        color: #dbdbdb;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 17px;
      }
      .list_item {
        border-radius: 11px;
        background: #294656;
        padding: 3px 18px 10px;
        gap: 15px;
        margin-bottom: 13px;
        &:last-child {
          margin-bottom: 0;
        }
        .list_title {
          color: #dbdbdb;
          text-align: center;
          font-family: Inter;
          font-size: 13px;
          font-style: normal;
          font-weight: 500;
          line-height: 33px;
        }
        .copy_link {
          border-radius: 16px;
          background: linear-gradient(90deg, #192437 -20.71%, #41fdba 202.2%);
          padding: 3px 6px;
          gap: 2px;
          .copy_link_btn {
            border-radius: 16px;
            background: #1a2537;
            padding: 8px 14px;
          }
          .url {
            width: 100%;
            position: relative;
            color: #dbdbdb;
            text-align: center;
            font-family: Inter;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            text-align: center;
            line-height: normal;
            transition: 0.3s;
          }
          .url.no_active {
            transform: scale(0.7);
            opacity: 0;
            z-index: -1;
          }
          .copied {
            color: #dbdbdb;
            text-align: center;
            font-family: Manrope;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: 0.3s;
            transform: translate(-50%, -50%) scale(0.7);
            opacity: 0;
            z-index: -1;
          }
          .copied.active {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
            z-index: 2;
          }
        }
        .copy_link.copy {
          background: linear-gradient(90deg, #192437 -20.71%, #41fdba 104.65%);
          .copy_link_btn {
            background: #41fdb9;
          }
        }
        .list_item_body {
          .item_title {
            color: #dbdbdb;
            font-family: Inter;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .item_num {
            display: flex;
            width: 129px;
            height: 22px;
            flex-direction: column;
            justify-content: center;
            border-radius: 41px;
            margin-bottom: 4px;
            background: linear-gradient(90deg, #182335 0%, #202e49 100%);
            color: #fff;
            text-align: center;
            font-family: Inter;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
          .teke_away_btn {
            display: flex;
            width: 129px;
            height: 22px;
            justify-content: center;
            border-radius: 41px;
            background: linear-gradient(90deg, #52ff53 0%, #41fdba 100%);
            span {
              color: #fff;
              text-align: center;
              font-family: Manrope;
              font-size: 12px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              opacity: 0.9;
            }
          }
        }
      }
    }
  }
}
</style>
