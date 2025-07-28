import { useState } from "react";

const TaskFilters = ({
  onStatusChange = () => { },
  onPriorityChange = () => { },
}) => {
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatus(value);
    onStatusChange(value);
  };

  const handlePriorityChange = (e) => {
    const value = e.target.value;
    setPriority(value);
    onPriorityChange(value);
  };

  return (
    <div className="flex gap-6 items-center px-4 py-2">
      {/* Status Filter */}
      <select
        value={status}
        onChange={handleStatusChange}
        className="bg-transparent rounded-md px-3 py-2 text-sm text-gray-400 outline-none transition"
      >
        <option value="">All Status</option>
        <option value="true">Completed</option>
        <option value="false">Pending</option>
      </select>

      {/* Priority Filter */}
      <select
        value={priority}
        onChange={handlePriorityChange}
        className="bg-transparent rounded-md px-3 py-2 text-sm text-gray-400 outline-none transition"
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default TaskFilters;
