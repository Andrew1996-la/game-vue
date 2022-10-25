<template>
  <div class="time">
    <input class="time_input" v-model="time" type="range" min="1" max="15" />
    <div class="box-minmax"><span>1</span><span>15</span></div>
    <div class="time__duration">Длительность в минутах: {{ time }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "TimeGame",
  methods: {
    ...mapActions(["setTime"]),
  },
  computed: {
    time: {
      get() {
        return this.$store.state.time;
      },

      set(value: number) {
        this.setTime(value);
      },
    },
  },
});
</script>

<style scoped>
.time {
  width: 260px;
  margin-top: 50px;
  position: relative;
}

.time_input {
  width: 260px;
}

.time__duration {
  text-align: left;
}

.box-minmax {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: -25px;
  width: 255px;
}

input {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  outline: none;
  border-radius: 3px;
  background-color: #6c6c6c;
}

input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 3;
  position: relative;
  background-color: #828282;
}
</style>
