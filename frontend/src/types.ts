export type TaskType = 'rectangle' | 'circle' | 'polygon';

export type Task = {
    id: string;
    name: string;
    type: TaskType;
};

export type TaskList = {
    name: string;
    tasks: Task[];
};
