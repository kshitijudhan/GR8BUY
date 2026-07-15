import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-black text-xl font-bold text-white">
            S
          </div>

          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="text-muted-foreground">Login to continue shopping.</p>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <Input
                  id="password"
                  type={showpassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowpassword(!showpassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showpassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />

                <Label htmlFor="remember" className="font-normal">
                  Remember Me
                </Label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="button"
              className="w-full"
              disabled={!email || !password}
              onClick={() => {
                if (!emailRegex.test(email)) {
                  toast.error("Please enter a valid email", {
                    position: "top-center",
                  });
                } else if (!passwordRegex.test(password)) {
                  toast.error(
                    "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
                    {
                      position: "top-center",
                    },
                  );
                } else {
                  toast.success("Login Successful", { position: "top-center" });
                  navigate("/");
                }
              }}
            >
              Login
            </Button>

            {/* Signup */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
