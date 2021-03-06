import { lazy } from 'react'

export default {

  Temperature: {
    path: '/temperature',
    component: lazy(() => import('../pages/Temperature'))
  },
  Wind: {
    path: '/wind',
    component: lazy(() => import('../pages/Wind'))
  },
  Humidity: {
    path: '/humidity',
    component: lazy(() => import('../pages/Humidity'))
  },
  Light: {
    path: '/light',
    component: lazy(() => import('../pages/Light'))
  }
}
