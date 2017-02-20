<template>
  <div >
    <input type="text" v-model="newItem" placeholder="请输入内容  " @keyup.enter="addItem">
    <button @click="addItem">ADD</button>
    <transition-group name="tabItem" tag="ul">
        <li class="list-item" v-for="(item, index) in list"  :key="index">{{item}}&nbsp;<button @click="removeItem(index)">X</button></li>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  name: 'tagList',
  created () {
    document.title = 'tagList'
  },
  data () {
    return {
      list: [],
      newItem: ''
    }
  },
  methods: {
    addItem: function () {
      if (this.newItem.trim()) {
        this.list.push(this.newItem)
        this.newItem = ''
      }
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
  .list-item{
    margin-bottom: 10px; 
    overflow: hidden;
    width: 500px;
    margin-left: 400px;
    background-color: red;
    color: white;
    text-align: left;
  }
  .list-item button{
    float: right;
  }
  .tabItem-enter-active, .tabItem-leave-active {
    transition: all 1s;
  }
  .tabItem-enter, .tabItem-leave-active {
    opacity: 0;
    transform: translate(50px);
  } 
</style>
