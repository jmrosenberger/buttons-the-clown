import { getRequests, deleteRequest } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})




// In the following code, you will need to define the function that will be passed to the map() method.



// The function you write will convert each service request object into HTML representations. 
// Since it is wrapped with a <ul> element, make each one an <li> element showing only the description of the request to start.


const convertRequestToListElement = (request) => {
    return ` 
        <li class="request__list">&#128736; 	
        &#128119;
            ${request.description}
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
        </li>
    `
}


// For example, if you write a function named convertRequestToListElement, 
// then you would update the code below to requests.map(convertRequestToListElement).







export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul class="request__container">
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}








