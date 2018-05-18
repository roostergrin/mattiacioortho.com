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
      children: [
        {
          path: '/about-us',
          label: 'Meet Dr. Mattiacio',
          target: '#meet-dr',
          name: 'About Us'
        },
        {
          path: '/about-us',
          label: 'Meet the Team',
          target: '#meet-team'
        },
        {
          path: '/about-us',
          label: 'Office Tour',
          target: '#office'
        }
      ]
    },
    {
      path: '/new-patients',
      name: 'New Patients',
      navigation: true,
      component: NewPatients,
      url: 'static/new-pats.jpg',
      children: [
        {
          path: '/new-patients',
          label: 'Your First Visit',
          target: '#first',
          name: 'New Patients'
        },
        {
          path: '/new-patients',
          label: 'Financial Info',
          target: '#financial'
        },
        {
          path: '/new-patients',
          label: 'Patient Forms',
          target: '#forms'
        }
      ]
    },
    {
      path: '/treatments',
      name: 'Treatments',
      url: 'static/treatments.jpg',
      navigation: true,
      component: Treatments,
      children: [
        {
          path: '/treatments',
          label: 'Invisalign',
          target: '#invisalign',
          name: 'Treatments'

        },
        {
          path: '/treatments',
          label: 'Damon Braces',
          target: '#damon'
        },
        {
          path: '/treatments',
          label: '7 & Up Child Evaluation',
          target: '#seven-up'
        },
        {
          path: '/treatments',
          label: 'Adult Orthodontics',
          target: '#adults'
        }
      ]
    },
    {
      path: '/mattiacio-difference',
      name: 'Mattacio Difference',
      navigation: false,
      component: Mattacio,
      url: 'static/matt-diff-bg.jpg',
      children: []
    },
    {
      path: '/invisalign',
      name: 'Invisalign',
      navigation: true,
      component: Invisalign,
      url: 'static/invisalign.jpg',
      children: []
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      url: 'static/contact.jpg',
      component: ContactUs
    },
    {
      path: '/style',
      name: 'Style',
      navigation: true,
      url: 'static/matt-diff-bg.jpg',
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
