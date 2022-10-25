<template>
  <div class="game">
    <div class="time-game-wrapper">
      <UndoGame @stop-game="stopGame" />
      <TimerGame @stop-game-timer="stopGame" />
    </div>
    <MathExpression ref="inputs" />
    <ControllerGame @action="handleAction" />
    <ModalWindow v-if="isModalOpen">
      <div class="right" v-if="isCorrect">Вы решили правильно</div>
      <div class="wrong" v-else>
        <div>Верное решение - {{ getRightAnswer() }}</div>
      </div>
      <button @click="generateNewExpression">Продолжить</button>
    </ModalWindow>
  </div>
</template>

<script lang="ts">
import { ComponentOptions, defineComponent } from "vue";
import UndoGame from "@/components/game/UndoGame.vue";
import TimerGame from "@/components/game/TimerGame.vue";
import MathExpression from "@/components/game/MathExpression.vue";
import ControllerGame from "@/components/game/ControllerGame.vue";
import ModalWindow from "@/components/game/ModalWindow.vue";

import { mapActions } from "vuex";

export default defineComponent({
  name: "SettingsView",
  components: {
    UndoGame,
    TimerGame,
    MathExpression,
    ControllerGame,
    ModalWindow,
  },
  data() {
    return {
      isModalOpen: false,
      isCorrect: false,
    };
  },
  methods: {
    stopGame() {
      const inputs = this.$refs.inputs as ComponentOptions;

      const stats = {
        wrongAnswerCount: inputs.countWrongAnswer,
        rightAnswerCount: inputs.countRightAnswer,
      };

      this.writeAnswers(stats);
      this.$router.push("/");
    },

    isValidInput() {
      const inputs = this.$refs.inputs as ComponentOptions;
      if (inputs.hasValidInputs()) {
        this.toggleModal();
        this.isCorrect = inputs.checkAnswer();
        inputs.calcAnswers();
      }
    },

    handleAction(button: string | number) {
      const inputs = this.$refs.inputs as ComponentOptions;

      switch (button) {
        case ">":
          inputs.right();
          return;
        case "<":
          inputs.left();
          return;
        case "?":
          this.toggleModal();
          return;
        case "=":
          this.isValidInput();
          return;
        default:
          inputs.insertNumber(button);
      }
    },

    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },

    generateNewExpression() {
      this.isModalOpen = false;
      this.isCorrect = false;
      const inputs = this.$refs.inputs as ComponentOptions;
      return inputs.updateExpression();
    },

    getRightAnswer() {
      const inputs = this.$refs.inputs as ComponentOptions;
      return inputs.stringifiedExpressionWithResult;
    },

    ...mapActions(["writeAnswers"]),
  },
});
</script>

<style scoped>
.game {
  margin: 50px auto 0 auto;
  width: 500px;
}

.time-game-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
