"use client";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SignIn = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: formState.email,
        password: formState.password,
      });
      if (res?.error) {
        setErrorMessage(res?.error);
        setIsLoading(false);
      }
      if (res?.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setFormState({
        email: "",
        password: "",
      });
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="login-container">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Login</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <div className="form-control">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div className="form-control">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <section className="mt-5">
          <p className="text-gray-900">
            Don&apos;t have an account ?{" "}
            <Link href="/sign-up" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </motion.div>
  );
};

export default SignIn;
