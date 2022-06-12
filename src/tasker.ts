export interface Task {
    id: string,
    description: string,
    completed: boolean,
}

export interface GetAllTasksRB {
    tasks: Task[],
}
