import { useEffect, useState, useCallback } from "react";
import {
    createTaskService,
    deleteTaskService,
    getTasksService,
    getRecentTasksService,
    getSingleTaskService,
    updateTaskService,
} from "../services/taskService";

export const useTask = () => {
    const [tasks, setTasks] = useState([]);
    const [recentTasks, setRecentTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Get all tasks
    const fetchTasks = async (search = "") => {
        try {
            setLoading(true);
            const data = await getTasksService(search);
            setTasks(data);
            setError(null);
        } catch (err) {
            setError(err.message || "Failed to fetch tasks");
        } finally {
            setLoading(false);
        }
    };


    // Create a new task
    const createTask = async (taskData) => {
        try {
            setLoading(true);
            const newTask = await createTaskService(taskData);
            setTasks((prev) => [newTask, ...prev]);
            return newTask;
        } catch (err) {
            setError(err.message || "Failed to create task");
        } finally {
            setLoading(false);
        }
    };

    // Update a task
    const updateTask = async (id, updatedData) => {
        try {
            setLoading(true);
            const updated = await updateTaskService(id, updatedData);
            setTasks((prev) =>
                prev.map((task) => (task._id === id ? updated : task))
            );
            return updated;
        } catch (err) {
            setError(err.message || "Failed to update task");
        } finally {
            setLoading(false);
        }
    };

    const fetchRecentTasks = async () => {
        try {
            setLoading(true);
            const data = await getRecentTasksService();
            setRecentTasks(data);
            setError(null);
        } catch (err) {
            setError(err.message || "Failed to fetch recent tasks");
        } finally {
            setLoading(false);
        }
    };

    // Delete a task
    const deleteTask = async (id) => {
        try {
            setLoading(true);
            await deleteTaskService(id);
            setTasks((prev) => prev.filter((task) => task._id !== id));
        } catch (err) {
            setError(err.message || "Failed to delete task");
        } finally {
            setLoading(false);
        }
    };

    // Get a single task (optional usage)
    const getTaskById = useCallback(async (id) => {
        try {
            const data = await getSingleTaskService(id);
            return data;
        } catch (err) {
            setError(err.message || "Failed to get task");
        }
    }, []); // ✅ empty deps → stable reference

    // Optionally auto-fetch tasks on hook load
    useEffect(() => {
        fetchTasks();
    }, []);

    return {
        tasks,
        recentTasks,
        loading,
        error,
        fetchRecentTasks,
        fetchTasks,
        createTask,
        updateTask,
        deleteTask,
        getTaskById,
    };
};
