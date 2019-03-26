import Home from './components/routerExercise/Home.vue'
import User from './components/routerExercise/user/User.vue'
import  UserDetail  from "./components/routerExercise/user/UserDetail.vue"
import  UserEdit  from "./components/routerExercise/user/UserEdit.vue"
import  UserStart  from "./components/routerExercise/user/UserStart.vue"

export const routes = [
    { path: '', component: Home},
    { path: '/user', component: User, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail}, //ruta dinamica
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}//ruta dinamica
    ]} 
]