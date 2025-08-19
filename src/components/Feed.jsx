import React, { useEffect } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addFeed } from '../utils/slices/feedSlice';
import TinderCard from 'react-tinder-card';
import EmptyFeed from './EmptyFeed';

const Feed = () => {
  const dispatch = useDispatch();
  const allFeedData = useSelector((store) => store.feed);

  const feedData = async () => {
    const req = await axios.get("http://localhost:7777/feed", { withCredentials: true });
    console.log("all feed",req.data.data)
    dispatch(addFeed(req?.data?.data));
  }

  useEffect(() => {
      feedData();
  }, []);
  
  // ---- Send connection request ----
  const sendConnection = async (status, userId) => {
    try {
      const url = `http://localhost:7777/request/send/${status}/${userId}`;
      const res = await axios.post(url, { withCredentials: true });
      console.log(`Connection ${status} for user ${userId}`, res.data);
    } catch (err) {
      console.error(`Error sending ${status} to ${userId}:`, err.message);
    }
  };

  // ---- On swipe ----
  const swiped = (direction, user) => {
    console.log('You swiped', direction, 'on', user.firstName);

    if (direction === 'right') {
      sendConnection('intrested', user._id);
    } else if (direction === 'left') {
      sendConnection('ignored', user._id);
    }
  };

   const outOfFrame = (id) => {
    console.log(id, 'left the screen!');
  };
  return (
    <>
     <div className="flex justify-center items-center h-screen relative">  {/* CHANGED */}
      {Array.isArray(allFeedData) && allFeedData.length > 0 ? ( allFeedData.map((user) => (
        <TinderCard
          key={user._id}
          onSwipe={(dir) => swiped(dir, user)}
          onCardLeftScreen={() => outOfFrame(user._id)}
          className="absolute w-80"   // CHANGED
        >
          <UserCard user={user}  sendConnection={sendConnection}  />
        </TinderCard>
      ))) :( <EmptyFeed status={"Searching for more people..."}/>)
      }
    </div>
    </>
  )
}

export default Feed
