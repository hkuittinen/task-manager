import type { TaskList } from './types';

const API_URL = import.meta.env.VITE_API_URL as string;

const callApi = async <T>(apiPath: string) => {
    if (!API_URL) {
        throw new Error('API_URL is missing.');
    }

    const result = await fetch(`${API_URL}${apiPath}`);

    if (!result.ok) {
        throw new Error('Result is not ok.');
    }

    return result.json() as Promise<T>;
};

const getTasks = () => callApi<TaskList>('/tasks');

export default {
    getTasks,
};
