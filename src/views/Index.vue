<template>
  <div>
    <div class="home position-ralative">
      <div class="home_in">
        <div class="main_container d-flex flex-column align-items-center w-100">
          <Header class="w-100" />
          <div
            class="home_balance d-inline-flex flex-column align-items-center"
          >
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
            <router-link to="/boost" class="home_btn position-relative">
              <div class="btn_img position-absolute">
                <img src="@/assets/img/lightning.svg" alt="lightning" />
              </div>
              <span class="home_btn_title">BOOST</span>
            </router-link>
          </div>
        </div>
        <div class="home-center-icon position-absolute" @click="coinAnim">
          <span class="position-absolute">
            <svg
              width="73"
              height="74"
              viewBox="0 0 73 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_28_143)" class="coin_in">
                <path
                  class="color-anim"
                  d="M11.2615 18.3806L17.8996 11.7425C18.5749 11.0671 18.5749 9.97218 17.8996 9.29684L16.6768 8.07405C16.0015 7.39871 14.9065 7.39871 14.2312 8.07405L7.59308 14.7121C6.91774 15.3875 6.91774 16.4824 7.59308 17.1578L8.81588 18.3806C9.49121 19.0559 10.5862 19.0559 11.2615 18.3806Z"
                  fill="#41FDB9"
                />
                <path
                  class="color-anim"
                  d="M58.7762 65.8953L65.4143 59.2572C66.0896 58.5819 66.0896 57.487 65.4143 56.8116L64.1915 55.5888C63.5161 54.9135 62.4212 54.9135 61.7459 55.5888L55.1078 62.2269C54.4324 62.9023 54.4324 63.9972 55.1077 64.6725L56.3305 65.8953C57.0059 66.5707 58.1008 66.5707 58.7762 65.8953Z"
                  fill="#41FDB9"
                />
                <path
                  class="color-anim"
                  d="M65.4145 14.5373L58.7764 7.8992C58.1011 7.22386 57.0061 7.22386 56.3308 7.8992L55.108 9.122C54.4327 9.79734 54.4327 10.8923 55.108 11.5676L61.7461 18.2057C62.4215 18.8811 63.5164 18.8811 64.1917 18.2057L65.4145 16.9829C66.0899 16.3076 66.0899 15.2126 65.4145 14.5373Z"
                  fill="#41FDB9"
                />
                <path
                  class="color-anim"
                  d="M17.7248 62.2269L11.0867 55.5888C10.4114 54.9134 9.31645 54.9134 8.64111 55.5888L7.41831 56.8116C6.74298 57.4869 6.74298 58.5819 7.41831 59.2572L14.0564 65.8953C14.7318 66.5706 15.8267 66.5706 16.502 65.8953L17.7248 64.6725C18.4002 63.9972 18.4002 62.9022 17.7248 62.2269Z"
                  fill="#41FDB9"
                />
                <path
                  class="color-anim"
                  d="M41.0739 68.1122H31.6862C30.7311 68.1122 29.9569 68.8864 29.9569 69.8415V71.5708C29.9569 72.5259 30.7311 73.3001 31.6862 73.3001H41.0739C42.029 73.3001 42.8032 72.5259 42.8032 71.5708V69.8415C42.8032 68.8864 42.029 68.1122 41.0739 68.1122Z"
                  fill="#41FDB9"
                />
                <path
                  class="color-anim"
                  d="M72.6956 41.6784V32.2907C72.6956 31.3356 71.9213 30.5614 70.9663 30.5614H69.237C68.2819 30.5614 67.5077 31.3356 67.5077 32.2907V41.6784C67.5077 42.6335 68.2819 43.4077 69.237 43.4077H70.9663C71.9213 43.4077 72.6956 42.6335 72.6956 41.6784Z"
                  fill="#41FDB9"
                />
                <path
                  class="color-anim"
                  d="M5.49945 41.6784L5.49945 32.2907C5.49945 31.3356 4.72521 30.5614 3.77014 30.5614H2.04084C1.08577 30.5614 0.311525 31.3356 0.311525 32.2907L0.311525 41.6784C0.311525 42.6335 1.08577 43.4077 2.04084 43.4077H3.77014C4.72521 43.4077 5.49945 42.6335 5.49945 41.6784Z"
                  fill="#41FDB9"
                />
                <path
                  class="color-anim"
                  d="M41.0739 0.916138H31.6862C30.7311 0.916138 29.9569 1.69038 29.9569 2.64545V4.37475C29.9569 5.32982 30.7311 6.10406 31.6862 6.10406H41.0739C42.029 6.10406 42.8032 5.32982 42.8032 4.37475V2.64545C42.8032 1.69038 42.029 0.916138 41.0739 0.916138Z"
                  fill="#41FDB9"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_143">
                  <rect
                    width="72.3841"
                    height="72.3841"
                    fill="white"
                    transform="translate(0.311523 0.916138)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="73"
              height="73"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="36.3691"
                cy="36.2426"
                r="35.7884"
                transform="rotate(90 36.3691 36.2426)"
                fill="#202E49"
              />
              <circle
                cx="36.2469"
                cy="36.1206"
                r="30.7805"
                transform="rotate(90 36.2469 36.1206)"
                fill="#101521"
              />
              <line
                x1="30.9949"
                y1="4.11865"
                x2="30.9949"
                y2="69.0996"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="33.1936"
                y1="4.11865"
                x2="33.1936"
                y2="69.0996"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="35.3923"
                y1="4.11865"
                x2="35.3923"
                y2="69.0996"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="37.5907"
                y1="4.11865"
                x2="37.5907"
                y2="69.0996"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="39.7894"
                y1="4.11865"
                x2="39.7894"
                y2="69.0996"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="41.9881"
                y1="4.11865"
                x2="41.9881"
                y2="69.0996"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <path
                d="M18.3407 25.9874L46.8011 54.4478"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M19.8955 24.4325L48.3558 52.8928"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M21.4499 22.8779L49.9103 51.3383"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M23.0047 21.3232L51.4651 49.7836"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M24.5591 19.7686L53.0195 48.2289"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M26.114 18.214L54.5743 46.6743"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M46.8006 18.7521L18.3402 47.2124"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M48.3548 20.3068L19.8944 48.7671"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M49.9096 21.8615L21.4492 50.3218"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M51.4644 23.416L23.004 51.8764"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M53.0188 24.9707L24.5585 53.431"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <path
                d="M54.5736 26.5254L26.1133 54.9857"
                stroke="#DBDBDB"
                stroke-width="0.732868"
                stroke-linecap="round"
              />
              <line
                x1="68.371"
                y1="30.624"
                x2="3.39001"
                y2="30.624"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="68.3709"
                y1="32.8226"
                x2="3.3899"
                y2="32.8226"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="68.3709"
                y1="35.0212"
                x2="3.3899"
                y2="35.0212"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="68.3709"
                y1="37.2198"
                x2="3.3899"
                y2="37.2198"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="68.3709"
                y1="39.4184"
                x2="3.3899"
                y2="39.4184"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <line
                x1="68.3709"
                y1="41.617"
                x2="3.3899"
                y2="41.617"
                stroke="#DBDBDB"
                stroke-width="0.732868"
              />
              <ellipse
                cx="36.3689"
                cy="35.9984"
                rx="14.7795"
                ry="14.5352"
                transform="rotate(90 36.3689 35.9984)"
                fill="#151D30"
              />
              <ellipse
                cx="36.2469"
                cy="35.9984"
                rx="13.0695"
                ry="12.9473"
                transform="rotate(90 36.2469 35.9984)"
                fill="#202E49"
              />
            </svg>
          </span>
          <span class="position-absolute stake-click-icon">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.92463 3.068C1.91979 1.66552 2.73973 0.88771 4.24504 0.881882C5.32828 0.877643 5.52189 1.65333 5.52189 1.9352C5.52189 2.47511 4.82393 3.04787 4.82393 3.04787C4.82393 3.04787 4.86265 3.38432 5.46187 3.38167C6.06109 3.37902 6.64482 2.94614 6.64143 1.86262C6.63853 0.618021 5.44735 0.0489721 4.26972 0.0537407C3.28474 0.0574495 0.672468 0.208984 0.681665 3.04787C0.690377 5.56938 5.03787 5.79192 5.04125 7.40634C5.04706 9.15958 3.25037 9.63167 2.64244 9.63167C2.03451 9.63167 1.78717 9.16064 1.7862 8.90208C1.78185 7.48211 3.07274 7.08685 3.07274 7.08685C3.07274 6.98088 2.99723 6.50879 2.49723 6.51091C1.20925 6.51356 0.696186 7.72583 0.700058 8.9095C0.703446 9.91619 1.35349 10.5446 2.33508 10.5403C4.21212 10.5329 6.32875 9.53047 6.32101 7.30408C6.31423 5.22181 1.92996 4.67819 1.92463 3.068Z"
                fill="#DBDBDB"
              />
              <path
                d="M19.8184 8.64667C19.8034 8.60693 19.7613 8.61647 19.7057 8.66681C19.4927 8.85914 19.0058 9.40381 17.8664 9.40858C15.7889 9.41706 15.4284 5.66897 15.4284 5.66897C15.4284 5.66897 17.0116 4.3751 17.2589 3.8532C17.5063 3.33131 16.7192 3.2174 16.7192 3.2174C16.7192 3.2174 15.6118 4.69247 14.8267 5.12482C14.9119 4.48318 15.4927 3.02083 15.5261 2.17997C15.5595 1.33911 14.6012 1.54416 14.4482 1.6247C14.4482 1.99187 13.6017 5.3251 13.2933 7.15729C13.1118 7.4752 12.8524 7.83867 12.6201 7.8392C12.4855 7.8392 12.4361 7.56633 12.4347 7.17531C12.4347 6.63275 12.7077 5.76328 12.7057 5.23503C12.7057 4.86944 12.5523 4.84772 12.4202 4.84825C12.3916 4.84825 12.2328 4.85301 12.2038 4.85301C11.865 4.85301 11.9763 4.53511 11.6714 4.53829C10.7382 4.542 9.54942 5.65731 9.49763 7.34062C9.18253 7.56898 8.74158 7.85668 8.51651 7.85774C8.28031 7.85774 8.22174 7.61878 8.22126 7.41214C8.22126 7.0492 8.75756 4.89275 8.75756 4.89275C8.75756 4.89275 9.44051 4.70095 9.73867 4.6379C9.96422 4.58968 10.0291 4.57167 10.1167 4.45245C10.2043 4.33324 10.3756 4.08686 10.5141 3.86539C10.6525 3.64392 10.5165 3.47278 10.2604 3.47384C9.92453 3.47384 9.0257 3.70697 9.0257 3.70697C9.0257 3.70697 9.45745 1.6692 9.45697 1.62787C9.45648 1.58655 9.40857 1.56482 9.33548 1.56535C9.17188 1.56535 8.88001 1.66178 8.69318 1.7349C8.40712 1.8467 8.17431 2.2303 8.12736 2.40886C8.08041 2.58742 7.75708 3.98567 7.75708 3.98567C7.75708 3.98567 6.02573 4.64002 5.78905 4.73804C5.78199 4.74069 5.77586 4.74569 5.77152 4.75234C5.76718 4.75899 5.76485 4.76696 5.76485 4.77513C5.76485 4.79208 5.96281 5.62287 6.36891 5.61969C6.65932 5.61969 7.51265 5.23715 7.51265 5.23715C7.51265 5.23715 7.07413 7.14457 7.07703 7.78038C7.07703 8.18836 7.25273 8.66628 7.9807 8.66363C8.65833 8.66363 9.25126 8.28055 9.5833 8.01404C9.76481 8.51686 10.1937 8.65462 10.4865 8.65356C11.1428 8.65356 11.6481 8.08027 11.713 8.00345C11.7982 8.22386 11.9991 8.6472 12.4579 8.64561C12.7173 8.64561 12.986 8.32771 13.1839 8.01934C13.1802 8.08342 13.181 8.14773 13.1864 8.21167C13.2657 9.0022 14.3378 8.53753 14.3964 8.42732C14.4327 7.85562 14.41 6.68679 14.6186 5.96515C14.8954 8.42679 15.9458 10.0825 17.8339 10.0751C18.8896 10.0709 19.4312 9.73867 19.6553 9.46475C19.7453 9.35578 19.8077 9.22297 19.8363 9.07946C19.8649 8.93596 19.8588 8.78677 19.8184 8.64667ZM10.759 7.83496C9.85241 7.83867 11.0363 5.26629 11.8098 5.26311C11.8108 5.59479 11.7938 7.83125 10.759 7.83496Z"
                fill="#DBDBDB"
              />
              <path
                d="M18.119 8.62336C18.9375 8.62018 19.5711 8.03047 19.6873 7.83867C19.8373 7.58911 19.513 7.21239 19.4099 7.21875C19.1514 7.4895 18.8814 7.81694 18.2749 7.81906C17.561 7.82224 17.7226 6.96231 17.7226 6.96231C17.7226 6.96231 19.0968 7.15676 19.649 6.07536C19.8257 5.72937 19.833 5.25092 19.7618 5.04482C19.6907 4.83871 19.2908 4.45722 18.6548 4.51498C17.8736 4.58703 16.8891 5.47876 16.6728 6.54956C16.499 7.41108 16.8277 8.62866 18.119 8.62336ZM18.9903 5.01515C19.119 5.01038 19.1074 5.24245 19.073 5.48511C19.0246 5.81415 18.6118 6.65076 17.8238 6.61791C17.8785 6.13099 18.4646 5.03422 18.9917 5.01515H18.9903Z"
                fill="#DBDBDB"
              />
              <path
                d="M6.20589 11.0678C6.20589 10.7329 6.32473 10.4598 6.56243 10.2484C6.80013 10.037 7.09941 9.93131 7.46028 9.93131C7.64612 9.93131 7.79306 9.96584 7.9011 10.0349C8.00915 10.1019 8.06317 10.1867 8.06317 10.2892C8.06317 10.3918 8.02643 10.4703 7.95296 10.5247C7.88165 10.5791 7.80278 10.6063 7.71635 10.6063C7.63207 10.6063 7.55428 10.5843 7.48297 10.5404C7.41382 10.4964 7.3598 10.4326 7.3209 10.3489C7.18477 10.4033 7.07672 10.4996 6.99677 10.6377C6.91898 10.7758 6.88008 10.914 6.88008 11.0521C6.88008 11.1902 6.90817 11.3022 6.96436 11.388C7.02054 11.4738 7.09401 11.5167 7.18477 11.5167C7.27552 11.5167 7.34899 11.4874 7.40518 11.4288C7.46352 11.3702 7.49269 11.2834 7.49269 11.1683C7.80818 11.1683 7.96593 11.2405 7.96593 11.3849C7.96593 11.5084 7.88597 11.6245 7.72607 11.7334C7.56616 11.8401 7.35548 11.8935 7.09401 11.8935C6.83254 11.8935 6.61861 11.8181 6.45223 11.6674C6.288 11.5147 6.20589 11.3148 6.20589 11.0678Z"
                fill="#DBDBDB"
              />
              <path
                d="M8.60996 9.86224L8.42845 9.61108C8.69856 9.45829 8.91141 9.3819 9.06699 9.3819C9.15559 9.3819 9.21826 9.39969 9.25499 9.43527C9.29173 9.46876 9.31009 9.53364 9.31009 9.62992C9.31009 9.7241 9.26147 9.99201 9.16423 10.4336C9.06915 10.8752 9.02161 11.185 9.02161 11.3629C9.02161 11.5408 9.05511 11.6664 9.1221 11.7396C8.97083 11.8422 8.83362 11.8935 8.71045 11.8935C8.58728 11.8935 8.49652 11.8548 8.43817 11.7773C8.38199 11.6978 8.3539 11.589 8.3539 11.4508C8.3539 11.3127 8.39388 11.0301 8.47383 10.6032C8.55378 10.1762 8.59916 9.92922 8.60996 9.86224Z"
                fill="#DBDBDB"
              />
              <path
                d="M10.5994 9.43527C10.5994 9.5148 10.5562 9.58387 10.4697 9.64248C10.3833 9.69899 10.285 9.72724 10.1748 9.72724C10.0646 9.72724 9.97705 9.70631 9.91222 9.66445C9.84955 9.62259 9.81822 9.56608 9.81822 9.49492C9.81822 9.39864 9.86468 9.32329 9.9576 9.26888C10.0505 9.21446 10.1488 9.18725 10.2526 9.18725C10.3563 9.18725 10.4395 9.20818 10.5021 9.25004C10.567 9.2919 10.5994 9.35364 10.5994 9.43527ZM9.96732 11.8935C9.83335 11.8935 9.73611 11.861 9.6756 11.7962C9.6151 11.7313 9.58485 11.6329 9.58485 11.501C9.58485 11.3671 9.65399 11.0102 9.79229 10.4305L9.61078 10.1668C9.88089 10.0098 10.0937 9.93131 10.2493 9.93131C10.3379 9.93131 10.4006 9.95014 10.4373 9.98782C10.4741 10.0234 10.4924 10.082 10.4924 10.1636C10.4924 10.195 10.4524 10.3792 10.3725 10.7162C10.2925 11.0532 10.2526 11.2938 10.2526 11.4383C10.2526 11.5827 10.2861 11.6831 10.353 11.7396C10.232 11.8422 10.1035 11.8935 9.96732 11.8935Z"
                fill="#DBDBDB"
              />
              <path
                d="M10.7767 11.0678C10.7767 10.7329 10.8955 10.4598 11.1332 10.2484C11.3709 10.037 11.6702 9.93131 12.0311 9.93131C12.2169 9.93131 12.3638 9.96584 12.4719 10.0349C12.5799 10.1019 12.6339 10.1867 12.6339 10.2892C12.6339 10.3918 12.5972 10.4703 12.5237 10.5247C12.4524 10.5791 12.3736 10.6063 12.2871 10.6063C12.2029 10.6063 12.1251 10.5843 12.0538 10.5404C11.9846 10.4964 11.9306 10.4326 11.8917 10.3489C11.7555 10.4033 11.6475 10.4996 11.5676 10.6377C11.4898 10.7758 11.4509 10.914 11.4509 11.0521C11.4509 11.1902 11.479 11.3022 11.5351 11.388C11.5913 11.4738 11.6648 11.5167 11.7555 11.5167C11.8463 11.5167 11.9198 11.4874 11.976 11.4288C12.0343 11.3702 12.0635 11.2834 12.0635 11.1683C12.379 11.1683 12.5367 11.2405 12.5367 11.3849C12.5367 11.5084 12.4568 11.6245 12.2969 11.7334C12.1369 11.8401 11.9263 11.8935 11.6648 11.8935C11.4033 11.8935 11.1894 11.8181 11.023 11.6674C10.8588 11.5147 10.7767 11.3148 10.7767 11.0678Z"
                fill="#DBDBDB"
              />
              <path
                d="M13.1645 9.86224L12.983 9.61108C13.2531 9.45829 13.466 9.3819 13.6216 9.3819C13.7102 9.3819 13.7728 9.39969 13.8096 9.43527C13.8463 9.46876 13.8647 9.52632 13.8647 9.60794C13.8647 9.68748 13.8506 9.79945 13.8225 9.94387C13.7966 10.0883 13.7609 10.2589 13.7156 10.4556C13.6723 10.6523 13.641 10.8104 13.6216 10.9297L13.8258 10.7539C13.8452 10.7371 13.8766 10.7109 13.9198 10.6754C13.9651 10.6377 13.9965 10.6105 14.0138 10.5937C14.0332 10.577 14.0591 10.554 14.0916 10.5247C14.124 10.4933 14.1477 10.4671 14.1629 10.4462C14.178 10.4253 14.1953 10.4012 14.2147 10.374C14.245 10.3279 14.2601 10.2767 14.2601 10.2201C14.2601 10.1615 14.2515 10.1103 14.2342 10.0663C14.3876 9.97631 14.5324 9.93131 14.6685 9.93131C14.7593 9.93131 14.8317 9.95956 14.8857 10.0161C14.9397 10.0705 14.9667 10.15 14.9667 10.2547C14.9667 10.3593 14.917 10.465 14.8176 10.5718C14.7204 10.6764 14.5994 10.7685 14.4546 10.848C14.5216 11.0636 14.608 11.2614 14.7139 11.4414C14.8198 11.6214 14.9084 11.7292 14.9797 11.7648C14.8933 11.8506 14.7593 11.8935 14.5778 11.8935C14.4438 11.8935 14.3303 11.8495 14.2374 11.7616C14.1467 11.6737 14.0656 11.5293 13.9943 11.3284L13.9133 11.1055L13.5794 11.2656C13.5773 11.2886 13.5762 11.3231 13.5762 11.3692C13.5762 11.5429 13.6097 11.6664 13.6767 11.7396C13.5254 11.8422 13.3882 11.8935 13.265 11.8935C13.1419 11.8935 13.0511 11.8548 12.9928 11.7773C12.9366 11.6978 12.9085 11.589 12.9085 11.4508C12.9085 11.3127 12.9485 11.0301 13.0284 10.6032C13.1084 10.1762 13.1537 9.92922 13.1645 9.86224Z"
                fill="#DBDBDB"
              />
            </svg>
          </span>
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
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    coinAnim() {
      let homecentericon = document.querySelector(".home-center-icon");
      if (this.count != 9) {
        if (this.count == 8) {
          this.count = 1;
        } else {
          this.count++;
        }
        document.querySelectorAll(".color-anim").forEach((e, i) => {
          if (this.count == 1 && i == 7) {
            e.classList.add("active");
            homecentericon.classList.remove("home-center-icon-click-two");
            homecentericon.classList.remove("home-center-icon-click-three");
            homecentericon.classList.remove("home-center-icon-click-four");
            homecentericon.classList.remove("home-center-icon-click-five");
            homecentericon.classList.add("home-center-icon-click-one");
          } else if (this.count == 2 && i == 2) {
            e.classList.add("active");
            homecentericon.classList.remove("home-center-icon-click-one");
            homecentericon.classList.remove("home-center-icon-click-three");
            homecentericon.classList.remove("home-center-icon-click-four");
            homecentericon.classList.remove("home-center-icon-click-five");
            homecentericon.classList.add("home-center-icon-click-two");
          } else if (this.count == 3 && i == 5) {
            e.classList.add("active");
            homecentericon.classList.remove("home-center-icon-click-two");
            homecentericon.classList.remove("home-center-icon-click-one");
            homecentericon.classList.remove("home-center-icon-click-four");
            homecentericon.classList.remove("home-center-icon-click-five");
            homecentericon.classList.add("home-center-icon-click-three");
          } else if (this.count == 4 && i == 1) {
            e.classList.add("active");
            homecentericon.classList.remove("home-center-icon-click-two");
            homecentericon.classList.remove("home-center-icon-click-three");
            homecentericon.classList.remove("home-center-icon-click-one");
            homecentericon.classList.remove("home-center-icon-click-five");
            homecentericon.classList.add("home-center-icon-click-four");
          } else if (this.count == 5 && i == 4) {
            e.classList.add("active");
            homecentericon.classList.remove("home-center-icon-click-two");
            homecentericon.classList.remove("home-center-icon-click-three");
            homecentericon.classList.remove("home-center-icon-click-four");
            homecentericon.classList.remove("home-center-icon-click-one");
            homecentericon.classList.add("home-center-icon-click-five");
          } else if (this.count == 6 && i == 3) {
            e.classList.add("active");
            homecentericon.classList.remove("home-center-icon-click-two");
            homecentericon.classList.remove("home-center-icon-click-three");
            homecentericon.classList.remove("home-center-icon-click-four");
            homecentericon.classList.remove("home-center-icon-click-five");
            homecentericon.classList.add("home-center-icon-click-four");
          } else if (this.count == 7 && i == 6) {
            e.classList.add("active");
            homecentericon.classList.remove("home-center-icon-click-one");
            homecentericon.classList.remove("home-center-icon-click-three");
            homecentericon.classList.remove("home-center-icon-click-four");
            homecentericon.classList.remove("home-center-icon-click-five");
            homecentericon.classList.add("home-center-icon-click-three");
          } else if (this.count == 8 && i == 0) {
            e.classList.add("active");
            homecentericon.classList.remove("home-center-icon-click-one");
            homecentericon.classList.remove("home-center-icon-click-three");
            homecentericon.classList.remove("home-center-icon-click-four");
            homecentericon.classList.remove("home-center-icon-click-five");
            homecentericon.classList.add("home-center-icon-click-two");
          } else {
            e.classList.remove("active");
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(180deg, #151d30 0%, #151d30 44.59%, #151d30 100%);
  .home_in {
    max-width: 680px;
    margin: 0 auto;
    // min-height: 100vh;
    width: 100%;
    background-image: url("@/assets/img/home_bg.png"),
      linear-gradient(180deg, #151d30 0%, #151d30 44.59%, #151d30 100%);
    background-position: center;
    background-size: 800px;
    background-repeat: no-repeat;
  }
  .main_container {
    padding: 0 22px;
    padding-bottom: 150px;
    min-height: 100vh;
  }
  .home_balance {
    gap: 8px;
    margin-bottom: 325px;
    .title {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 12px;
      text-align: center;
      background: linear-gradient(180deg, #6bff71 0%, #409944 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
        gap: 7px;
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
  .home-center-icon {
    top: 210px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 2;
    cursor: pointer;
    svg {
      width: 233px;
      height: 233px;
      .active {
        fill: #fd4141;
      }
    }
    span {
      &:nth-child(3) {
        top: calc(50% - 2px);
        left: calc(50% - 2px);
        transform: translate(-50%, -50%);
        svg {
          width: auto;
          height: 34px;
        }
      }
    }
  }
  .home-center-icon-click-one {
    animation: coinScale 0.2s forwards;
    .stake-click-icon {
      animation: coinRotate 0.3s forwards;
    }
    @keyframes coinRotate {
      0% {
        transform: translate(-50%, -50%) rotate(10deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(5deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }
  .home-center-icon-click-two {
    animation: coinScale2 0.2s forwards;
    .stake-click-icon {
      animation: coinRotate2 0.3s forwards;
    }
    @keyframes coinRotate2 {
      0% {
        transform: translate(-50%, -50%) rotate(25deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(15deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(20deg);
      }
    }
  }
  .home-center-icon-click-three {
    animation: coinScale3 0.2s forwards;
    .stake-click-icon {
      animation: coinRotate3 0.3s forwards;
    }
    @keyframes coinRotate3 {
      0% {
        transform: translate(-50%, -50%) rotate(-15deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(5deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }
  .home-center-icon-click-four {
    animation: coinScale4 0.2s forwards;
    .stake-click-icon {
      animation: coinRotate4 0.3s forwards;
    }
    @keyframes coinRotate4 {
      0% {
        transform: translate(-50%, -50%) rotate(-40deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(-25deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(-30deg);
      }
    }
  }
  .home-center-icon-click-five {
    animation: coinScale5 0.2s forwards;
    .stake-click-icon {
      animation: coinRotate5 0.3s forwards;
    }
    @keyframes coinRotate5 {
      0% {
        transform: translate(-50%, -50%) rotate(-50deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(-35deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(-40deg);
      }
    }
  }
  @keyframes coinScale {
    0% {
      transform: translate(-50%, 0) scale(1.05);
    }
    50% {
      transform: translate(-50%, 0) scale(0.9);
    }
    100% {
      transform: translate(-50%, 0) scale(0.95);
    }
  }
  @keyframes coinScale2 {
    0% {
      transform: translate(-50%, 0) scale(1);
    }
    50% {
      transform: translate(-50%, 0) scale(0.85);
    }
    100% {
      transform: translate(-50%, 0) scale(0.9);
    }
  }
  @keyframes coinScale3 {
    0% {
      transform: translate(-50%, 0) scale(0.95);
    }
    50% {
      transform: translate(-50%, 0) scale(0.8);
    }
    100% {
      transform: translate(-50%, 0) scale(0.85);
    }
  }
  @keyframes coinScale4 {
    0% {
      transform: translate(-50%, 0) scale(0.9);
    }
    50% {
      transform: translate(-50%, 0) scale(0.75);
    }
    100% {
      transform: translate(-50%, 0) scale(0.8);
    }
  }
  @keyframes coinScale5 {
    0% {
      transform: translate(-50%, 0) scale(0.75);
    }
    50% {
      transform: translate(-50%, 0) scale(0.4);
    }
    100% {
      transform: translate(-50%, 0) scale(0.55);
    }
  }
}
</style>
