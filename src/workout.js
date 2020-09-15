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

   renderPostForm() {
       return `
        <form id="create-workout-form">
            <h3>Create a Workout</h3>
        
            <input id='input-title' type="text" name="title" value="" placeholder="Enter your workout name..." class="input-text">
            <br><br>
            <textarea id='input-description' name="description" rows="1" cols="40" value="" placeholder="What did you do?"></textarea>
            <br><br>
            <input id='input-location' type="text" name="location" value="" placeholder="Where did you workout?" class="input-text">
            <br><br>
        
            <select id='categories' name="categories">
                <option value="1">walk</option>
                <option value="2">run</option>
                <option value="3">bike</option>
                <option value="4">swim</option>
                <option value="5">hiit</option>
                <option value="6">yoga</option>
                <option value="7">strength</option>
                <option value="8">hike</option>
                <option value="9">dance</option>
                <option value="10">aerobics</option>
                </select>
            <br><br>
        
            <input id= 'create-button' type="submit" name="submit" value="Create New Workout" class="submit">
        </form>
        `;
}

    renderUpdateForm() {
        return `
        <form data-id=${this.id}>
            <input id='input-title' type="text" name="title" value="${this.title}" class="input-text">
            <br><br>
            <textarea id='input-description' name="description" rows="1" cols="40" value="${this.description}"></textarea>
            <br><br>
            <input id='input-location' type="text" name="location" value="${this.location}" class="input-text">
            <br><br>
        
            <select id='categories' name="categories" value="${this.category.name}">
                <option value="1">walk</option>
                <option value="2">run</option>
                <option value="3">bike</option>
                <option value="4">swim</option>
                <option value="5">hiit</option>
                <option value="6">yoga</option>
                <option value="7">strength</option>
                <option value="8">hike</option>
                <option value="9">dance</option>
                <option value="10">aerobics</option>
                </select>
            <br><br>
        
            <input id='edit-button' type="submit" name="submit" value="Edit Workout" class="submit">
        </form>
        `;
    }

    static findById(id) {
        return this.all.find(workout => workout.id === id)
    }

    update({ title, description, location, category }) {
        
        this.title = title
        this.description = description
        this.location = location
        this.category = category
        
    }
}
Workout.all = [];