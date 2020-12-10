import { http } from './config'

export default {

    listar: () => {
        return http.get('usuario')
    },
    criar: (data) => {
        return http.post('/usuario', data)
    },
    atualizar: (id, data) => {
        return http.post('/usuario/'+ id, data)
    }
}