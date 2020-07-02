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

Vue.use(Router)

export default new Router({
  mode: "history",
  base: "",

  routes: [{
      path: "/",
      component: Home
    },

    {
      path: "/cursos",
      component: Cursos,
      props: true,
      beforeEnter: (to, from, next) => {
        console.log("Foi para cursos")
        next()
      },

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

  ]
})