const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

async function getCountry(country){
    const response = await fetch(`${path}/${country}`, headers)
    return await response.json()
}

const api = {
    getCountry
}


export default api