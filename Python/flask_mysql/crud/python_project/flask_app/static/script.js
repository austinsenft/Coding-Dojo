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
            <h3>There are ${npsData.total} National Parks in this State</h3> 
            `
            for(let elem of npsData.data){
                console.log(elem)
                dataResultDiv.innerHTML += `<li><a href='/parks/${elem.id}'class="link-primary">${elem.fullName}</a></li>`
            }
        })
        .catch(err => console.log(err))
}



