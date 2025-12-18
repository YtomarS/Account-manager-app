import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored
      ? JSON.parse(stored)
      : {
          name: "",
          email: "",
          password: "",
          joinedOn: "",
        };
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-linear-to-br 
      from-[#E9D5FF] via-[#FBCFE8] to-[#BFDBFE] px-4 py-10"
    >
      {/* Header */}
      <div
        className="max-w-5xl mx-auto flex flex-col sm:flex-row 
        justify-between items-center gap-4 mb-10"
      >
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome, <span className="text-purple-500">{user.name}</span>
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => setIsEditOpen(true)}
            className="px-6 py-2 rounded-xl font-medium text-white
            bg-linear-to-r from-indigo-400 to-purple-400
            hover:from-indigo-500 hover:to-purple-500 transition shadow-md"
          >
            Update Details
          </button>

          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-xl font-medium text-white
            bg-linear-to-r from-pink-400 to-rose-400
            hover:from-pink-500 hover:to-rose-500 transition shadow-md"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div
          className="backdrop-blur-xl bg-white/40 border border-white/50 
        rounded-3xl p-6 shadow-lg text-center"
        >
          <div
            className="w-24 h-24 mx-auto rounded-full bg-linear-to-br 
            from-pink-300 to-purple-300 flex items-center justify-center 
            text-3xl font-semibold text-white shadow-md"
          >
            {user.name.charAt(0)?.toUpperCase()}
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
        </div>

        {/* Details */}
        <div
          className="md:col-span-2 backdrop-blur-xl bg-white/40 
        border border-white/50 rounded-3xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            User Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{user.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Password</p>
              <p className="font-medium">{user.password}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Joined On</p>
              <p className="font-medium">{user.joinedOn}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <form
          onSubmit={handleSubmit}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm 
          flex items-center justify-center px-4 z-50"
        >
          <div
            className="w-full max-w-md bg-white/80 backdrop-blur-xl 
            rounded-3xl p-6 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Update Profile 
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-white/70 
                  border border-gray-300 focus:outline-none
                  focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-white/70 
                  border border-gray-300 focus:outline-none
                  focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-white/70 
                  border border-gray-300 focus:outline-none
                  focus:ring-2 focus:ring-purple-300"
                />
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-white font-medium
                bg-linear-to-r from-pink-400 to-purple-400
                hover:from-pink-500 hover:to-purple-500 transition shadow"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
