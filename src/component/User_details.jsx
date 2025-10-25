export default function UserDetails({ users }) {
  const allUsers = users || []; // fallback to empty array

  return (
    <section id="user_details" className="max-w-5xl mx-auto my-6 p-3 rounded-xl transition-colors">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        User Details
      </h2>

      <div className="overflow-x-auto">
        <div className="grid gap-6 md:grid-cols-3">
          {allUsers.length > 0 ? (
            allUsers.map(user => (
              <div key={user.id} className="border-2 border-black dark:border-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{user.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-medium">Email:</span> {user.email}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-medium">Phone:</span> {user.phone}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Company:</span> {user.company?.name || user.company || "N/A"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No users to show</p>
          )}
        </div>
      </div>
    </section>
  );
}
