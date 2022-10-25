<template>
  <div class="complexity">
    <input
      class="complexity_input"
      v-model="complexity"
      type="range"
      min="1"
      max="10"
    />
    <div class="box-minmax"><span>1</span><span>10</span></div>
    <div class="complexity__choose">Сложность: {{ complexity }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "ComplexityGame",
  methods: {
    ...mapActions(["setComplexity"]),
  },
  computed: {
    complexity: {
      get() {
        return this.$store.state.complexity;
      },

      set(value: number) {
        this.setComplexity(value);
      },
    },
  },
});
</script>

<style scoped>
.complexity {
  width: 260px;
  position: relative;
}

.complexity_input {
  width: 260px;
}

.box-minmax {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: -25px;
  width: 255px;
}

.complexity__choose {
  text-align: left;
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
