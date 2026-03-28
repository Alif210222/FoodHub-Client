"use client";

export default function CustomerProfileCard({ user }: any) {


     console.log(user);


  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg border p-6 space-y-5">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
          {user?.name?.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Role</p>
          <p className="font-semibold text-blue-600">
            {user?.role}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Status</p>
          <p className={`font-semibold ${
            user?.status === "ACTIVE"
              ? "text-green-600"
              : "text-red-500"
          }`}>
            {user?.status}
          </p>
        </div>

       

      </div>
    </div>
  );
}