const endPoint = "http://localhost:3000/api/v1/workouts"






document.addEventListener('DOMContentLoaded', () => {
    getWorkouts()
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