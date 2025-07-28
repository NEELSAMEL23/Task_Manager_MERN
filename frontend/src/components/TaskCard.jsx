import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const priorityColors = {
    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
};

const TaskCard = ({ task, onDelete }) => {
    return (
        <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 space-y-2 hover:shadow-md transition">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>

            {/* Status + Priority */}
            <div className="flex items-center justify-between text-sm">
                <span
                    className={`px-2 py-0.5 rounded-full font-medium ${task.completed
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-600"
                        }`}
                >
                    {task.completed ? "Completed" : "Incomplete"}
                </span>

                <span
                    className={`px-2 py-0.5 rounded-full font-medium capitalize ${priorityColors[task.priority] || "bg-gray-100 text-gray-700"
                        }`}
                >
                    {task.priority}
                </span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-2">
                <Link
                    to={`/editTask/${task._id}`}
                    className="text-blue-600 hover:text-blue-800 transition"
                    title="Edit Task"
                >
                    <Pencil size={18} />
                </Link>
                <button
                    onClick={() => onDelete(task._id)}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Delete Task"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
