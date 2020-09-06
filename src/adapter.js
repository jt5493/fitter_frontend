class Adapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1';
    }
    fetchWorkouts() {
        return fetch(`${this.baseUrl}/workouts`).then(response => response.json());
    }

    updateWorkout(id, body) {
        return fetch(`${this.baseUrl}/workouts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
}