import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Secure login page for Acme Dashboard.',
  keywords: ['Login', 'Authentication', 'Acme', 'Secure Access'],
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="w-full max-w-md">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login to Acme
          </h1>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:text-blue-600 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
