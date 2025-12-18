import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:"",
    joinedOn:new Date().toLocaleDateString()
  });
    
  const handleChange = (e) => {
    const {name, value}=e.target;
   setUserData({ ...userData, [name]:value.trim()});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!userData.name || !userData.email || !userData.password  || !userData.confirmPassword) {
      alert("All fields are required");
      return;
      }

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // save to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    // redirect to login page for login 
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-fuchsia-600 via-purple-600 to-indigo-600 px-4">
      
      {/* Glass Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl shadow-2xl p-8">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white"> 
            Create Account 
          </h2>
          <p className="text-white/70 mt-2">
            Join us and start building amazing things
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}
         className="space-y-5">
          
          {/* Full Name */}
          <div>
            <label className="block text-white/80 text-sm mb-1"> 
              Full Name
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter your name " 
                className="w-full px-4 py-3 pl-11 rounded-lg bg-white/20 text-white placeholder-white/60 
                focus:outline-none focus:ring-2 focus:ring-white/70 transition"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-white/80 text-sm mb-1">
              Email Address
            </label>
            <div className="relative"> 
              <input
                type="email"
                onChange={handleChange}
                placeholder="Enter your email "
                name="email"
                className="w-full px-4 py-3 pl-11 rounded-lg bg-white/20 text-white placeholder-white/60 
                focus:outline-none focus:ring-2 focus:ring-white/70 transition"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-white/80 text-sm mb-1">
              Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                type="text"
                name="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 pl-11 rounded-lg bg-white/20 text-white placeholder-white/60 
                focus:outline-none focus:ring-2 focus:ring-white/70 transition"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-white/80 text-sm mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="text" 
                onChange={handleChange}
                placeholder="Confirm password"
                name="confirmPassword"
                className="w-full px-4 py-3 pl-11 rounded-lg bg-white/20 text-white placeholder-white/60 
                focus:outline-none focus:ring-2 focus:ring-white/70 transition"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
          
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-purple-600 bg-white
            hover:bg-purple-100 transition transform hover:-translate-y-0.5 shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-white/70 text-sm mt-6">
          Already have an account?{" "}
          <span className="text-white font-semibold cursor-pointer hover:underline">
            <NavLink to="/"> Sign in</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
}