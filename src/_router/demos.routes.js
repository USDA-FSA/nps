

export const demosRoutes = [
  { 
    path: '/demos',
    component: () => import('@/views/demos/Demos.vue')
  },
  { 
    path: '/help',
    component: () => import('@/views/demos/help/Help.vue')
  },
  { 
    path: '/demos/help/page-level-oao',
    component: () => import('@/views/demos/help/Page-Level-OAO.vue')
  },
  { 
    path: '/demos/help/inline-oao',
    component: () => import('@/views/demos/help/Inline-OAO.vue')
  },
  { 
    path: '/demos/help/page-level-pca',
    component: () => import('@/views/demos/help/Page-Level-PCA.vue')
  },
  { 
    path: '/demos/help/inline-pca',
    component: () => import('@/views/demos/help/Inline-PCA.vue')
  },
  { 
    path: '/demos/help/other-agency-offset',
    component: () => import('@/views/demos/help/Other-Agency-Offset1.vue')
  },
  { 
    path: '/demos/help/other-agency-offset2',
    component: () => import('@/views/demos/help/Other-Agency-Offset2.vue')
  },
  { 
    path: '/demos/help/manual-handling-worklist',
    component: () => import('@/views/demos/help/Manual-Handling-Worklist.vue')
  }
]