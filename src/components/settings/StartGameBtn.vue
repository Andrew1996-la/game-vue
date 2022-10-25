<template>
  <div class="play-btn-wrapper">
    <router-link class="play-btn-link" to="/game">
      <button ref="playBtn" class="play-btn" :disabled="!canPlay">Play</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "StartGameBtn",
  computed: {
    ...mapGetters(["actionCount"]),
    canPlay(): boolean {
      return this.actionCount !== 0;
    },
  },
});
</script>

<style scoped>
.play-btn-wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.play-btn {
  width: 150px;
  height: 50px;
  padding: 10px;
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-sizing: border-box;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #828282;
  background-color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
}

.play-btn:disabled {
  background-color: #c7c7c7;
}

.play-btn-link {
  text-decoration: none;
}
</style>
