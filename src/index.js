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
        
            let newWorkout = new Workout(workout, workout.attributes)

            document.querySelector('#workout-container').innerHTML += newWorkout.renderWorkoutCard();
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
   const bodyData = {title, description, location, category_id}
   fetch(endPoint, {
       method: "POST",
       headers: {"Content-type": "application/json"},
       body: JSON.stringify(bodyData)
   }) 
   .then(response => response.json())
   .then(workout => {
        console.log(workout);
        const workoutData = workout.data
    
        let newWorkout = new Workout(workoutData, workoutData.attributes)

        document.querySelector('#workout-container').innerHTML += newWorkout.renderWorkoutCard();


   })
}