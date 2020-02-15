import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Films from '@/views/films'
import Nowplaying from '@/views/films/nowplaying'
import Comingsoon from '@/views/films/comingsoon'
import Detail from '@/views/filmsdetail'
import Course from '@/views/Course'
import Problem from '@/views/Problem'
import Person from '@/views/person'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/films',
      component: Films,
      children: [
        {
          path: "/films/nowplaying",
          name: 'Nowplaying',
          component: Nowplaying
        },
        {
          path: "/films/comingsoon",
          name: 'Comingsoon',
          component: Comingsoon
        },
       
        {
          path: "",
          redirect: '/films/nowplaying'
        }
      ]

    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/films/:myid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/problem',
      name: 'Problem',
      component: Problem
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },

    {
      path: '/',
      redirect: '/films'
    }
  ]
})
