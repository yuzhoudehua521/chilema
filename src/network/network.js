import fetch from '../util/fetch'   //url = '', data = {}, type = 'GET', method = 'fetch'
import {getStore} from '../util/utils'  //获取localStorage

export const cityGuess = () => fetch('/v1/cities', {
    type: 'guess'
})

