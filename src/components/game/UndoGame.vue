<template>
  <div @click="$emit('stopGame')" class="undo-wrapper">
    <span class="undo-x">x</span>
    <div class="undo">Отмена</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "UndoGame",
  methods: {
    ...mapActions(["writeAnswers"]),
  },
});
</script>

<style scoped>
.undo-wrapper {
  position: relative;
}

.undo-x {
  position: absolute;
  top: 45%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 30px;
  color: #828282;
}

.undo {
  width: 150px;
  height: 50px;
  padding: 10px;
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-sizing: border-box;
  font-size: 22px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-weight: 500;
  color: #828282;
  text-transform: uppercase;
  cursor: pointer;
}

.undo-link {
  text-decoration: none;
}
</style>
