import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutUs from '@/pages/about-us/about-us'
import ContactUs from '@/pages/contact-us/contact-us'
import Home from '@/pages/home/home'
import Invisalign from '@/pages/invisalign/invisalign'
import Mattacio from '@/pages/mattiacio-difference/mattiacio-difference'
import NewPatients from '@/pages/new-patients/new-patients'
import Treatments from '@/pages/treatments/treatments'

// remove
import Style from '@/pages/style-guide/style-guide'

Vue.use(VueRouter)

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return { x: 0, y: 0 }
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
      position.offset = { x: 0, y: 100 }
      return position
    } else {
      position.x = 0
      position.y = 0
      return position
    }
  }
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: false,
      mobile: true,
      component: Home
    },
    {
      path: '/about-us',
      name: 'About Us',
      navigation: true,
      component: AboutUs,
      children: []
    },
    {
      path: '/new-patients',
      name: 'New Patients',
      navigation: true,
      component: NewPatients,
      children: []
    },
    {
      path: '/treatments',
      name: 'Treatments',
      url: 'static/treatments.jpg',
      navigation: true,
      component: Treatments,
      children: [
        {
          path: '/treatments#invisalign',
          label: 'Invisalign'
        },
        {
          path: '/treatments#damon',
          label: 'Damon Braces'
        },
        {
          path: '/treatments#7up',
          label: '7 & Up Child Evaluation'
        },
        {
          path: '/treatments#adults',
          label: 'Adult Orthodontics'
        }
      ]
    },
    {
      path: '/mattiacio-difference',
      name: 'Mattacio Difference',
      navigation: false,
      component: Mattacio,
      children: []
    },
    {
      path: '/invisalign',
      name: 'Invisalign',
      navigation: true,
      component: Invisalign,
      children: []
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      component: ContactUs
    },
    {
      path: '/style',
      name: 'Style',
      navigation: true,
      component: Style
    },
    {
      path: '/*',
      navigation: false,
      component: Home
    }
  ]
})

export default router
