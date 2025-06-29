import { createContext, useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, onValue, set, get } from 'firebase/database';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get or generate a unique user ID
  const getUserId = () => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = Math.random().toString(36).substring(2);
      localStorage.setItem('userId', userId);
    }
    return userId;
  };

  useEffect(() => {
    const userId = getUserId();
    const votesRef = ref(database, 'votes');
    const userVoteRef = ref(database, `userVotes/${userId}`);

    // Fetch initial counts
    get(votesRef).then((snapshot) => {
      const data = snapshot.val() || { likes: 0, dislikes: 0 };
      setLikes(data.likes);
      setDislikes(data.dislikes);
    });

    // Fetch user's vote
    get(userVoteRef).then((snapshot) => {
      setUserVote(snapshot.val() || null);
      setLoading(false);
    });

    // Set up realtime listener for vote counts
    const unsubscribe = onValue(votesRef, (snapshot) => {
      const data = snapshot.val() || { likes: 0, dislikes: 0 };
      setLikes(data.likes);
      setDislikes(data.dislikes);
    });

    return () => unsubscribe();
  }, []);

  const updateVotes = async (newLikes, newDislikes, newUserVote) => {
    const userId = getUserId();
    try {
      // Update counts
      await set(ref(database, 'votes'), {
        likes: newLikes,
        dislikes: newDislikes
      });

      // Update user's vote
      await set(ref(database, `userVotes/${userId}`), newUserVote);
    } catch (error) {
      console.error('Error updating votes:', error);
    }
  };

  const handleLike = async () => {
    let newLikes = likes;
    let newDislikes = dislikes;
    let newUserVote = userVote;

    if (userVote === 'like') {
      newLikes = likes - 1;
      newUserVote = null;
    } else {
      if (userVote === 'dislike') {
        newDislikes = dislikes - 1;
      }
      newLikes = likes + 1;
      newUserVote = 'like';
    }

    setUserVote(newUserVote);
    await updateVotes(newLikes, newDislikes, newUserVote);
  };

  const handleDislike = async () => {
    let newLikes = likes;
    let newDislikes = dislikes;
    let newUserVote = userVote;

    if (userVote === 'dislike') {
      newDislikes = dislikes - 1;
      newUserVote = null;
    } else {
      if (userVote === 'like') {
        newLikes = likes - 1;
      }
      newDislikes = dislikes + 1;
      newUserVote = 'dislike';
    }

    setUserVote(newUserVote);
    await updateVotes(newLikes, newDislikes, newUserVote);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <LikeContext.Provider value={{ likes, dislikes, userVote, handleLike, handleDislike }}>
      {children}
    </LikeContext.Provider>
  );
};