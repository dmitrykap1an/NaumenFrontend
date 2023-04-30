<template>
  <nav>
    <router-link to="/">Поиск</router-link>
    <router-link to="/statistic">Статистика</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}


nav {
  width: 100%;
  margin-top: -10px;
  padding: 25px 0 25px 0;
  display: flex;
  justify-content: center;
  background-color: cornflowerblue;
}

nav a {
  font-weight: bold;
  color: black;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 18px;
  text-decoration: none;
}

</style>
