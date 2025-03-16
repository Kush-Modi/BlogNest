import { useContext } from "react";
import { ThemeContext } from "../../contexts/ColorContext";
import { Link } from "react-router-dom";

function AboutUs() {
  const { isNightMode } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center mb-8 transition-all hover:translate-x-1 text-gray-400 hover:text-gray-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-48 rounded-2xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">About BlogNest</h1>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 rounded-2xl shadow-sm transition-all hover:shadow-md bg-gray-800 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h2>
              <p className="leading-relaxed text-gray-300">
                At BlogNest, we're passionate about creating a space where writers and readers can connect, share ideas, and grow together. Our platform is designed to foster meaningful discussions and inspire creativity.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-sm transition-all hover:shadow-md bg-gray-800 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Vision</h2>
              <p className="leading-relaxed text-gray-300">
                We envision BlogNest as the go-to platform for quality content, where writers can showcase their work and readers can discover fresh perspectives on topics they care about.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl shadow-sm transition-all hover:shadow-md bg-gray-800 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Why Choose BlogNest?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900/50 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-200">Fast & Reliable</h3>
                <p className="text-sm text-gray-400">
                  Lightning-fast performance and reliable service
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900/50 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-200">Secure Platform</h3>
                <p className="text-sm text-gray-400">
                  Your content is safe and protected
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-900/50 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-200">Engaging Community</h3>
                <p className="text-sm text-gray-400">
                  Connect with like-minded writers and readers
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl shadow-sm transition-all hover:shadow-md bg-gray-800 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Get in Touch</h2>
            <p className="mb-4 text-gray-300">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <a
              href="mailto:contact@blognest.com"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              contact@blognest.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
