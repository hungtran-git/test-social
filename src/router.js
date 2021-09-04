import Vue from "vue";
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home },
  { path: '/Contact', component: Contact }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router;