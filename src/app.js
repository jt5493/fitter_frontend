class App {
    attachEventListeners() {
      document.querySelector('#workout-container').addEventListener('click', e => {
        const id = e.target.dataset.id;
        const workout = Workout.findById(id);
        document.querySelector('#workout-update').innerHTML = workout.renderUpdateForm();
      });
      document.querySelector('#workout-update').addEventListener('submit', e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        const workout = Workout.findById(id);
        const title = e.target.querySelector('#input-title').value;
        const description = e.target.querySelector('#input-description').value;
        const location = e.target.querySelector('#input-location').value;
        const category_id = parseInt(e.target.querySelector('#categories').value)

        const bodyJSON = { workout, title, description, location, category_id }
        fetch(`http://localhost:3000/api/v1/workouts/${workout.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(bodyJSON),
        })
            .then(res => res.json())
            .then(updatedWorkout => console.log(updatedWorkout));
      })
    }
}