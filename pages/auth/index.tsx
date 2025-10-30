import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";

const validEmail = "user@email.com";
const validPassword = "password";

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
    <div
      style={{
        marginTop: 24,
      }}
    >
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            className="border-white border"
            type="email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            className="border-white border"
            type="password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthPage;
