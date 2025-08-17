import React, { useEffect } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addFeed } from '../utils/slices/feedSlice';
import TinderCard from 'react-tinder-card';

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
  const swiped = (direction, user) => {   // CHANGED
    console.log('You swiped', direction, 'on', user.firstName);
  };

  const outOfFrame = (id) => {   // CHANGED
    console.log(id, 'left the screen!');
  };
  return (
    <>
     <div className="flex justify-center items-center h-screen relative">  {/* CHANGED */}
      {Array.isArray(allFeedData) && allFeedData.map((user) => (
        <TinderCard
          key={user._id}
          onSwipe={(dir) => swiped(dir, user)}
          onCardLeftScreen={() => outOfFrame(user._id)}
          className="absolute w-80"   // CHANGED
        >
          <UserCard user={user} />
        </TinderCard>
      ))}
    </div>
    </>
  )
}

export default Feed
