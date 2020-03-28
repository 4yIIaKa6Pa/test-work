import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Films from "./components/pages/Films/Films";
import Starships from "./components/pages/Starships/Starships";
import Peoples from "./components/pages/Peoples/Peoples";
import HomePage from "./components/pages/HomePage/HomePage";

const router = new Router({
    routes: [
        { path: '/films', component: Films },
        { path: '/starships', component: Starships },
        { path: '/Peoples', component: Peoples },
        { path: '/', component: HomePage }
    ]
});

export default router;