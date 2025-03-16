import crypto from 'crypto';
import utils from './utils.ts';

type TaskType = 'rectangle' | 'circle' | 'polygon';

type Task = {
    id: string;
    name: string;
    type: TaskType;
};

type TaskList = {
    name: string;
    tasks: Task[];
};

const taskTypes: TaskType[] = ['rectangle', 'circle', 'polygon'];

const generateTask = (index: number): Task => {
    return {
        id: crypto.randomUUID(),
        name: `Task ${index + 1}`,
        type: taskTypes[utils.getRandomInt(0, taskTypes.length - 1)],
    };
};

const getRandomTasks = (): Task[] => {
    const numberOfTasks = utils.getRandomInt(1, 10);
    return Array.from({ length: numberOfTasks }, (_, i) => generateTask(i));
};

const getTaskList = (): TaskList => {
    return {
        name: 'Sample Task List',
        tasks: getRandomTasks(),
    };
};

export default {
    getTaskList,
};
