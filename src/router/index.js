import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import tagList from 'components/tagList'
import simpleTab from 'components/simpleTab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/tagList',
      name: 'tagList',
      component: tagList
    }, {
      path: '/simpleTab',
      name: 'simpleTab',
      component: simpleTab
    }
  ]
})
