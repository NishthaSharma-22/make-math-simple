import React from 'react'

function AdminPage() {
  return (
    <div className='p-4 flex flex-col md:flex-row gap-3'>
        {/* LEFT */}
        <div className='w-full lg:w-2/3'></div>

        {/* RIGHT */}
        <div className='w-full lg:w-1/3 bg-gray-50'></div>
    </div>
  )
}

export default AdminPage