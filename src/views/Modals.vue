<template>
  <div
    class="bg-primary d-flex flex-column align-items-center"
    style="height: 100vh"
  >
    <div class="btns">
      <button
        class="failed_btn d-flex align-items-center justify-content-center"
        @click="
          (failed = !failed),
            (successful = false),
            (nomoney = false),
            (turboactive = false)
        "
      >
        failed
      </button>
      <button
        class="failed_btn d-flex align-items-center justify-content-center"
        @click="
          (successful = !successful),
            (failed = false),
            (nomoney = false),
            (turboactive = false)
        "
      >
        successful
      </button>
      <button
        class="failed_btn d-flex align-items-center justify-content-center"
        @click="
          (nomoney = !nomoney),
            (failed = false),
            (successful = false),
            (turboactive = false)
        "
      >
        no-money
      </button>
      <button
        class="failed_btn d-flex align-items-center justify-content-center"
        @click="
          (turboactive = !turboactive),
            (failed = false),
            (successful = false),
            (nomoney = false)
        "
      >
        Turbo active
      </button>
    </div>
    <div class="modals">
      <FailedModal :modal="failed" />
      <SuccessfulModal :modal="successful" />
      <NomoneyModal :modal="nomoney" />
      <TurboactiveModal :modal="turboactive" />
    </div>
  </div>
</template>

<script>
import FailedModal from "@/components/Failed.modal.vue";
import SuccessfulModal from "@/components/Successful.modal.vue";
import NomoneyModal from "@/components/nomoney.modal.vue";
import TurboactiveModal from "@/components/Turboactive.modal.vue";

export default {
  components: {
    FailedModal,
    SuccessfulModal,
    NomoneyModal,
    TurboactiveModal,
  },
  data() {
    return {
      failed: false,
      successful: false,
      nomoney: false,
      turboactive: false,
    };
  },
};
</script>
