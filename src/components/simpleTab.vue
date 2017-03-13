<template>
    <div>
        <div @click="changeTabs">
            <span v-for="(value, key) in beforeTabs" class="pre_tag" :class="{active: key==activeName}" :name="key">{{value}}</span>
        </div>
        <div v-for="(item, index) in currentTab" class="beforeClass" :tagClass="item.tagName">
            <div><label>标题:</label><input class="first" v-model="item.title"></input></div>
            <div><label>链接:</label><input class="second" v-model="item.url"></input><el-button type="text">上传链接</el-button></div>
        </div>
        <button @click="addTab">添加{{ beforeTabs[activeName] }}</button>
    </div>
   
</template>

<script>
    export default {
      name: 'simpleTab',
      data () {
        return {
          beforeClass: {
            'preread': [],
            'homework': [],
            'think': []
          },
          beforeTabs: {
            'preread': '预读',
            'homework': '作业',
            'think':'思考'
          },
          activeName:'preread'
        }
      },
      computed: {
        currentTab: function () {
          return this.beforeClass[this.activeName]
        }
      },
      methods: {
        changeTabs(e) {
          this.activeName = e.target.getAttribute('name');
          console.log(this.activeName);
        },
        addTab(){
          this.beforeClass[this.activeName].push({title:'', url:'', tag: this.activeName});
          console.log(this.beforeClass);
        }
      }
    }
</script>

<style lang="less">
    .beforeClass {
        input {
          margin-left: 30px;
          &.first {
            width: 350px;
          }
          &.second {
            width: 300px;
          }
        }
    }
    .pre_tag {
        display: inline-block;
        width: 78px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #c8ccd0;
        color: #fff;
        margin-right: 20px; 
        cursor: pointer;
        &.active {
          background-color: #fc7940;
        }
    }
</style>