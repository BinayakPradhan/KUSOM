export default function HelperSignup() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">General Information</h2>
            <div className="mb-4">
              <label htmlFor="title" className="block font-medium mb-1">
                Title
              </label>
              <select
                id="title"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              >
                <option>Select Title</option>
                {/* Add options for titles */}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="position" className="block font-medium mb-1">
                Position
              </label>
              <select
                id="position"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              >
                <option>Select Position</option>
                {/* Add options for positions */}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block font-medium mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="businessArena"
                  className="block font-medium mb-1"
                >
                  Business Arena
                </label>
                <input
                  type="text"
                  id="businessArena"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="employees" className="block font-medium mb-1">
                  Employees
                </label>
                <select
                  id="employees"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                >
                  <option>Select Employees</option>
                  {/* Add options for employees */}
                </select>
              </div>
            </div>
          </div>
          <div className="bg-indigo-600 text-white p-6">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <div className="mb-4">
              <label htmlFor="street" className="block font-medium mb-1">
                Street + Nr
              </label>
              <input
                type="text"
                id="street"
                className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="additionalInformation"
                className="block font-medium mb-1"
              >
                Additional Information
              </label>
              <input
                type="text"
                id="additionalInformation"
                className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="zipCode" className="block font-medium mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="place" className="block font-medium mb-1">
                  Place
                </label>
                <select
                  id="place"
                  className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
                >
                  <option>Select Place</option>
                  {/* Add options for places */}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block font-medium mb-1">
                Country
              </label>
              <select
                id="country"
                className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
              >
                <option>Select Country</option>
                {/* Add options for countries */}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="code" className="block font-medium mb-1">
                  Code +
                </label>
                <input
                  type="text"
                  id="code"
                  className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600 rounded focus:ring-indigo-500"
                />
                <span className="ml-2">
                  I do accept the Terms and Conditions
                </span>
              </label>
            </div>

            <button className="w-full bg-white text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-700 hover:text-white transition-colors">
              Register Badge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
