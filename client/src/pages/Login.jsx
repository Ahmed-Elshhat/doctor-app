import React, { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm: min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p >Please {state === "Sign Up" ? "sign up" : "login"} to book appointment</p>
        {
          state === "Sign Up" && <div className="w-full">
          <p>Full Name</p>
          <input type="text" onChange={(e) => setName(e.target.name)} value={name} required className="border border-zinc-300 rounded-2xl w-full p-2 mt-1" />
        </div>
        }
        
        <div className="w-full">
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.name)} value={email} required className="border border-zinc-300 rounded-2xl w-full p-2 mt-1" />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.name)} value={password} required className="border border-zinc-300 rounded-2xl w-full p-2 mt-1" />
        </div>
        <button className="bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base">{state === "Sign Up" ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
          ? <p>Already have an account? <span className="text-[#5f6FFF] underline cursor-pointer" onClick={() => setState("Login")}>Login here</span></p>
          : <p>Create an new account? <span className="text-[#5f6FFF] underline cursor-pointer" onClick={() => setState("Sign Up")}>click here</span></p>
        }
      </div>
    </form>
  );
}

export default Login;
