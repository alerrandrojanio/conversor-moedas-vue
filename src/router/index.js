import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/variacao",
    name: "Variacao",
    component: () => import("../components/Variacao.vue")
  },{
    path: "/conversor",
    name: "Conversor",
    component: () => import("../components/Conversor.vue")
  },
  { path: "/:pathMatch(.*)*", 
    name: "not-found", 
    component: () => import("../components/NotFound.vue") 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
