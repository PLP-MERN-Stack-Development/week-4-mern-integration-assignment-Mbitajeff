import { useParams } from 'react-router-dom'

const EditProperty = () => {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Edit Property
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Edit Property ID: {id}
          </h2>
          <p className="text-gray-600">
            Property edit form will be implemented here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EditProperty 