import Task from "../models/Task.js";

const getTasks = async (req, res) => {
    const { search } = req.query;

    // Base filter: Only return tasks for the logged-in user
    const query = { userId: req.user._id };

    // If search query is present, add a regex filter on the title
    if (search) {
        query.title = { $regex: search, $options: "i" }; // case-insensitive
    }

    try {
        const tasks = await Task.find(query);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Failed to get tasks", error: error.message });
    }
};


const getRecentTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user._id })
            .sort({ updatedAt: -1 }) // Most recently updated first
            .exec();

        res.json(tasks);
    } catch (error) {
        console.error("Error in getRecentTasks:", error.message);
        res.status(500).json({ message: "Failed to fetch recent tasks" });
    }
};





const singleTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findOne({ _id: id, userId: req.user._id });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Failed to get task", error: error.message });
    }
};

const createTask = async (req, res) => {
    const { title, priority = "medium" } = req.body;

    try {
        const task = await Task.create({
            title,
            priority,
            userId: req.user._id,
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Failed to create task", error: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;

    try {
        const updated = await Task.findOneAndUpdate(
            { _id: id, userId: req.user._id },
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: "Failed to update task", error: error.message });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Task.findOneAndDelete({ _id: id, userId: req.user._id });

        if (!deleted) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task", error: error.message });
    }
};

// ✅ Final, single export
export { getTasks, singleTask, getRecentTasks, createTask, updateTask, deleteTask };
