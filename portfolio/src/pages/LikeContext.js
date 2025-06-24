import { createContext, useState, useEffect } from 'react';
import { getData, putData } from './db';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getData('homepage');
        if (data) {
          setLikes(data.likes || 0);
          setDislikes(data.dislikes || 0);
          setUserVote(data.userVote || null);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const updateStorage = async (newLikes, newDislikes, newUserVote) => {
    await putData({
      id: 'homepage',
      likes: newLikes,
      dislikes: newDislikes,
      userVote: newUserVote
    });
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

    setLikes(newLikes);
    setDislikes(newDislikes);
    setUserVote(newUserVote);
    await updateStorage(newLikes, newDislikes, newUserVote);
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

    setLikes(newLikes);
    setDislikes(newDislikes);
    setUserVote(newUserVote);
    await updateStorage(newLikes, newDislikes, newUserVote);
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