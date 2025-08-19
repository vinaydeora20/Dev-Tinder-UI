import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EmptyFeed from './EmptyFeed';


const ConnectionRequests = () => {
    
    const [data, setData] = useState([]);
    const LoggedInUserId = data._id;
    //   const [LoggedInUserId, setLoggedInUserId] = useState(user.user._id);
        console.log('LoggedInUserId', LoggedInUserId)
    

    const feedData = async () => {
        const req = await axios.get("http://localhost:7777/user/requests", { withCredentials: true });
        // console.log("all pending req", req.data.data[0].fromUserId.firstName)
        setData(req.data.data)
    }

    useEffect(() => {
        feedData();
    }, []);

      const ReviewConnectionRequest = async (status, userId) => {
    try {
      const url = `http://localhost:7777/request/review/${status}/${userId}`;
      const res = await axios.post(url, {}, { withCredentials: true });
      console.log(`Connection ${status} for user ${userId}`, res.data);
 feedData();
    console.log(res)
    } catch (err) {
      console.error(`Error sending ${status} to ${userId}:`, err.message);
    }
  };
if(data.length === 0){
    return <EmptyFeed status={"No connection Request found..."}/>
}
    return (
        <div className='mt-16'>

            { data?.map((user ,key) =>  (
              
              <div className=" mt-1 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    <div className="shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {user.fromUserId.firstName || "fr"}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            wants to send you a Request
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="submit" className="btn" onClick={()=>ReviewConnectionRequest("accepted", user._id)}>Accept</button>
                                        <button type="submit" className="btn mx-2" onClick={()=>ReviewConnectionRequest("rejected" , user._id)}>Reject</button>

                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            ))

            }
        </div>
    )
}

export default ConnectionRequests
