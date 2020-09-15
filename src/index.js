const endPoint = "http://localhost:3000/api/v1/workouts"

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();

    app.adapter.fetchWorkouts().then(workouts => {
        workouts.data.forEach(workout => {
            let newWorkout = new Workout(workout, workout.attributes)

            document.querySelector('#workout-container').innerHTML += newWorkout.renderWorkoutCard();
        })
    })

  

    // const createWorkoutForm = document.querySelector("#create-workout-form")
    // createWorkoutForm.addEventListener("submit", (e) => createFormHandler(e))

    const changeColor = document.querySelector('#change-color')
    changeColor.addEventListener('click',  () => changePageColor());
})



function changePageColor() {
    fetch("http://localhost:3000/api/v1/ping").then(() => {
        document.body.style.backgroundColor = "yellow" 
    })
}


// function updateFormHandler(e) {
    
//     e.preventDefault();
//     const id = e.target.dataset.id;
//     const workout = Workout.findById(id);
//     const title = e.target.querySelector('#input-title').value;
//     const description = e.target.querySelector('#input-description').value;
//     const location = e.target.querySelector('#input-location').value;
//     const category_id = e.target.querySelector('#categories').value;
//     patchWorkout(workout, title, description, location, category_id) 
    
// }

// function patchWorkout(workout, title, description, location, category_id) {
//     const bodyJSON = { workout, title, description, location, category_id }
//     fetch(`http://localhost:3000/api/v1/workouts/${workout.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(bodyJSON),
//     })
//       .then(res => res.json())
//       .then(updatedWorkout => console.log(updatedWorkout));
  
// }






// function createFormHandler(e) {
//     e.preventDefault()
//     const titleInput = document.querySelector('#input-title').value
//     const descriptionInput = document.querySelector('#input-description').value
//     const locationInput = document.querySelector('#input-location').value
//     const categoryId = parseInt(document.querySelector('#categories').value)

//     postFetch(titleInput, descriptionInput, locationInput, categoryId)
// }

// function postFetch(title, description, location, category_id) {
//    const bodyData = {title, description, location, category_id}
//    fetch(endPoint, {
//        method: "POST",
//        headers: {"Content-type": "application/json"},
//        body: JSON.stringify(bodyData)
//    }) 
//    .then(response => response.json())
//    .then(workout => {
//         console.log(workout);
//         const workoutData = workout.data
    
//         let newWorkout = new Workout(workoutData, workoutData.attributes)

//         document.querySelector('#workout-container').innerHTML += newWorkout.renderWorkoutCard();


//    })
// }