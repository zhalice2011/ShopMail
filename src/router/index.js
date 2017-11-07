import Vue from 'vue'
import Router from 'vue-router'
import Core from '@/components/Core'
import Agent from '@/components/Agent'
import List from '@/components/List'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    { //首页
      path: '/',
      name: 'Hello',
      component: Core
    },
    { //agent页
      path: '/agent',
      name: 'agent',
      component: Agent
    } ,
    { //分类
      path: '/list',
      name: 'list',
      component: List
    },
    { //我的
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
