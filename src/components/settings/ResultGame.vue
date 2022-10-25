<template>
  <p class="result_game">
    Добро пожловать на
    {{ countDay }} день тренировочный день, ваш последний результат
    {{ userAnswers.rightAnswers }}
    - из {{ userAnswers.rightAnswers + userAnswers.wrongAnswers }}. Общая
    точность
    <span v-if="!isNaN(countPercentRightAnswers())">{{
      countPercentRightAnswers()
    }}</span>
    <span v-else>0</span>
    %
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import {
  localStorageSetDate,
  localStorageGetDate,
} from "@/store/plugins/localStorageBackUpPlugin";

export default defineComponent({
  name: "ResultGame",

  data() {
    return {
      countDay: 1,
    };
  },

  methods: {
    getDateToday() {
      const date = new Date();
      return `${date.getDay()}:${date.getMonth()}:${date.getFullYear()}`;
    },

    compareDate() {
      const dateToday = this.getDateToday();
      const lastDay = JSON.parse(localStorageGetDate() || "");
      if (dateToday !== lastDay) {
        this.countDay++;
      }
    },

    countPercentRightAnswers() {
      const calcPercent =
        this.userAnswers.rightAnswers /
        (this.userAnswers.rightAnswers + this.userAnswers.wrongAnswers);
      return calcPercent * 100;
    },
  },
  computed: {
    ...mapState(["userAnswers"]),
  },
  mounted() {
    this.getDateToday();
    localStorageSetDate(this.getDateToday());
    this.compareDate();
  },
});
</script>

<style scoped>
.result_game {
  width: 350px;
  text-align: left;
}
</style>
