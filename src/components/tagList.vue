<template>
  <div class="tag">
    <input type="text" v-model="newItem" placeholder="请输入内容" @keyup.enter="addItem">
    <button @click="addItem">ADD</button>
    <transition-group name="tabItem" tag="ul">
        <li class="list-item" :class="colors[index%3]"  v-for="(item, index) in list"  :key="index">{{item}}&nbsp;<button @click="removeItem(index)">X</button></li>
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
      newItem: '',
      colors: ['red', 'yellow', 'green']
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
<style lang="less" scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  .tag{
    width: 500px;
    margin: 0 auto;
  }
  .list-item{
    margin-bottom: 10px; 
    overflow: hidden;
    margin-left: 10px;
    background-color: red;
    color: white;
    float: left;
    text-align: left;
    button{
      float: right;
      background: black;
      color: white;
    }
  }
  .tabItem-enter-active, .tabItem-leave-active {
    transition: all 1s;
  }
  .tabItem-enter, .tabItem-leave-active {
    opacity: 0;
    transform: translate(50px);
  } 
  .red{
    background-color: red;
  }
  .green{
    background-color: green;
  }
  .yellow{
    background-color: #D7D718;
  }
</style>
