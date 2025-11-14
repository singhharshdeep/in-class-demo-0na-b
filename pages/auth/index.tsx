import { AuthContext } from "@/context/AuthContext";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";

const AuthPage = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string | null>>({
    email: null,
    password: null,
  });

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (errors.email || errors.password) {
      alert("Invalid Email/Password");
    }
    login(email, password);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target?.value;
    if (!newValue.includes("@")) {
      setErrors({
        ...errors,
        email: "Invalid Email",
      });
    } else {
      setErrors({
        ...errors,
        email: null,
      });
    }

    setEmail(newValue);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target?.value;
    if (newValue.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be atlease 6 characters",
      });
    } else {
      setErrors({
        ...errors,
        password: null,
      });
    }

    setPassword(newValue);
  }

  return (
    <div className="flex justify-center mt-12">
      <form className="border border-white p-6 rounded-2xl" onSubmit={handleLogin}>
        <div>
          <div className="text-xl">Email</div>
          <input
            value={email}
            onChange={handleEmailChange}
            className="border-white border w-96 rounded-2xl p-2"
            type="email"
          />
          {errors.email && <p className="text-red-300">{errors.email}</p>}
        </div>
        <div>
          <div className="text-xl mt-4">Password</div>
          <input
            value={password}
            onChange={handlePasswordChange}
            className="border-white border w-96 rounded-2xl p-2"
            type="password"
          />
          {errors.password && <p className="text-red-300">{errors.password}</p>}
        </div>
        <button className="mt-6 border border-white p-2 rounded-2xl hover:bg-gray-300 hover:text-gray-800" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthPage;
