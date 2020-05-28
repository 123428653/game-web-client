import router from '@/router'
import { getStorage } from '@/utils/storage'

router.beforeEach((to, from, next) => {
  if (!getStorage('Authorization') && to.path === '/user') { // 判断是否有token
    next('/?go=user')
  } else {
    next()
  }
})
