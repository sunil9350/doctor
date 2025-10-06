import React, { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="shadow-[var(--box-shadow)] border border-[var(--grey5)] p-10 rounded-3xl overflow-hidden">
        <form action="">
          <div>
            <h4 className="text-[var(--grey1)] text-2xl font-semibold mb-1">
              {state === "Sign Up" ? "Create Account" : "Login"}
            </h4>
            <p className="text-[var(--grey1)] text-base mb-4">
              Please {state === "Sign Up" ? "Create Account" : "Login"} to book
              appointment
            </p>

            {state === "Sign Up" && (
              <>
                <p className="text-[var(--grey1)] text-base">Full Name</p>
                <input
                  className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
                  type="text"
                  onChange={(e) => setName(e.target.name)}
                  value={name}
                  required
                />
              </>
            )}

            <p className="text-[var(--grey1)] text-base mt-2">Email</p>
            <input
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              type="email"
              onChange={(e) => setEmail(e.target.name)}
              value={email}
              required
            />
            <p className="text-[var(--grey1)] text-base mt-2">Password</p>
            <input
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              type="password"
              onChange={(e) => setPassword(e.target.name)}
              value={password}
              required
            />
            <button className="bg-[var(--blue1)] text-white text-center w-full p-3 mt-5 rounded cursor-pointer">
              {state === "Sign Up" ? "Create Account" : "Login"}
            </button>
            {state === "Sign Up" ? (
              <p className="mt-2 text-sm text-[var(--grey1)]">
                Already have an account?{" "}
                <span
                  onClick={() => setState("Login")}
                  className="text-[var(--blue1)] cursor-pointer underline"
                >
                  Login here
                </span>
              </p>
            ) : (
              <p className="mt-2 text-sm text-[var(--grey1)]">
                Create an new account?{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="text-[var(--blue1)] cursor-pointer underline"
                >
                  click here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
