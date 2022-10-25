<template>
  <div class="home">
    <h2 class="home__greeting">Привет!</h2>
    <ResultGame />
    <h3 class="home__settings">Настройки</h3>
    <ComplexityGame />
    <TimeGame />
    <ActionList />
    <StartGameBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResultGame from "@/components/settings/ResultGame.vue";
import ComplexityGame from "@/components/settings/ComplexityGame.vue";
import TimeGame from "@/components/settings/TimeGame.vue";
import ActionList from "@/components/settings/ActionList.vue";
import StartGameBtn from "@/components/settings/StartGameBtn.vue";

export default defineComponent({
  name: "SettingsView",
  components: {
    ComplexityGame,
    TimeGame,
    ActionList,
    StartGameBtn,
    ResultGame,
  },
});
</script>

<style scoped>
.home {
  margin: 0 auto;
  width: 500px;
}

.home__greeting {
  text-align: left;
}

.home__settings {
  text-align: left;
}
</style>
