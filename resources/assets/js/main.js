import './filters.js'
import routes from './routes.js'
import App from './App.vue'

// Scss
import '../stylesheets/bulma.scss'
import '../stylesheets/app.scss'
require('bootstrap/dist/css/bootstrap.css')

// Vue Resource
Vue.use(VueResource)

// Vue Routing
Vue.use(VueRouter)
let router = new VueRouter()
router.map(routes)

router.start(Vue.extend(App), '#app')
