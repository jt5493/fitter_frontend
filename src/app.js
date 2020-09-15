class App {
    constructor(){
        this.adapter = new Adapter();
    }
    attachEventListeners() {
      document.querySelector('#workout-container').addEventListener('click', e => {
        const id = e.target.dataset.id;
        const workout = Workout.findById(id);
        document.querySelector('#workout-update').innerHTML = workout.renderUpdateForm();
      });

      document.querySelector("#create-workout-form").addEventListener("submit", e => {
        e.preventDefault()
        const title = document.querySelector('#input-title').value
        const description = document.querySelector('#input-description').value
        const location = document.querySelector('#input-location').value
        const category_id = parseInt(document.querySelector('#categories').value)

        const bodyJSON = { title, description, location, category_id }
        this.adapter.postWorkout(bodyJSON).then(workout => {
          const newWorkout = new Workout(workout, workout.data.attributes)
          document.querySelector('#workout-container').innerHTML += newWorkout.renderWorkoutCard();
        })
      });

      document.querySelector('#workout-update').addEventListener('submit', e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        const workout = Workout.findById(id);
        const title = e.target.querySelector('#input-title').value;
        const description = e.target.querySelector('#input-description').value;
        const location = e.target.querySelector('#input-location').value;
        const category_id = parseInt(e.target.querySelector('#categories').value)
        const category = workout.category

        const bodyJSON = { title, description, location, category_id }
        
        this.adapter.updateWorkout(workout.id, bodyJSON).then(updatedWorkout => {
          
          const workout = Workout.findById(updatedWorkout.data.id)
          
          workout.update(updatedWorkout.data.attributes)
          
           Workout.all.forEach(
            workout => (document.querySelector('#workout-container').innerHTML += workout.renderWorkoutCard())
           )
        })
      })
    }
}