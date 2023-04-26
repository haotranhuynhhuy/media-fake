<template>
  <transition name="fade">
    <div
      v-if="showModal"
      class="main-modal flex fixed w-full inset-0 overflow-hidden justify-center items-center"
      @click="modalClose"
    >
      <div
        class="content-model absolute w-11/12 md:max-w-md mx-auto"
        @click.stop
      >
        <div class="icon-background h-4 cursor-pointer">
          <div class="icon">
            <slot name="icon" />
          </div>
        </div>
        <div class="modal-content overflow-y-auto">
          <!--Header-->
          <div class="header">
            <slot name="header" />
          </div>
          <!--Body-->
          <slot />
          <!--Footer-->
          <div class="footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface Modal {
  showModal: boolean;
  modalClose?: any;
}
withDefaults(defineProps<Modal>(), {
  showModal: false,
  modalClose: () => {},
});
</script>

<style scoped lang="scss">
.main-modal {
  background: rgba(205, 206, 219, 0.6);
  z-index: 1001;
  backdrop-filter: blur(12px);
  max-width: 423px;
  margin: auto;
}

.content-model {
  max-width: 367px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  padding: 0 20px;
  background-color: #fff;
  .icon {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .modal-content {
    max-height: 100vh;
    .footer {
      padding: 15px 0;
    }
  }
}
::-webkit-scrollbar {
  width: 0px;
}
</style>
