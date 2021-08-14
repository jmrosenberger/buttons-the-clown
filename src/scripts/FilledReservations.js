import { sendReservation } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userTotalChildren = document.querySelector("input[name='totalChildren']").value
        const userAddress = document.querySelector("input[name='location']").value
        const userDate = document.querySelector("input[name='date']").value
        const userLengthOfTime = document.querySelector("input[name='lengthOfTime']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            totalChildren: userTotalChildren,
            location: userAddress,
            neededBy: userDate,
            lengthOfTime: userLengthOfTime
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})





export const FilledReservations = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Name of Parent</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Name of Child</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="totalChildren">Total Number of Children</label>
            <input type="number" name="totalChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="location">Address of Event</label>
            <input type="text" name="location" class="input" />
        </div>
        <div class="field">
            <label class="label" for="date">Date of Event</label>
            <input type="date" name="date" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfTime">Length of Event (in hours)</label>
            <input type="number" name="lengthOfTime" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}


