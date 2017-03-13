<template>
  <div class="hello">
    <ul>
      <li><router-link to="/tagList">Go to tagList</router-link></li>
      <li><router-link to="/simpleTab">Go to simpleTab</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  created () {
    document.title = 'Hello'
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 100px;
  }
}



a {
  color: #42b983;
}
</style>
