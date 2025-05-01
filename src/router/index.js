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
import VirtualConsultation from '@/pages/virtual-consultation/virtual-consultation'
import Videos from '@/pages/videos/videos'
import SevenAndUp from '@/pages/7-and-up/7-and-up'
import Treatments from '@/pages/treatments/treatments'
import FamilyFunEvent from '@/pages/family-fun-event/family-fun-event'
import ThankYou from '@/pages/thank-you/thank-you'
import MouthGuardThankYou from '@/pages/mouth-guard-thank-you/mouth-guard-thank-you'
import Feedback from '@/pages/feedback/feedback'
import exitInterview from '@/pages/exit-interview/exit-interview'
import smileAssuranceProgram from '@/pages/smile-assurance-program/smile-assurance-program'
import retainerProgram from '@/pages/retainer-program/retainer-program'
import Accessibility from '@/pages/accessibility/accessibility'
import Review from '@/pages/review/review'
import adminLinks from '@/pages/admin-links/admin-links'

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
      path: '/virtual-consultation',
      name: 'Virtual Smile Assessment',
      navigation: false,
      component: VirtualConsultation,
      url: '/static/new-pats.jpg'
    },
    {
      path: '/7-and-up',
      name: '7 & Up',
      navigation: false,
      component: SevenAndUp,
      url: '/static/new-pats.jpg'
    },
    {
      path: '/new-patients',
      name: 'New Patients',
      navigation: true,
      url: '/static/new-pats.jpg',
      component: NewPatients,
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
          path: '/virtual-consultation',
          label: 'Virtual Smile Assessment',
          target: '#virtualconsultation'
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
          path: '/7-and-up',
          label: '7 & Up',
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
      url: '/static/matt-diff-bg1.jpg',
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
      path: '/admin-links',
      name: 'Admin Links',
      navigation: false,
      component: adminLinks,
      meta: {
        auth: true
      }
    },
    {
      path: '/exit-interview',
      name: 'Exit Interview',
      navigation: false,
      component: exitInterview,
      meta: {
        auth: true
      }
    },
    {
      path: '/smile-assurance-program',
      name: 'Smile Assurance Program',
      navigation: false,
      component: smileAssuranceProgram,
      meta: {
        auth: true
      }
    },
    {
      path: '/retainer-program',
      name: 'Retainer Program',
      navigation: false,
      component: retainerProgram
    },
    {
      path: '/mouth-guard-thank-you',
      name: 'Mouth Guard Thank You',
      navigation: false,
      component: MouthGuardThankYou
    },
    {
      path: '/feedback',
      name: 'Feedback',
      navigation: false,
      component: Feedback
    },
    {
      path: '/accessibility',
      name: 'Accessibility',
      navigation: false,
      component: Accessibility
    },
    {
      path: '/review',
      name: 'Review',
      navigation: false,
      component: Review,
      meta: {
        auth: true
      }
    },
    {
      path: '/style',
      name: 'Style',
      navigation: false,
      url: '/static/matt-diff-bg1.jpg',
      component: Style
    },
    {
      path: '/*',
      navigation: false,
      component: Home
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) {
//     var person = prompt('Please enter password')
//     if (person === 'bWF0dGlhY2lvb3J0aG9zY2Fu') {
//       next()
//     } else if (person === null || person === '') {
//       next('/')
//       alert('Password field is blank')
//     } else {
//       next('/')
//       alert('Wrong Password')
//     }
//   } else {
//     next()
//   }
// })

export default router
