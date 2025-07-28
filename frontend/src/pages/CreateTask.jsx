import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import DashboardLayout from "../layout/DashboardLayout";
import { useTask } from "../hooks/useTasks";

const CreateTask = () => {
    const { createTask, loading, error } = useTask();
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("medium");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        const newTask = await createTask({ title, priority });
        if (newTask) {
            toast.success("Task created successfully!");
            setTitle("");
            setPriority("medium");
            setTimeout(() => navigate("/dashboard"), 1500);
        }
    };

    return (
        <DashboardLayout>
            <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Create New Task</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter task title"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Priority</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            {loading ? "Creating..." : "Create Task"}
                        </button>

                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CreateTask;
