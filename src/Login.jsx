import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
        email: "",
        password: "",
  })

  const handleChange = (e) => {
   setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const {email, password} = user;

    // redirected to dashboard page 
    if(email==userData.email && password==userData.password){
        navigate('/dashboard');
    }else{
      alert("Wrong Email or Password !");
    }
  }   

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      {/* Glass Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Welcome Back </h2>
          <p className="text-white/70 mt-2">Login to continue your journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
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
            <label className="block text-white/80 text-sm mb-1">Password</label>
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

         {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-indigo-600 bg-white
            hover:bg-indigo-100 transition transform hover:-translate-y-0.5 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow h-px bg-white/30" />
          <span className="px-3 text-white/60 text-sm">OR</span>
          <div className="grow h-px bg-white/30" />
        </div>

        {/* Footer */}
        <p className="text-center text-white/70 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-white font-semibold cursor-pointer hover:underline">
                <NavLink to="/signup"> Sign up</NavLink> 
          </span>
        </p>
      </div>
    </div>
  );
}
