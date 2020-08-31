const endPoint = "http://localhost:3000/api/v1/workouts"






document.addEventListener('DOMContentLoaded', () => {
    getWorkouts()

    const createWorkoutForm = document.querySelector("#create-workout-form")

    createWorkoutForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getWorkouts(){
    fetch(endPoint)
    .then(response => response.json())
    .then(workouts => {
        workouts.data.forEach(workout => {
            const workoutData = `
            <div data-id=${workout.id}>
                <h2> ${workout.attributes.title}</h2>
                <h3> ${workout.attributes.location}</h3>
                <h3> ${workout.attributes.category.name}</h3>
                <p>${workout.attributes.description}</p>
                <button data-id=${workout.id}> Edit</button>
            </div>
            <br><br>`;

            document.querySelector('#workout-container').innerHTML+= workoutData
        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const locationInput = document.querySelector('#input-location').value
    const categoryId = parseInt(document.querySelector('#categories').value)

    postFetch(titleInput, descriptionInput, locationInput, categoryId)
}

function postFetch(title, description, location, category_id) {
    
}