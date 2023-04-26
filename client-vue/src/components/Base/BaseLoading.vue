<template>
  <div class="w-full relative mx-auto">
    <span
      class="loader"
      :style="{
        width: `${size}px`,
      }"
    >
      <svg
        class="circular h-full w-full absolute top-0 bottom-0 left-0 right-0 m-auto"
        viewBox="25 25 50 50"
      >
        <circle
          class="path text-main stroke-current"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          :stroke-width="width"
          stroke-miterlimit="10"
        />
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number;
  width?: number;
}

withDefaults(defineProps<Props>(), {
  size: 21,
  width: 4,
});
</script>

<style scoped lang="scss">
.loader {
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
}

.circular {
  animation: rotate 2s linear infinite;
  transform-origin: center center;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
