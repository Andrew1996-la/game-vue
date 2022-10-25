<template>
  <div class="controller">
    <div class="number_controller">
      <div @click="$emit('action', 1)" class="circle_number">1</div>
      <div @click="$emit('action', 2)" class="circle_number">2</div>
      <div @click="$emit('action', 3)" class="circle_number">3</div>
      <div @click="$emit('action', 4)" class="circle_number">4</div>
      <div @click="$emit('action', 5)" class="circle_number">5</div>
      <div @click="$emit('action', 6)" class="circle_number">6</div>
      <div @click="$emit('action', 7)" class="circle_number">7</div>
      <div @click="$emit('action', 8)" class="circle_number">8</div>
      <div @click="$emit('action', 9)" class="circle_number">9</div>
      <div @click="$emit('action', 0)" class="circle_number">0</div>
    </div>
    <div class="action_controller">
      <div @click="$emit('action', '>')" class="circle_action">&gt;</div>
      <div @click="$emit('action', '<')" class="circle_action">&lt;</div>
      <div @click="$emit('action', '?')" class="circle_action">?</div>
      <div @click="$emit('action', '=')" class="circle_action">=</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "ControllerGame",
  methods: {
    ...mapState(["expression"]),
  },
});
</script>

<style scoped>
.controller {
  margin: 50px auto 0 auto;
  width: 450px;
  display: flex;
}

.number_controller {
  margin: 50px auto 0 auto;
  width: 317px;
  display: flex;
  flex-wrap: wrap;
}

.action_controller {
  margin-top: 50px;
}

.circle_number {
  margin: 0 auto 20px auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: coral;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.17) 0 -23px 25px 0 inset,
    rgba(0, 0, 0, 0.15) 0 -36px 30px 0 inset,
    rgba(0, 0, 0, 0.1) 0 -79px 40px 0 inset, rgba(0, 0, 0, 0.06) 0 2px 1px,
    rgba(0, 0, 0, 0.09) 0 4px 2px, rgba(0, 0, 0, 0.09) 0 8px 4px,
    rgba(0, 0, 0, 0.09) 0 16px 8px, rgba(0, 0, 0, 0.09) 0 32px 16px;
}

.circle_number:hover {
  transform: scale(1.1);
}

.circle_action {
  margin: 0 auto 20px auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: darkgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.17) 0 -23px 25px 0 inset,
    rgba(0, 0, 0, 0.15) 0 -36px 30px 0 inset,
    rgba(0, 0, 0, 0.1) 0 -79px 40px 0 inset, rgba(0, 0, 0, 0.06) 0 2px 1px,
    rgba(0, 0, 0, 0.09) 0 4px 2px, rgba(0, 0, 0, 0.09) 0 8px 4px,
    rgba(0, 0, 0, 0.09) 0 16px 8px, rgba(0, 0, 0, 0.09) 0 32px 16px;
}

.circle_action:hover {
  transform: scale(1.1);
}
</style>
