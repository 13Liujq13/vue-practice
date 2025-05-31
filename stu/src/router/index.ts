// 路由配置
import { createRouter, createWebHashHistory } from "vue-router";
// 导入对应的组件
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";
import About from "@/components/About.vue";
import Detail from "@/components/Detail.vue";

//创建路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes: [//配置路由规则
        {
            name: "zhuye",
            path: "/home",
            component: Home
        },
        {
            name: "xinwen",
            path:"/news",
            component: News,
            children:[//二级路由
                {
                    path:'detail',
                    component:Detail
                }

            ]
        },
        {
            name: "guanyu",
            path:"/about",
            component: About
        },
        // 重定向默认开始是home页面
        {
            path:'/',
            redirect:'/home'
        }

    ]
})

//导出路由器
export default router;


