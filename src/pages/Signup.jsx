import { Link } from "react-router";

function Signup() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-28
        pb-16
      "
    >

      <div className="w-full max-w-md">

        {/* Signup Card */}

        <div className="glass-card rounded-2xl p-8 md:p-10">

          {/* Header */}

          <div className="text-center mb-8">

            <div
              className="
                w-14
                h-14
                mx-auto
                mb-5
                rounded-full
                bg-primary/10
                border
                border-primary/30
                flex
                items-center
                justify-center
                glow-primary
              "
            >

              <span
                className="
                  material-symbols-outlined
                  text-primary
                  text-3xl
                "
              >
                person_add
              </span>

            </div>


            <h1
              className="
                font-headline-lg
                text-headline-lg
                text-on-surface
                mb-2
              "
            >
              Create Your Account
            </h1>


            <p className="text-on-surface-variant text-sm">
              Start using BrewGrade AI
            </p>

          </div>


          {/* Social Signup */}

          <div className="flex flex-col gap-3">

            {/* Google */}

            <button
              type="button"
              className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                px-5
                py-3
                rounded-xl
                bg-white
                text-black
                font-medium
                hover:bg-gray-200
                transition-all
                active:scale-[0.98]
              "
            >

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >

                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />

                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />

                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />

                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />

              </svg>

              Continue with Google

            </button>


            {/* Apple */}

            <button
              type="button"
              className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                px-5
                py-3
                rounded-xl
                bg-black
                text-white
                border
                border-white/20
                font-medium
                hover:bg-white/5
                transition-all
                active:scale-[0.98]
              "
            >

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >

                <path
                  d="M18.71 12.74c-.02-2.94 2.4-4.37 2.51-4.44-1.37-2-3.5-2.27-4.25-2.3-1.79-.19-3.53 1.07-4.44 1.07-.93 0-2.33-1.05-3.84-1.02-1.94.03-3.76 1.15-4.76 2.89-2.06 3.57-.52 8.82 1.45 11.71.99 1.42 2.14 3 3.65 2.94 1.48-.06 2.03-.94 3.82-.94 1.77 0 2.29.94 3.83.9 1.59-.02 2.59-1.42 3.54-2.85 1.14-1.63 1.6-3.24 1.62-3.32-.04-.01-3.1-1.18-3.13-4.64zM15.8 4.1c.8-1 1.35-2.35 1.2-3.71-1.16.05-2.62.8-3.45 1.78-.74.86-1.4 2.26-1.23 3.57 1.31.1 2.66-.66 3.48-1.64z"
                />

              </svg>

              Continue with Apple

            </button>

          </div>


          {/* Divider */}

          <div className="
            flex
            items-center
            gap-4
            my-7
          ">

            <div className="h-[1px] flex-grow bg-white/10" />

            <span
              className="
                font-label-sm
                text-label-sm
                text-on-surface-variant
              "
            >
              OR
            </span>

            <div className="h-[1px] flex-grow bg-white/10" />

          </div>


          {/* Signup Form */}

          <form className="flex flex-col gap-5">

            {/* Email */}

            <div>

              <label
                htmlFor="signup-email"
                className="
                  block
                  font-label-sm
                  text-label-sm
                  text-on-surface-variant
                  mb-2
                "
              >
                Email Address
              </label>

              <input
                type="email"
                id="signup-email"
                placeholder="you@example.com"
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-on-surface
                  placeholder:text-on-surface/30
                  outline-none
                  focus:border-primary
                  focus:ring-1
                  focus:ring-primary/30
                  transition-all
                "
              />

            </div>


            {/* Password */}

            <div>

              <label
                htmlFor="signup-password"
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
                id="signup-password"
                placeholder="Create a password"
                minLength="8"
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-on-surface
                  placeholder:text-on-surface/30
                  outline-none
                  focus:border-primary
                  focus:ring-1
                  focus:ring-primary/30
                  transition-all
                "
              />

            </div>


            {/* Confirm Password */}

            <div>

              <label
                htmlFor="confirm-password"
                className="
                  block
                  font-label-sm
                  text-label-sm
                  text-on-surface-variant
                  mb-2
                "
              >
                Confirm Password
              </label>

              <input
                type="password"
                id="confirm-password"
                placeholder="Enter password again"
                minLength="8"
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-on-surface
                  placeholder:text-on-surface/30
                  outline-none
                  focus:border-primary
                  focus:ring-1
                  focus:ring-primary/30
                  transition-all
                "
              />

            </div>


            {/* Create Account */}

            <button
              type="submit"
              className="
                mt-2
                bg-glass-primary
                text-on-primary-fixed
                glow-primary
                px-6
                py-3
                rounded-xl
                font-label-sm
                text-label-sm
                hover:brightness-110
                transition-all
                active:scale-[0.98]
              "
            >
              Create Account
            </button>

          </form>


          {/* Login Link */}

          <div className="text-center mt-7">

            <span className="text-on-surface-variant text-sm">
              Already have an account?
            </span>

            <Link
              to="/login"
              className="
                text-primary
                text-sm
                font-medium
                ml-1
                hover:underline
              "
            >
              Log In
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
              text-sm
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

export default Signup;