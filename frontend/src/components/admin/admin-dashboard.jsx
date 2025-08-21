import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, FileText, AlertCircle, MapPin, MessageCircle, Home, Menu, X } from "lucide-react";
const Dashboard = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const metrics = [
    { title: "Total Users", value: 120, icon: <Users className="w-6 h-6 text-black" />, bg: "bg-green-300" },
    { title: "Reports Submitted", value: 75, icon: <FileText className="w-6 h-6 text-white" />, bg: "bg-red-200" },
    { title: "Abuse Reports", value: 5, icon: <AlertCircle className="w-6 h-6 text-white" />, bg: "bg-yellow-200" },
    { title: "Live Locations Shared", value: 12, icon: <MapPin className="w-6 h-6 text-white" />, bg: "bg-gray-200" },
    { title: "Active Chats", value: 34, icon: <MessageCircle className="w-6 h-6 text-white" />, bg: "bg-gray-400" },
  ];
  const actions = [
    { title: "Approve Reports", bg: "bg-gray-600" },
    { title: "Ban User", bg: "bg-gray-500" },
    { title: "View Analytics", bg: "bg-gray-600" },
    { title: "System Settings", bg: "bg-gray-500" },
  ];
  const navItems = [
    { title: "Dashboard", path: "/admin/dashboard", icon: <Home className="w-5 h-5" /> },
    { title: "Users", path: "/admin/users", icon: <Users className="w-5 h-5" /> },
    { title: "Posts", path: "/admin/posts", icon: <FileText className="w-5 h-5" /> },
    { title: "Reports", path: "/admin/reports", icon: <AlertCircle className="w-5 h-5" /> },
  ];
  return (
    <div className="flex min-h-screen">
      <div className={`fixed inset-y-0 left-0 bg-white shadow-lg z-30 transform transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 w-64`}>
        <div className="p-6 font-bold text-xl border-b border-gray-200 flex justify-between items-center">
          Admin Panel
          <button className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center p-3 rounded hover:bg-gray-800 hover:text-white transition-colors ${
                location.pathname === item.path ? "bg-gray-800 text-white" : "text-gray-700"
              }`}
              onClick={() => setSidebarOpen(false)} 
            >
              <div className="mr-3">{item.icon}</div>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      {!sidebarOpen &&
      <button
        className="fixed top-4 left-4 z-40 lg:hidden bg-gray-800 text-white p-2 rounded-md shadow"
        onClick={() => setSidebarOpen(true)}
      >
      <Menu className="w-6 h-6  " />
      </button>      }
      <main className="flex-1 p-6 lg:ml-64 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Welcome Admin</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric) => (
            <div key={metric.title} className={`flex items-center p-6 rounded-2xl shadow  ${metric.bg}`}>
              <div className="p-3 rounded-full bg-white/20 mr-4">{metric.icon}</div>
              <div>
                <p className="text-lg font-semibold">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actions.map((action) => (
              <button
                key={action.title}
                className={`${action.bg} text-white p-4 rounded-2xl shadow font-semibold hover:scale-105 transition-transform`}
              >
                {action.title}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl shadow">
              <p className="font-semibold">Pending Reports</p>
              <p className="text-2xl font-bold text-gray-800">7</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow">
              <p className="font-semibold">Reports Matched</p>
              <p className="text-2xl font-bold text-gray-800">23</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow">
              <p className="font-semibold">Reports Flagged as Suspicious</p>
              <p className="text-2xl font-bold text-gray-800">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">John Doe</p>
                <p className="text-gray-500 text-sm">Submitted a missing person report</p>
              </div>
              <p className="text-gray-400 text-sm">2 hours ago</p>
            </li>
            <li className="py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">Jane Smith</p>
                <p className="text-gray-500 text-sm">Approved a report</p>
              </div>
              <p className="text-gray-400 text-sm">4 hours ago</p>
            </li>
            <li className="py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">Samuel Tesfaye</p>
                <p className="text-gray-500 text-sm">Banned a user</p>
              </div>
              <p className="text-gray-400 text-sm">6 hours ago</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
