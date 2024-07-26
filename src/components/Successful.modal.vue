<template>
  <div class="modal_container" :class="modal ? 'active' : ''">
    <button
      class="modal_btn d-flex align-items-center justify-content-center position-relative border-0"
    >
      <div class="left_img">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 10C0 15.5238 4.4775 20 10 20C15.5225 20 20 15.5238 20 10C20 4.4775 15.5225 0 10 0C4.4775 0 0 4.4775 0 10ZM8.42125 14.3763L6.56625 12.5194L4.6875 10.6363L6.5425 8.77937L8.42563 10.6594L13.4575 5.625L15.3125 7.48188L8.42125 14.3763Z"
            fill="#8AFF77"
          />
        </svg>
      </div>
      <span class="btn_content">Wait</span>
      <span class="btn_content">Just a little</span>
      <span class="btn_content">Successful</span>
      <div class="right_img">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 10C0 15.5238 4.4775 20 10 20C15.5225 20 20 15.5238 20 10C20 4.4775 15.5225 0 10 0C4.4775 0 0 4.4775 0 10ZM8.42125 14.3763L6.56625 12.5194L4.6875 10.6363L6.5425 8.77937L8.42563 10.6594L13.4575 5.625L15.3125 7.48188L8.42125 14.3763Z"
            fill="#8AFF77"
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
        animation: contentanim 3s forwards;
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
          transform: translate(-50%, -50%) scale(1.1);
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
          transform: translate(-50%, -50%) scale(1.2);
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
          transform: translate(-50%, -50%) scale(1);
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
        left: 100px;
      }
      40% {
        transform: translateY(-50%) scale(1.3);
        left: 78px;
      }
      60% {
        transform: translateY(-50%) scale(1);
        left: 37.08px;
      }
      100% {
        transform: translateY(-50%) scale(1);
        left: 68px;
      }
    }
    @keyframes rightanim {
      0% {
        transform: translateY(-50%) scale(0.5);
        right: 100px;
      }
      40% {
        transform: translateY(-50%) scale(1.3);
        right: 78px;
      }
      60% {
        transform: translateY(-50%) scale(1);
        right: 37.08px;
      }
      100% {
        transform: translateY(-50%) scale(1);
        right: 68px;
      }
    }
  }
  @keyframes btn {
    0% {
      background: url("@/assets/img/successful.svg");
      transform: scale(0.6);
      filter: blur(0.7px);
    }
    40% {
      background: url("@/assets/img/successful2.svg");
      filter: blur(0.7px);
    }
    60% {
      background: url("@/assets/img/successful3.svg");
      filter: blur(0.7px);
      transform: scale(1.1);
    }
    100% {
      background: url("@/assets/img/successful4.svg");
      filter: blur(0px);
      transform: scale(1);
    }
  }
}
</style>
