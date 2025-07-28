import { Plus, ListTodo } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useTask } from "../hooks/useTasks";

const Sidebar = () => {
    const { user } = useAuth();
    const { recentTasks, fetchRecentTasks } = useTask();

    useEffect(() => {
        fetchRecentTasks();
    }, []);

    return (
        <aside className="hidden md:flex w-64 h-screen bg-white shadow-md border-b border-b-gray-300 flex-col justify-between">
            {/* Top Section */}
            <div>
                {/* App Title */}
                <div className="px-6 py-[19px] flex items-center gap-2 border-b border-b-gray-200">
                    <ListTodo size={24} className="text-blue-600" />
                    <h1 className="text-xl font-bold text-gray-800">Task Manager</h1>
                </div>

                {/* User Info */}
                <div className="px-6 py-10 border-b border-b-gray-200 bg-white">
                    <p className="text-xl font-semibold text-gray-600 mb-1">👋 Welcome Back,</p>
                    <p className="text-2xl font-bold text-blue-700 drop-shadow-sm">{user.name}</p>
                </div>

                {/* Create Task Button */}
                <div className="px-6 py-4 border-b border-b-gray-200">
                    <Link
                        to="/createTask"
                        className="w-full flex items-center gap-2 justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        <Plus size={16} />
                        Create Task
                    </Link>
                </div>

                {/* Recent Tasks */}
                <div className="px-6 py-4">
                    <h2 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                        Recent Tasks
                    </h2>
                    <ul className="space-y-3 text-sm text-gray-800">
                        {recentTasks.length > 0 ? (
                            recentTasks.map((task, index) => (
                                <li key={task._id} className="border-b border-b-gray-200 pb-2 last:border-none">
                                    <Link
                                        to={`/editTask/${task._id}`}
                                        className="block font-medium hover:text-blue-600 truncate"
                                        title={task.title}
                                    >
                                        {task.title}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500 text-xs">No recent tasks found.</p>
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
