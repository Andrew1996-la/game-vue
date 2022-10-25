<template>
  <div class="timer-wrapper">
    <span class="timer-decor"></span>
    <div class="timer">{{ formatted(minutes) }}: {{ formatted(seconds) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "TimerGame",

  data() {
    return {
      deadline: 0,
      seconds: 0,
      minutes: 0,
    };
  },

  methods: {
    formatted(num: number) {
      const time = num.toString();
      return time.length < 2 ? "0" + time : time;
    },

    start() {
      this.seconds = (this.time * 60) % 60;
      this.minutes = this.time;

      const timerID = setInterval(() => {
        if (this.minutes === 0 && this.seconds === 1) {
          clearInterval(timerID);
          this.$emit("stopGameTimer");
        }
        if (this.seconds === 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }
      }, 1000);
    },
  },

  computed: {
    ...mapState(["time"]),
  },

  watch: {},

  mounted() {
    this.start();
  },
});
</script>

<style scoped>
.timer-wrapper {
  position: relative;
}

.timer-decor {
  position: absolute;
  right: 0;
  top: 0;
  height: 50px;
  width: 30px;
  background-color: #b7ceff;
}

.timer {
  width: 150px;
  height: 50px;
  border: 1px solid #b7ceff;
  padding: 10px;
  box-sizing: border-box;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #828282;
  background-color: #d4d4d4;
}
</style>
