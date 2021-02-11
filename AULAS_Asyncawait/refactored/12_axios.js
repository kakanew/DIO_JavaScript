const axios = require('axios')

class MinhaClasse {
    async meuMetodo () {
        const result = await axios.get('/').then(Response => Response.data)
        return result
    }
}