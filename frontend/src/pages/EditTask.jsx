import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { useTask } from "../hooks/useTasks";

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getTaskById, updateTask } = useTask();

    const [formData, setFormData] = useState({
        title: "",
        priority: "medium",
        completed: false,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTask = async () => {
            try {
                setLoading(true);
                const task = await getTaskById(id);
                if (!task) {
                    setError("Task not found.");
                } else {
                    setFormData({
                        title: task.title,
                        priority: task.priority,
                        completed: task.completed,
                    });
                }
            } catch (err) {
                setError("Failed to fetch task.");
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [id, getTaskById]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateTask(id, formData);
            // Optional: Redirect or show toast
            navigate("/dashboard"); // ✅ Redirect to dashboard
        } catch (err) {
            setError("Failed to update task.");
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <p className="text-center text-gray-600">Loading task...</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="max-w-xl mx-auto bg-white border p-6 rounded-xl shadow">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Edit Task</h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-1">Priority:</label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="completed"
                                checked={formData.completed}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Mark as Completed
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
                    >
                        Update Task
                    </button>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default EditTask;
