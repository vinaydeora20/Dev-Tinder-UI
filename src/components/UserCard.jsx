import React from 'react'

const UserCard = ({user}) => {
    const {firstName, lastName , skills , _id , about , age , gender ,photoUrl}= user;
  return (
    <div>
       <div className='pt-16'>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg w-full h-48 object-fill" src={photoUrl} alt="" />
        </a>
        <div className="p-5">
     
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{firstName}</p>
       <div className='flex'>

         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{age }</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> ,{gender }</p>
       </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>
          <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink</button>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserCard
