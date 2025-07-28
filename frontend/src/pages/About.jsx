// src/pages/About.jsx
import DashboardLayout from "../layout/DashboardLayout";

export default function About() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto p-6 text-center font-body">
        <h1 className="text-5xl font-heading text-primary mb-6 border-b-4 border-primary inline-block pb-2 transition-all duration-300 hover:scale-105">
          About This App
        </h1>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed transition-opacity duration-300 hover:opacity-90">
          Welcome to your personal Task Manager — a powerful tool built with the MERN stack
          (MongoDB, Express, React, Node.js) to help you stay organized, productive, and in control
          of your daily goals.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed text-base">
          With this application, you can:
        </p>

        <ul className="text-left text-gray-700 list-disc list-inside mb-6 leading-relaxed text-base ml-4">
          <li className="hover:translate-x-1 transition-transform duration-200">Create and manage tasks in real-time</li>
          <li className="hover:translate-x-1 transition-transform duration-200">Assign priority levels (Low, Medium, High)</li>
          <li className="hover:translate-x-1 transition-transform duration-200">Mark tasks as complete or pending</li>
          <li className="hover:translate-x-1 transition-transform duration-200">Filter and search tasks effortlessly</li>
          <li className="hover:translate-x-1 transition-transform duration-200">Get an overview of all your tasks on a clean dashboard</li>
        </ul>

        <p className="text-gray-700 leading-relaxed text-base">
          Whether you're planning your day or managing a project, this dashboard provides the tools
          to streamline your workflow and boost your productivity.
        </p>
      </div>
    </DashboardLayout>
  );
}
