<template>
  <div >
    <input type="text" v-model="newItem" placeholder="请输入内容">
    <button @click="addItem">ADD</button>
    <transition-group name="tabItem" tag="ul">
        <li v-for="(item, index) in list"  :key="index">{{item}}&nbsp;<button @click="removeItem(index)">X</button></li>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  name: 'tagList',
  data () {
    return {
      list: [],
      newItem: ''
    }
  },
  methods: {
    addItem: function () {
      this.list.push(this.newItem)
      this.newItem = ''
    },
    removeItem: function (i) {
      this.list.splice(i, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  .tabItem-enter-active, .tabItem-leave-active {
    transition: opacity 1s
  }
  .tabItem-enter, .tabItem-leave-active {
    opacity: 0
  } 
</style>
