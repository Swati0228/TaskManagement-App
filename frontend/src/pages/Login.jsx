import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { setCredentials } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

// Base URL for API
const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

// Async function to send the login request
const loginUser = async (userData) => {
  const { data } = await axios.post(`${baseURL}/api/v1/user/login`, userData);
  return data;
};

// Zod schema for login validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password should be at least 8 characters"),
});

function Login() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Setup react-hook-form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  // React Query mutation to handle login
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Dispatch the user credentials to Redux store on successful login
      dispatch(setCredentials(data));
      queryClient.setQueryData(["user"], data);
      toast.success("Login successful");
      navigate("/"); // Redirect to home after successful login
    },
    onError: (error) => {
      // Show error message if login fails
      toast.error(error.response?.data?.message || "An error occurred during login");
    },
  });

  // Login function to trigger the mutation
  const login = (data) => {
    mutation.mutate(data);
  };

  // Rendering the Login Form
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-lg rounded-xl p-10 bg-white shadow-lg">
        <h2 className="text-2xl font-bold m-2 text-blue-600">Login</h2>
        <div className="border border-blue-600 rounded-md p-4">
          <form onSubmit={handleSubmit(login)}>
            <div className="space-y-4">
              {/* Email Input Field */}
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Input Field */}
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                textColor="text-white"
                type="submit"
                className="w-full bg-blue-600 py-2 rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </div>

            {/* Sign-up Link */}
            <p className="text-center text-black my-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>

            {/* OAuth Login Button (Optional - Uncomment when integrated) */}
            {/* <button className="bg-blue-600 mx-auto block text-white rounded-md p-2 mb-4 hover:bg-blue-700 transition-colors">
              Login with Google
            </button> */}

            {/* OAuth Component (if used for Google Login) */}
            {/* <OAuth title={"Login with Google"} /> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
