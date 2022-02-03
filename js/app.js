async function getData() {
    try {
        const dataJSON = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(dataJSON.status)
        if(!dataJSON.ok) {
            throw 'ooops';
        }
        const data = await dataJSON.json()
        if (data.error) {
            throw data.error
        }
        console.log(data)
    } catch(e) {
        alert(e)
    }
}
try {
    getData()
} catch(e) {
    alert(e)
}
// setInterval(getData,2000)