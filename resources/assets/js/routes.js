// Route
import top from './components/Top'
import user from './components/User'
import repo from './components/Repo'
import post from './pages/post'
import about from './pages/about'
import blog from './pages/blog'
import contact from './pages/contact'

export default {
  '/': {
    component: top
  },
  '/new': {
    component: post
  },
  '/posts': {
    component: posts
  },
  '/blog': {
    component: blog
  },
  '/about': {
    component: about
  },
  'contact': {
    component: contact
  },
  '/search/user': {
    component: user
  },
  '/search/repo': {
    component: repo
  }
}