console.log('script attached')
const URL =  'https://developer.nps.gov/api/v1/parks?stateCode='

function getData(event){
    event.preventDefault()
    console.log("submitted")
    const dataResultDiv = document.querySelector("#dataResult")
    dataResultDiv.innerHTML = "Loading ..."
    const searchResult = document.querySelector("#searchResult").value
    console.log(searchResult)
    fetch(URL+searchResult+'&api_key=mBrr0IDm7roWy9OiTTfGcWfBMyAgf8xXggBJmZgN')
        .then(response => response.json())
        .then(npsData => {
            console.log(npsData)
            dataResultDiv.innerHTML = `
            <h3> ${npsData.total} </h3> 
            `
        })
        .catch(err => console.log(err))
}



{/* <h3> ${npsData.data[0].addresses[0].city} </h3> */}