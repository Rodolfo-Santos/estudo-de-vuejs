import Vue from "vue"
import Router from "vue-router"
// 
import Home from "./views/_Home/Home.vue"
import Dynamic from "./views/_Dynamic/Dynamic.vue"
import Transition from "./views/_Transition/Transition.vue"
import Slots from "./views/_Slots/Slots.vue"

import Cursos from "./views/_Router/Cursos.vue"
import Curso from "./components/Cursos/Curso.vue"
import CursoAulas from "./components/Cursos/CursoAulas.vue"
import CursoDescricao from "./components/Cursos/CursoDescricao.vue"

import Acoes from "./views/_Router/Acoes.vue"
import AcoesDados from "./components/Acoes/AcoesDados.vue"

import Footer from "./components/NamedRouter/Footer.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: "",

  routes: [{
      path: "/",
      components: {
        default: Home,
        footer: Footer
      }
    },

    {
      path: "*",
      redirect: "/"
    },

    {
      path: "/cursos",
      component: Cursos,
      props: true,
      children: [{
        name: "curso",
        path: ":curso",
        component: Curso,
        props: true,
        children: [{
            name: "aulas",
            path: "aulas",
            component: CursoAulas
          },
          {
            name: "descricao",
            path: "descricao",
            component: CursoDescricao
          }
        ]
      }]
    },

    {
      path: "/dynamic",
      component: Dynamic,
    },

    {
      path: "/transition",
      component: Transition,
    },

    {
      path: "/slots",
      component: Slots,
    },

    {
      path: "/acoes",
      component: Acoes,
      children: [{
        path: ":simbolo",
        component: AcoesDados,
        props: true
      }]
    },
  ],
  scrollBehavior() {
    // return {
    //   x: 0,
    //   y: 0
    // }
    return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
})