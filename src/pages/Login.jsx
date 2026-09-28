import { Link } from "react-router";

function Login() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-24
        pb-16
      "
    >

      <div className="w-full max-w-md">

        {/* Login Card */}

        <div className="glass-card rounded-2xl p-8">

          {/* Header */}

          <div className="text-center mb-8">

            <h1
              className="
                font-headline-lg
                text-headline-lg
                text-on-surface
                mb-2
              "
            >
              Welcome Back
            </h1>

            <p className="text-on-surface-variant">
              Log in to your BrewGrade account
            </p>

          </div>


          {/* Login Form */}

          <form className="flex flex-col gap-5">

            {/* Email */}

            <div>

              <label
                htmlFor="login-email"
                className="
                  block
                  font-label-sm
                  text-label-sm
                  text-on-surface-variant
                  mb-2
                "
              >
                Email
              </label>

              <input
                type="email"
                id="login-email"
                placeholder="you@example.com"
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  bg-white/5
                  border
                  border-white/10
                  text-on-surface
                  outline-none
                  focus:border-primary
                "
              />

            </div>


            {/* Password */}

            <div>

              <label
                htmlFor="login-password"
                className="
                  block
                  font-label-sm
                  text-label-sm
                  text-on-surface-variant
                  mb-2
                "
              >
                Password
              </label>

              <input
                type="password"
                id="login-password"
                placeholder="••••••••"
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  bg-white/5
                  border
                  border-white/10
                  text-on-surface
                  outline-none
                  focus:border-primary
                "
              />

            </div>


            {/* Login Button */}

            <button
              type="submit"
              className="
                bg-glass-primary
                text-on-primary-fixed
                px-6
                py-3
                rounded-lg
                font-label-sm
                text-label-sm
                hover:brightness-110
                transition-all
              "
            >
              Log In
            </button>

          </form>


          {/* Signup Link */}

          <div className="text-center mt-6">

            <span className="text-on-surface-variant text-sm">
              Don't have an account?
            </span>

            <Link
              to="/signup"
              className="
                text-primary
                text-sm
                font-medium
                ml-1
                hover:underline
              "
            >
              Sign Up
            </Link>

          </div>


          {/* Back Home */}

          <Link
            to="/"
            className="
              block
              text-center
              w-full
              mt-5
              text-on-surface-variant
              hover:text-primary
              transition-colors
            "
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Login;