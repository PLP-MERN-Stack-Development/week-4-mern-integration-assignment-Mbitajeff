import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join RentSafi to find or list properties
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Registration form will be implemented here.
          </p>
          <Link
            to="/login"
            className="btn btn-primary"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register 