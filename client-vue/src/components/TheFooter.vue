<template>
  <div class="app-footer font-bold relative text-blue">
    <img class="img-footer-img w-full" :src="bgFooter" alt="" />
    <div class="flex items-center justify-around absolute w-full bottom-custom">
      <router-link
        :to="{ name: constRouter.DASHBOARD.name }"
        :class="[
          $route.name === constRouter.DASHBOARD.name
            ? 'action-stroke'
            : 'non-action-stroke',
        ]"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3499 13.8874V11.2439H7.3776V20H1V9L10.5 1L20 9V20H13.3499"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link
        :to="{ name: constRouter.CONTRACT.name }"
        :class="[
          $route.name === constRouter.CONTRACT.name
            ? 'action-stroke'
            : 'non-action-stroke',
        ]"
      >
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 18.2165V6.73907H5.15446V18.2165H9.55812V1H13.834V18.2165H18.1066V13.5171H21.8997V18.2165"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link
        :to="{ name: constRouter.CONTRACT_CREATE_REQUEST.name }"
        class="relative w-5"
      >
        <div
          class="h-16 w-16 rounded-full bg-primary bg-hover-color flex items-center justify-center absolute left-custom"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="non-action-stroke"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2C15 0.895447 14.1046 0 13 0C11.8954 0 11 0.895447 11 2V11H2C0.895432 11 0 11.8954 0 13C0 14.1046 0.895432 15 2 15H11V24C11 25.1046 11.8954 26 13 26C14.1046 26 15 25.1046 15 24V15H24C25.1046 15 26 14.1046 26 13C26 11.8954 25.1046 11 24 11H15V2Z"
              fill="white"
            />
          </svg>
        </div>
      </router-link>
      <router-link
        :to="{ name: constRouter.DASHBOARD_INFO.name }"
        :class="[
          $route.name === constRouter.DASHBOARD_INFO.name
            ? 'action-fill'
            : 'non-action-fill',
        ]"
      >
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.08232 2C4.08232 0.895431 4.97775 0 6.08232 0H18.8417C19.9463 0 20.8417 0.89543 20.8417 2V16.915C20.8417 19.6764 18.6031 21.915 15.8417 21.915H5C2.23858 21.915 0 19.6764 0 16.915V10.3753C0 9.82301 0.447715 9.3753 1 9.3753C1.55228 9.3753 2 9.82301 2 10.3753V16.915C2 18.5718 3.34315 19.915 5 19.915H15.8417C17.4985 19.915 18.8417 18.5718 18.8417 16.915V2H6.08232V16.8013C6.08232 17.3536 5.63461 17.8013 5.08232 17.8013C4.53004 17.8013 4.08232 17.3536 4.08232 16.8013V2Z"
          />
          <path
            d="M7.84973 5.4021C7.84973 4.84981 8.29745 4.4021 8.84973 4.4021H14.8751C15.4274 4.4021 15.8751 4.84981 15.8751 5.4021C15.8751 5.95438 15.4274 6.4021 14.8751 6.4021H8.84973C8.29745 6.4021 7.84973 5.95438 7.84973 5.4021Z"
          />
          <path
            d="M8.84973 8.11011C8.29745 8.11011 7.84973 8.55782 7.84973 9.11011C7.84973 9.66239 8.29745 10.1101 8.84973 10.1101H10.9097C11.462 10.1101 11.9097 9.66239 11.9097 9.11011C11.9097 8.55782 11.462 8.11011 10.9097 8.11011H8.84973Z"
          />
        </svg>
      </router-link>
      <router-link
        :to="{ name: constRouter.PROFILE.name }"
        :class="[
          $route.name === constRouter.PROFILE.name
            ? 'action-fill'
            : 'non-action-fill',
        ]"
      >
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.84614 0C6.71762 0 4.18146 2.53617 4.18146 5.66468C4.18146 8.7932 6.71762 11.3294 9.84614 11.3294C12.9747 11.3294 15.5108 8.7932 15.5108 5.66468C15.5108 2.53617 12.9747 0 9.84614 0ZM6.18146 5.66468C6.18146 3.64073 7.82219 2 9.84614 2C11.8701 2 13.5108 3.64073 13.5108 5.66468C13.5108 7.68863 11.8701 9.32937 9.84614 9.32937C7.82219 9.32937 6.18146 7.68863 6.18146 5.66468Z"
          />
          <path
            d="M5 13.7135C2.23858 13.7135 0 15.9521 0 18.7135V20.6118C0 21.1641 0.447715 21.6118 1 21.6118H10.4496C11.0019 21.6118 11.4496 21.1641 11.4496 20.6118C11.4496 20.0596 11.0019 19.6118 10.4496 19.6118H2V18.7135C2 17.0566 3.34315 15.7135 5 15.7135H14.6922C16.3491 15.7135 17.6922 17.0566 17.6922 18.7135V20.6118C17.6922 21.1641 18.1399 21.6118 18.6922 21.6118C19.2445 21.6118 19.6922 21.1641 19.6922 20.6118V18.7135C19.6922 15.9521 17.4536 13.7135 14.6922 13.7135H5Z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import bgFooter from '@/assets/images/bgfooter.png';
import constRouter from '@/constants/constRouter';
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.bottom-custom {
  bottom: 1.5rem;
}
.left-custom {
  left: -22px;
  top: -72px;
}
.bg-reponsive-custom {
  background-color: #5dad72;
  bottom: 22px;
}
.bg-hover-color:hover {
  background-color: #4c9d61;
}
.non-action {
  &-stroke {
    path {
      stroke: #98c9a4;
      &:hover {
        stroke: #98c9a4a4;
      }
    }
  }
  &-fill {
    path {
      fill: #98c9a4;
      &:hover {
        fill: #98c9a4a4;
      }
    }
  }
}
.action {
  &-stroke {
    path {
      stroke: #26273c;
    }
  }
  &-fill {
    path {
      fill: #26273c;
    }
  }
}
</style>
