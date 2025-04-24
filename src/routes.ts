import IndexContainer from "@/pages/index/IndexContainer.vue";
import TestContainer from "@/pages/test/TestContainer.vue";

export const routes = [
    {
        name: 'Index',
        path: '/',
        component: IndexContainer
    },
    {
        name: 'Test',
        path: '/test',
        component: TestContainer
    },
]

