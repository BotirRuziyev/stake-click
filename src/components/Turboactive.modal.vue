<template>
  <div class="modal_container" :class="modal ? 'active' : ''">
    <button
      class="modal_btn d-flex align-items-center justify-content-center position-relative border-0"
    >
      <div class="left_img">
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4014 2.12217C21.4334 2.15421 21.4529 2.18626 21.4598 2.2183C21.5433 2.60822 21.5785 3.00279 21.5653 3.40199C21.5236 4.65666 21.1983 5.96344 20.7752 7.16016C20.1448 8.94206 19.29 10.6105 18.211 12.1654C17.2212 13.5924 16.0275 14.8039 14.6298 15.8C14.6167 15.8096 14.6107 15.8224 14.6119 15.8386C14.7026 16.9046 14.6101 18.0461 14.098 19.0016C13.7104 19.7242 13.1612 20.3245 12.4502 20.8025C11.4714 21.4606 10.3102 21.864 9.15612 22.0491C8.9086 22.0886 8.6741 21.9201 8.65479 21.6704C8.65089 21.6204 8.65763 21.5172 8.675 21.3609C8.80078 20.2264 8.9372 18.9965 9.08424 17.671C9.08443 17.6692 9.08423 17.6673 9.08366 17.6656C9.0831 17.6638 9.08217 17.6622 9.08094 17.6609C9.07971 17.6595 9.07821 17.6584 9.07653 17.6577C9.07486 17.657 9.07304 17.6566 9.07121 17.6566C8.77593 17.6494 8.48498 17.631 8.19838 17.6013C8.00072 17.581 7.82418 17.4965 7.66875 17.348C7.65138 17.3312 7.39772 17.0776 6.90778 16.587C6.41813 16.0962 6.16492 15.8419 6.14815 15.8242C5.9999 15.6685 5.9159 15.4918 5.89613 15.2942C5.86709 15.0076 5.84927 14.7166 5.84268 14.4213C5.84269 14.4195 5.84231 14.4177 5.84157 14.416C5.84084 14.4143 5.83976 14.4128 5.8384 14.4116C5.83704 14.4104 5.83544 14.4094 5.8337 14.4089C5.83196 14.4083 5.83012 14.4081 5.8283 14.4083C4.50251 14.5527 3.27225 14.6865 2.13752 14.8099C1.98119 14.827 1.87802 14.8336 1.82801 14.8297C1.57824 14.8099 1.41024 14.575 1.45022 14.3274C1.63754 13.1738 2.04319 12.0135 2.70354 11.036C3.1827 10.326 3.78406 9.77791 4.5076 9.39188C5.46399 8.88156 6.6059 8.79127 7.67145 8.88426C7.68762 8.88546 7.7005 8.87947 7.71008 8.86629C8.70914 7.47072 9.92308 6.27954 11.3519 5.29276C12.9092 4.21673 14.5794 3.36531 16.3625 2.7385C17.5601 2.31758 18.8673 1.99504 20.122 1.95596C20.5212 1.94368 20.9158 1.97962 21.3057 2.06377C21.3377 2.07066 21.3696 2.09013 21.4014 2.12217ZM16.8899 8.76252C16.8899 8.47948 16.8341 8.1992 16.7258 7.9377C16.6175 7.6762 16.4587 7.4386 16.2586 7.23846C16.0584 7.03831 15.8208 6.87955 15.5593 6.77124C15.2978 6.66292 15.0176 6.60717 14.7345 6.60717C14.1629 6.60717 13.6147 6.83425 13.2104 7.23846C12.8062 7.64266 12.5792 8.19089 12.5792 8.76252C12.5792 9.33416 12.8062 9.88238 13.2104 10.2866C13.6147 10.6908 14.1629 10.9179 14.7345 10.9179C15.3061 10.9179 15.8544 10.6908 16.2586 10.2866C16.6628 9.88238 16.8899 9.33416 16.8899 8.76252Z"
            fill="white"
          />
          <path
            d="M5.10825 15.8313C5.10502 15.8548 5.09538 15.8769 5.0804 15.8951C5.01991 15.9685 4.9678 16.0495 4.92407 16.1381C4.80683 16.3762 4.70306 16.6862 4.64825 16.9418C4.54014 17.4455 4.63343 17.8891 4.92812 18.2724C5.24377 18.683 5.6867 18.889 6.25691 18.8905C6.35364 18.8908 6.49424 18.8691 6.67872 18.8254C7.06325 18.7342 7.33054 18.6614 7.60232 18.413C7.63226 18.3857 7.67734 18.3781 7.73753 18.3901C7.89251 18.4211 7.91677 18.5347 7.89521 18.6798C7.82004 19.1776 7.61654 19.626 7.28472 20.0252C6.89704 20.4924 6.2879 20.717 5.71066 20.8707C5.46598 20.9357 5.25934 20.9848 5.09073 21.018C4.17852 21.1974 3.20896 21.3048 2.18204 21.3401C2.16557 21.3407 2.15764 21.3328 2.15823 21.3163C2.18908 20.4601 2.27308 19.6184 2.41025 18.7912C2.47374 18.4094 2.56538 18.0106 2.68517 17.595C2.79388 17.2194 2.94032 16.8868 3.1245 16.5972C3.20207 16.476 3.31917 16.3491 3.47579 16.2168C3.8753 15.8792 4.33141 15.6744 4.84411 15.6022C4.92767 15.5905 4.98981 15.5991 5.03054 15.6278C5.09433 15.6731 5.12023 15.7409 5.10825 15.8313Z"
            fill="white"
          />
        </svg>
      </div>
      <span class="btn_content">Turbo </span>
      <span class="btn_content">Turbo active</span>
      <span class="btn_content">Turbo active</span>
      <div class="right_img">
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4014 2.12217C21.4334 2.15421 21.4529 2.18626 21.4598 2.2183C21.5433 2.60822 21.5785 3.00279 21.5653 3.40199C21.5236 4.65666 21.1983 5.96344 20.7752 7.16016C20.1448 8.94206 19.29 10.6105 18.211 12.1654C17.2212 13.5924 16.0275 14.8039 14.6298 15.8C14.6167 15.8096 14.6107 15.8224 14.6119 15.8386C14.7026 16.9046 14.6101 18.0461 14.098 19.0016C13.7104 19.7242 13.1612 20.3245 12.4502 20.8025C11.4714 21.4606 10.3102 21.864 9.15612 22.0491C8.9086 22.0886 8.6741 21.9201 8.65479 21.6704C8.65089 21.6204 8.65763 21.5172 8.675 21.3609C8.80078 20.2264 8.9372 18.9965 9.08424 17.671C9.08443 17.6692 9.08423 17.6673 9.08366 17.6656C9.0831 17.6638 9.08217 17.6622 9.08094 17.6609C9.07971 17.6595 9.07821 17.6584 9.07653 17.6577C9.07486 17.657 9.07304 17.6566 9.07121 17.6566C8.77593 17.6494 8.48498 17.631 8.19838 17.6013C8.00072 17.581 7.82418 17.4965 7.66875 17.348C7.65138 17.3312 7.39772 17.0776 6.90778 16.587C6.41813 16.0962 6.16492 15.8419 6.14815 15.8242C5.9999 15.6685 5.9159 15.4918 5.89613 15.2942C5.86709 15.0076 5.84927 14.7166 5.84268 14.4213C5.84269 14.4195 5.84231 14.4177 5.84157 14.416C5.84084 14.4143 5.83976 14.4128 5.8384 14.4116C5.83704 14.4104 5.83544 14.4094 5.8337 14.4089C5.83196 14.4083 5.83012 14.4081 5.8283 14.4083C4.50251 14.5527 3.27225 14.6865 2.13752 14.8099C1.98119 14.827 1.87802 14.8336 1.82801 14.8297C1.57824 14.8099 1.41024 14.575 1.45022 14.3274C1.63754 13.1738 2.04319 12.0135 2.70354 11.036C3.1827 10.326 3.78406 9.77791 4.5076 9.39188C5.46399 8.88156 6.6059 8.79127 7.67145 8.88426C7.68762 8.88546 7.7005 8.87947 7.71008 8.86629C8.70914 7.47072 9.92308 6.27954 11.3519 5.29276C12.9092 4.21673 14.5794 3.36531 16.3625 2.7385C17.5601 2.31758 18.8673 1.99504 20.122 1.95596C20.5212 1.94368 20.9158 1.97962 21.3057 2.06377C21.3377 2.07066 21.3696 2.09013 21.4014 2.12217ZM16.8899 8.76252C16.8899 8.47948 16.8341 8.1992 16.7258 7.9377C16.6175 7.6762 16.4587 7.4386 16.2586 7.23846C16.0584 7.03831 15.8208 6.87955 15.5593 6.77124C15.2978 6.66292 15.0176 6.60717 14.7345 6.60717C14.1629 6.60717 13.6147 6.83425 13.2104 7.23846C12.8062 7.64266 12.5792 8.19089 12.5792 8.76252C12.5792 9.33416 12.8062 9.88238 13.2104 10.2866C13.6147 10.6908 14.1629 10.9179 14.7345 10.9179C15.3061 10.9179 15.8544 10.6908 16.2586 10.2866C16.6628 9.88238 16.8899 9.33416 16.8899 8.76252Z"
            fill="white"
          />
          <path
            d="M5.10825 15.8313C5.10502 15.8548 5.09538 15.8769 5.0804 15.8951C5.01991 15.9685 4.9678 16.0495 4.92407 16.1381C4.80683 16.3762 4.70306 16.6862 4.64825 16.9418C4.54014 17.4455 4.63343 17.8891 4.92812 18.2724C5.24377 18.683 5.6867 18.889 6.25691 18.8905C6.35364 18.8908 6.49424 18.8691 6.67872 18.8254C7.06325 18.7342 7.33054 18.6614 7.60232 18.413C7.63226 18.3857 7.67734 18.3781 7.73753 18.3901C7.89251 18.4211 7.91677 18.5347 7.89521 18.6798C7.82004 19.1776 7.61654 19.626 7.28472 20.0252C6.89704 20.4924 6.2879 20.717 5.71066 20.8707C5.46598 20.9357 5.25934 20.9848 5.09073 21.018C4.17852 21.1974 3.20896 21.3048 2.18204 21.3401C2.16557 21.3407 2.15764 21.3328 2.15823 21.3163C2.18908 20.4601 2.27308 19.6184 2.41025 18.7912C2.47374 18.4094 2.56538 18.0106 2.68517 17.595C2.79388 17.2194 2.94032 16.8868 3.1245 16.5972C3.20207 16.476 3.31917 16.3491 3.47579 16.2168C3.8753 15.8792 4.33141 15.6744 4.84411 15.6022C4.92767 15.5905 4.98981 15.5991 5.03054 15.6278C5.09433 15.6731 5.12023 15.7409 5.10825 15.8313Z"
            fill="white"
          />
        </svg>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.modal_container {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  .modal_btn {
    width: 305px;
    height: 54px;
    gap: 15px;
    background: url("@/assets/img/successful.svg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 21px;
    text-align: center;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;

    .left_img {
      line-height: 0;
    }
    .right_img {
      line-height: 0;
    }
  }
}
.modal_container.active {
  display: block;
  .modal_btn {
    visibility: visible;
    opacity: 1;
    animation: btn 3s forwards;
    .btn_content {
      visibility: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &:nth-child(2) {
        animation: contentanim 3s 0.3s forwards;
      }
      &:nth-child(3) {
        animation: contentanim2 3s forwards;
      }
      &:nth-child(4) {
        animation: contentanim3 3s 0.5s forwards;
      }
      @keyframes contentanim {
        0% {
          visibility: hidden;
          opacity: 0;
        }
        20% {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%);
        }
        40% {
          opacity: 0;
          visibility: hidden;
        }
        60% {
          opacity: 0;
          visibility: hidden;
        }
        80% {
          opacity: 0;
          visibility: hidden;
        }
        100% {
          opacity: 0;
          visibility: hidden;
        }
      }
      @keyframes contentanim2 {
        0% {
          opacity: 0;
          visibility: hidden;
        }
        20% {
          opacity: 0;
          visibility: hidden;
        }
        40% {
          opacity: 0;
          visibility: hidden;
        }
        60% {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%);
        }
        80% {
          opacity: 0;
          visibility: hidden;
        }
        100% {
          opacity: 0;
          visibility: hidden;
        }
      }
      @keyframes contentanim3 {
        0% {
          visibility: hidden;
          opacity: 0;
        }
        20% {
          visibility: hidden;
          opacity: 0;
        }
        40% {
          visibility: hidden;
          opacity: 0;
        }
        60% {
          opacity: 0;
          visibility: hidden;
        }
        80% {
          visibility: visible;
          opacity: 1;
          transform: translate(-50%, -50%);
        }
        100% {
          visibility: visible;
          opacity: 1;
        }
      }
    }
    .left_img,
    .right_img {
      display: block;
      transform: translateY(-50%) scale(0.5);
      position: absolute;
      top: 50%;
    }
    .left_img {
      animation: leftanim 3s forwards;
    }
    .right_img {
      animation: rightanim 3s forwards;
    }
    @keyframes leftanim {
      0% {
        transform: translateY(-50%) scale(0.5);
        left: 126px;
      }
      40% {
        transform: translateY(-50%) scale(1.3);
        left: 90px;
      }
      60% {
        transform: translateY(-50%) scale(1);
        left: 48px;
      }
      100% {
        transform: translateY(-50%) scale(1);
        left: 61px;
      }
    }
    @keyframes rightanim {
      0% {
        transform: translateY(-50%) scale(0.5);
        right: 126px;
      }
      40% {
        transform: translateY(-50%) scale(1.3);
        right: 90px;
      }
      60% {
        transform: translateY(-50%) scale(1);
        right: 48px;
      }
      100% {
        transform: translateY(-50%) scale(1);
        right: 61px;
      }
    }
  }
  @keyframes btn {
    0% {
      background: url("@/assets/img/turbo.svg");
      filter: blur(0.7px);
    }
    40% {
      background: url("@/assets/img/turbo2.svg");
      filter: blur(0.7px);
    }
    60% {
      background: url("@/assets/img/turbo3.svg");
      filter: blur(0.7px);
    }
    100% {
      background: url("@/assets/img/turbo4.svg");
      filter: blur(0px);
    }
  }
}
</style>
