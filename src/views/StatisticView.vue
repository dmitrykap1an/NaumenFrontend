<template>
  <div>
    <div class="nameWithHighestAge" v-if="nameWithHighestAge !== ''">
      Имя с наибольшим возрастом: {{nameWithHighestAge}}
    </div>
    <table class="statistic_table" v-if="frequency.length !== 0">
      <thead class="header">
      <tr>
        <th>Имя</th>
        <th>Количество запросов</th>
      </tr>
      </thead>
      <tbody class="data">
      <tr v-for="(statistic, i) in frequency" :key="i">
        <td>{{ statistic.name }}</td>
        <td>{{ statistic.numberOfRequests }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "@/store";
import {toRaw} from "vue";

export default {
  name: "StatisticView",
  data(){
    return{
      frequency: [],
      nameWithHighestAge: ''
    }
  },
  methods:{
    getStatistic(){
      store.dispatch('getStatisticByName')
    },
    getNameWithHighestAge(){
      store.dispatch('getNameWithHighestAge')
    }
  },
  created() {
    store.state.nameWithHighestAge = ''
    store.state.frequency = []
    this.getStatistic();
    this.getNameWithHighestAge()
  },
  computed:{
    statistic(){
      return store.state.frequency.length
    },
    name(){
      return store.state.nameWithHighestAge.length
    }
  },
  watch:{
    statistic(){
      this.frequency = toRaw(store.state.frequency)
    },
    name(){
      this.nameWithHighestAge = toRaw(store.state.nameWithHighestAge)
    }

  }
}
</script>

<style scoped>

.nameWithHighestAge{
  padding-top: 5%;
  font-size: 30px;
}

.statistic_table {
  width: 50%;
  height: 100px;
  text-align: center;
  margin: 3% auto;
  border-radius: 10px;
  border-spacing: 0;
  border-style: solid;
  border-color: white;
  overflow: hidden;
}

.header {
  background-color: #1E90FF;
}

.data {
  background-color: white;
}
</style>
