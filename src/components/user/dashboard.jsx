import React, { useState, useEffect } from "react";
import {
  Bell,
  PlusCircle,
  Search,
  User,
  MessageCircle,
  Menu,
  X,
  Bot,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate import

// Card component that can optionally be a Link
const Card = ({ children, className, to, onClick, ...props }) => {
  const baseClass = `bg-white rounded-2xl shadow p-4 ${className} transition hover:shadow-lg cursor-pointer`;

  if (to) {
    return (
      <Link to={to} className={baseClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <div className={baseClass} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 w-full ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quote, setQuote] = useState(null);
  const navigate = useNavigate(); // Add this line

  // Fetch Daily Quote
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.error("Error fetching quote:", err));
  }, []);

  // Sample Latest Reports
  const latestReports = [
    {
      name: "John Doe",
      age: 25,
      gender: "Male",
      location: "Addis Ababa",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sara Ali",
      age: 19,
      gender: "Female",
      location: "Dire Dawa",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Michael Smith",
      age: 5,
      gender: "Male",
      location: "Mekelle",
      img: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-83687-35537.jpg&fm=jpg",
    },
  ];

  // Sample Chat Friends
  const chatFriends = [
    { name: "Lina", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "David", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Amir", img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { name: "Maya", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Chris", img: "https://randomuser.me/api/portraits/men/90.jpg" },
  ];

  // Add this function to handle navigation to search page
  const handleSearchPosts = () => {
    navigate("/searchpost"); // This will navigate to the search page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white p-6 transform transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-8 md:block">
          <h2 className="text-2xl font-bold text-blue-600">Afalgugn</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="space-y-4">
          <a
            className="block font-medium text-gray-700 hover:text-blue-600"
            href="#"
          >
            My Reports
          </a>
          <a
            className="block font-medium text-gray-700 hover:text-blue-600"
            href="#"
          >
            Search Reports
          </a>
          <a
            className="block font-medium text-gray-700 hover:text-blue-600"
            href="#"
          >
            Messages
          </a>
          <a
            className="block font-medium text-gray-700 hover:text-blue-600"
            href="#"
          >
            ⚙ Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-0">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-2xl font-semibold text-emerald-800">Welcome Samuel ! </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <User className="w-8 h-8 text-gray-600" />
          </div>
        </header>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card to="/report">
            <PlusCircle className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-medium">Report Missing</p>
          </Card>
          <Card to="/post">
            <PlusCircle className="w-8 h-8 text-fuchsia-600 mb-2" />
            <p className="font-medium">Post Found</p>
          </Card>
          {/* Update this card to use the navigation function */}
          <Card onClick={handleSearchPosts}>
            <Search className="w-8 h-8 text-amber-600 mb-2" />
            <p className="font-medium">Search Post & Reports</p>
          </Card>
         
          <Card >
            <MessageCircle className="w-8 h-8 text-purple-600 mb-2" />
            <p className="font-medium">Messages</p>
          </Card>
          <Card to="/aichat">
            <Bot className="w-8 h-8 text-orange-600 mb-2" />
            <p className="font-medium">AI Chat</p>
          </Card>
        </div>

        {/* Daily Quote */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Daily Quote</h2>
              {quote ? (
                <blockquote className="italic text-gray-700">
                  "{quote.content}"
                  <footer className="mt-2 text-gray-500">— {quote.author}</footer>
                </blockquote>
              ) : (
                <p className="text-gray-500">Loading quote...</p>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Latest Reports */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Latest Reports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestReports.map((report, idx) => (
              <Card key={idx} to={`/reports/${idx}`}>
                <CardContent className="p-4">
                  <img
                    src={report.img}
                    alt="Report"
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold">{report.name}</h3>
                  <p className="text-sm text-gray-600">
                    Age: {report.age} • {report.gender}
                  </p>
                  <p className="text-sm text-gray-500">
                    Last seen: {report.location}
                  </p>
                  <Button className="mt-3">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Chat Friends */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Chat Friends</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {chatFriends.map((friend, idx) => (
              <Card key={idx}>
                <img
                  src={friend.img}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <p className="font-medium">{friend.name}</p>
                <span className="w-3 h-3 bg-green-500 rounded-full mt-1"></span>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;