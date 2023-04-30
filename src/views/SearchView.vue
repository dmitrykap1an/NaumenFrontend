<template>
  <div>
    <input type="text" v-model="name" maxlength="10"> <br>
    <input type="button" value="Отправить" @click="sendName">
  </div>
  <h1 class="age">{{ age }}</h1>
</template>

<script>
import store from "@/store";
import {toRaw} from "vue";

export default {
  name: "SearchView",
  data() {
    return {
      name: '',
      age: '',
      mass: [1,2,3,4],
      mass2: [11, 12, 13, 14]
    }
  },
  methods: {
    sendName() {
      store.dispatch('sendName', this.name)
      store.dispatch('getStatisticByName')
      store.dispatch('getNameWithHighestAge')
    },
  },
  computed: {
    checkAge() {
      return store.state.age
    }
  },
  watch: {
    checkAge() {
      const age = toRaw(store.state.age)
      if(age == null) this.age = 404
      else if(age !== 404) this.age = age
      else store.dispatch('sendNameToService', this.name)
    }
  }
}
</script>

<style scoped>
.age {
  margin-top: 100px;
  font-size: 60px;
}

input[type=text] {
  margin-top: 10%;
  height: 50px;
  width: 20%;
  border-radius: 10px;
  font-size: 25px;
}

input[type=button] {
  margin-top: 10px;
  height: 30px;
  width: 20%;
  border-radius: 10px;
}

</style>
