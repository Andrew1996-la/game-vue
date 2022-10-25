<template>
  <div class="action_list">
    <div class="action_item">
      <input v-model="actions" value="+" type="checkbox" id="sum" />
      <label for="sum">Суммирование</label>
    </div>
    <div class="action_item">
      <input v-model="actions" value="-" type="checkbox" id="difference" />
      <label for="difference">Разница</label>
    </div>
    <div class="action_item">
      <input v-model="actions" value="*" type="checkbox" id="multiply" />
      <label for="multiply">Умножение</label>
    </div>
    <div class="action_item">
      <input v-model="actions" value="/" type="checkbox" id="divide" />
      <label for="divide">Деление</label>
    </div>
    <div class="action_item">
      <input v-model="actions" value="**" type="checkbox" id="degree" />
      <label for="degree">Возведение в степень</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { Action } from "@/store";

export default defineComponent({
  name: "ActionList",

  methods: {
    ...mapActions(["chooseActions"]),
  },

  computed: {
    actions: {
      get() {
        return this.$store.state.actions;
      },

      set(value: Action[]) {
        this.chooseActions(value);
      },
    },
  },
});
</script>

<style scoped>
.action_list {
  margin-top: 50px;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.action_item input {
  margin-right: 10px;
}
</style>
