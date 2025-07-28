import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { useTask } from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";
import TaskFilters from "../components/TaskFilters";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
    const { tasks, deleteTask, loading } = useTask();
    const navigate = useNavigate();

    const [statusFilter, setStatusFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleEdit = (task) => {
        navigate(`/editTask/${task._id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            deleteTask(id);
        }
    };

    // Filter and Search Logic
    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesStatus =
                statusFilter === "" ||
                task.completed === (statusFilter === "true");

            const matchesPriority =
                priorityFilter === "" ||
                task.priority === priorityFilter;

            const matchesSearch =
                searchQuery === "" ||
                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.description?.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesStatus && matchesPriority && matchesSearch;
        });
    }, [tasks, statusFilter, priorityFilter, searchQuery]);

    return (
        <DashboardLayout>
            <div className="px-4 py-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Your Tasks</h2>

                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                        <SearchBar onSearch={setSearchQuery} />
                        <TaskFilters
                            onStatusChange={setStatusFilter}
                            onPriorityChange={setPriorityFilter}
                        />
                    </div>
                </div>

                {/* Filter Info (optional) */}
                {(statusFilter || priorityFilter || searchQuery) && (
                    <div className="mb-4 text-sm text-gray-600">
                        Filters applied:
                        {statusFilter && <span> Status: {statusFilter} </span>}
                        {priorityFilter && <span> | Priority: {priorityFilter} </span>}
                        {searchQuery && <span> | Search: "{searchQuery}"</span>}
                    </div>
                )}

                {/* Tasks Grid */}
                {loading ? (
                    <p className="text-gray-500">Loading tasks...</p>
                ) : filteredTasks.length === 0 ? (
                    <p className="text-gray-500">
                        No tasks match your filters or search.
                    </p>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {filteredTasks.map((task) => (
                            <TaskCard
                                key={task._id}
                                task={task}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
