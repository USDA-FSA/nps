
export const demosRoutes = [
  { 
    path: '/demos',
    name: 'Demos',
    component: () => import('@/views/demos/Demos.vue')
  },
  { 
    path: '/demos/help/page-level',
    name: 'Help - Page Level',
    component: () => import('@/views/demos/help/Page-Level.vue')
  },
  { 
    path: '/demos/help/inline',
    name: 'Help - Inline',
    component: () => import('@/views/demos/help/Inline.vue')
  },
  { 
    path: '/help',
    name: 'help',
    component: () => import('@/views/demos/help/Help.vue')
  },
]