import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutUs from '@/pages/about-us/about-us'
import ContactUs from '@/pages/contact-us/contact-us'
// import COVID19Updates from '@/pages/covid-19-updates/covid-19-updates'
import Home from '@/pages/home/home'
import Invisalign from '@/pages/invisalign/invisalign'
import Mattiacio from '@/pages/mattiacio-difference/mattiacio-difference'
import NewPatients from '@/pages/new-patients/new-patients'
import VirtualServices from '@/pages/virtual-services/virtual-services'
import Videos from '@/pages/videos/videos'
import Treatments from '@/pages/treatments/treatments'
import FamilyFunEvent from '@/pages/family-fun-event/family-fun-event'
import ThankYou from '@/pages/thank-you/thank-you'
import Accessibility from '@/pages/accessibility/accessibility'

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
      mobile: false,
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
          label: 'Meet the Doctors',
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
    // {
    //  path: '/covid-19-updates',
    //  name: 'COVID-19 Updates',
    //  navigation: false,
    //  component: COVID19Updates,
    //  url: '/static/covid-19-updates.jpg'
    //  },
    {
      path: '/virtual-services',
      name: 'Virtual Services',
      navigation: false,
      component: VirtualServices,
      url: '/static/virtual-services.jpg'
    },
    {
      path: '/videos',
      name: 'Videos',
      navigation: false,
      component: Videos,
      url: '/static/virtual-services.jpg'
    },
    {
      path: '/new-patients',
      name: 'New Patients',
      navigation: true,
      url: '/static/new-pats.jpg',
      component: NewPatients,
      children: [
        {
          item: 'Virtual Smile Assessment',
          path: 'https://formsroostergrin.com/xmattiacioortho/virtual-page/index.html'
        },
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
        }
        // {
        //   path: '/new-patients',
        //   label: 'Patient Forms',
        //   target: '#forms'
        // }
      ]
    },
    {
      path: '/treatments',
      name: 'Treatments',
      url: '/static/treatments.jpg',
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
      name: 'Mattiacio Difference',
      navigation: true,
      component: Mattiacio,
      url: '/static/matt-diff-bg.jpg',
      children: [
        {
          path: '/mattiacio-difference',
          label: 'What Sets Us Apart',
          target: '#what',
          name: 'Mattiacio Difference'
        },
        // {
        //  path: '/covid-19-updates',
        //  label: 'COVID-19 Safety',
        //  target: '#updates'
        // },
        {
          path: '/videos',
          label: 'Videos',
          target: '#videos'
        }
      ]
    },
    {
      path: '/invisalign',
      name: 'Invisalign',
      navigation: true,
      component: Invisalign,
      url: '/static/invisalign.jpg',
      children: [
        {
          path: '/invisalign',
          label: 'Invisalign Experience',
          target: '#section-0',
          name: 'Invisalign'
        },
        {
          path: '/invisalign',
          label: 'iTero Scanner',
          target: '#section-1'
        },
        // {
        //  path: '/invisalign',
        //  label: 'VPro5',
        //  target: '#section-2'
        // },
        {
          path: '/invisalign',
          label: 'Invisalign Teen',
          target: '#section-2'
        }
      ]
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      url: '/static/contact.jpg',
      component: ContactUs,
      children: [
        {
          path: '/contact-us',
          label: 'Sponsorship Requests',
          target: '#sponsor',
          name: 'Contact Us'
        },
        {
          item: 'Rewards Center',
          path: 'https://mattiacio-orthodontics-farmington-2.patientrewardshub.com/'
        },
        {
          item: 'Patient Login',
          path: 'https://www.anywheredolphin.com/'
        }
      ]
    },
    {
      path: '/mouth-guard-registration',
      name: 'Mouth Guard Registration',
      // navigation: true,
      navigation: false,
      component: FamilyFunEvent
    },
    {
      path: '/thank-you',
      name: 'Thank You',
      navigation: false,
      component: ThankYou
    },
    {
      path: '/accessibility',
      name: 'Accessibility',
      navigation: false,
      component: Accessibility
    },
    {
      path: '/style',
      name: 'Style',
      navigation: false,
      url: '/static/matt-diff-bg.jpg',
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
