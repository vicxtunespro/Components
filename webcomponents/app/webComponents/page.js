import React from 'react'

export default function Page() {
  return (
    <div className='h-screen w-full bg-purple-50 p-8'>
        <div className="max-w-screen-xl mx-auto">
            <div className="items-start justify-between py-4 border-b md:flex">
                <div>
                    <h3 className="text-gray-800 text-2xl font-bold">
                        Web Components
                    </h3>
                </div>
                <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
                    <a
                        href="javascript:void(0)"
                        className="block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Browse components
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="block px-4 py-2 mt-3 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 sm:mt-0 md:text-sm"
                    >
                        Order For Components
                    </a>
                </div>
            </div>
        </div>
        <div class="dashboard-cards max-w-screen-xl py-4 mx-auto">
            <span className='my-4 block'>Dashboard Cards</span>
            <div class="info-card flex w-fit gap-8 rounded-lg bg-white p-4 shadow-lg dark:bg-slate-800">
                <div class="card-details">
                    <span class="text-2xl font-semibold text-gray-800">160</span>
                    <p class="text-gray-400">Current Users</p>
                </div>
                <div class="icon h-fit w-fit rounded-full bg-purple-200 p-4 text-purple-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                </div>
            </div>
        </div>

    </div>
  )
}
