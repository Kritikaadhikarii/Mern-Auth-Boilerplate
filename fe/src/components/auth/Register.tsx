import { useState } from "react";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Register() {
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!touched) setTouched(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex-1 p-10 max-w-md mx-auto">
        <h1 className="text-blue-900 font-light text-3xl mb-1">
          Get Started Now
        </h1>
        <p className="text-gray-500 text-sm font-light mb-6">
          Enter your credentials to access your account
        </p>

        <button
          type="button"
          className="flex items-center gap-2 border w-full border-gray-300 rounded-md py-2 justify-center text-sm font-medium hover:bg-gray-50 mb-5"
          aria-label="Register with Google"
        >
          <img
            src="https://img.icons8.com/color/18/000000/google-logo.png"
            alt="Google logo"
          />
          Register with Google
        </button>
        <div className="text-gray-400 text-center mb-5">or</div>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setTouched(true)}
              placeholder="you@email.com"
              className="border border-gray-300 p-3 rounded-md w-full bg-gray-50 focus:outline-blue-400"
              autoFocus
              required
            />
            {touched && email.length > 0 && !isValidEmail(email) && (
              <span className="text-xs text-red-600">
                Please enter a valid email address.
              </span>
            )}
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 accent-blue-500 rounded"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms &amp; Privacy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!agreed || !isValidEmail(email)}
          >
            Send OTP
          </button>
          <div className="text-center text-sm mt-4">
            Have an account?{" "}
            <a
              href="#"
              className="text-blue-600 font-medium underline hover:text-blue-800"
            >
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
