import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      
      {/* 404 Code */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-red-500 mb-4">
        404
      </h1>
      
      {/* Message */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md sm:max-w-lg">
        Oops! The page you are looking for does not exist or has been moved. 
        Please use the button below to return home.
      </p>
      
      {/* Return Home Button */}
      <Link
        href="/"
        className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
      >
        Return Home
      </Link>

      {/* Optional Extra Image/Icon */}
     
    </div>
  )
}
