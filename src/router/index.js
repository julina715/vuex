import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', redirect: '/home' },  // 根目录重定向 home
		{
			path: '/home',
			name: 'home',
			redirect: '/home/page1',   //  home 重定向 page1
			component: Home,
			children: [
				{
					path: 'page1',   // home 子级路由
					name: 'page1',
					component: page1,
				},
				{
					path: 'page2',
					name: 'page2',
					component: page2,
				},
				{
					path: 'page3',
					name: 'page3',
					component: page3,
				},
			]
		},
		{
			path: '/help',
			name: 'help',
			component: page3,
		}
		
	],
	mode: 'history',  //  路由带有 /*/ 需要去掉
})
