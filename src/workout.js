class Workout {
    constructor(workout, workoutAttributes){
        this.id = workout.id;
        this.title = workoutAttributes.title
        this.description = workoutAttributes.description
        this.location = workoutAttributes.location
        this.category = workoutAttributes.category
        Workout.all.push(this)
    }

    renderWorkoutCard(){
        
        return `
                <div data-id=${this.id}>
                    <h2> ${this.title}</h2>
                    <h3> ${this.location}</h3>
                    <h3> ${this.category.name}</h3>
                    <p>${this.description}</p>
                    <button data-id=${this.id}> Edit</button>
                </div>
                <br><br>`;
    
    }

}
Workout.all = [];