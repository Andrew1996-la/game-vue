<template>
  <div class="expression">
    <template v-for="(elem, index) in arrWithMissing" :key="index">
      <span v-if="elem !== ''">{{ elem }} </span>
      <input class="expression-input" v-else type="number" ref="input" />
    </template>
    <span>{{ `= ${expressionResult}` }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { getRandomNumber, pickRandomElement } from "@/utilits";
import { Expression } from "@/types";

export default defineComponent({
  name: "MathExpression",
  data() {
    return {
      countRightAnswer: 0,
      countWrongAnswer: 0,
      focusIndex: 0,
      userNumbers: [],
      expression: {
        startValue: 0,
        actions: [],
        numbers: [],
      } as Expression,
    };
  },

  methods: {
    updateExpression() {
      const expression: Expression = {
        startValue: getRandomNumber(100),
        actions: [] as string[],
        numbers: [] as number[],
      };

      for (let i = 0; i < this.complexity; i++) {
        expression.actions.push(pickRandomElement(this.actions));
        expression.numbers.push(getRandomNumber(100));
      }

      this.expression = expression;
    },

    calcUserExpression() {
      let expression = "";
      expression += this.expression.startValue.toString();

      this.expression.actions.forEach((action, i) => {
        expression += action.toString();
        expression += (this.$refs.input as HTMLInputElement[])[
          i
        ].value.toString();
      });

      return eval(expression);
    },

    hasValidInputs() {
      const inputs = this.$refs.input as HTMLInputElement[];
      return !inputs.some(
        (input: HTMLInputElement) => !input.value || isNaN(+input.value)
      );
    },

    calcAnswers() {
      this.calcUserExpression() === this.expressionResult
        ? this.countRightAnswer++
        : this.countWrongAnswer++;
    },

    checkAnswer() {
      return this.calcUserExpression() === this.expressionResult;
    },

    right() {
      this.focusIndex =
        this.focusIndex === this.expression.numbers.length - 1
          ? (this.focusIndex = 0)
          : this.focusIndex + 1;

      this.focusedInput.focus();
    },

    left() {
      this.focusIndex =
        this.focusIndex === 0
          ? this.expression.numbers.length - 1
          : this.focusIndex - 1;

      this.focusedInput.focus();
    },

    insertNumber(number: string | number) {
      this.focusedInput.value += number;
      this.focusedInput.focus();
    },

    ...mapActions(["writeAnswers"]),
  },

  computed: {
    ...mapState(["complexity", "time", "actions"]),

    focusedInput(): HTMLInputElement {
      const inputs = this.$refs.input as HTMLInputElement[];
      return inputs[this.focusIndex];
    },

    stringifiedExpression(): string {
      const { startValue, actions, numbers } = this.expression;
      const expressionParts: Array<string | number> = [startValue];
      for (let i = 0; i < actions.length; i++) {
        expressionParts.push(actions[i], numbers[i]);
      }
      return expressionParts.join("");
    },

    stringifiedExpressionWithResult(): string {
      return `${this.stringifiedExpression}=${this.expressionResult}`;
    },

    expressionResult(): number {
      return eval(this.stringifiedExpression);
    },

    arrWithMissing(): Array<string | number> {
      const matches = this.stringifiedExpression.matchAll(/\d+|\D+/g);
      const [firstNumber, ...components] = Array.from(matches, (m) => m[0]);
      const processedComponents = components.map((component, index) =>
        index % 2 ? "" : component
      );
      return [firstNumber, ...processedComponents];
    },
  },

  mounted() {
    this.updateExpression();
    this.$nextTick(() => {
      this.focusedInput.focus();
    });
  },
});
</script>

<style scoped>
.expression-input {
  margin: 20px 10px 0 10px;
  width: 60px;
  font-size: 22px;

  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  color: inherit;
  outline: none;
}

.expression-input::-webkit-outer-spin-button,
.expression-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.expression-input[type="number"] {
  -moz-appearance: textfield;
}

.expression {
  margin-top: 30px;
  font-size: 22px;
}
</style>
