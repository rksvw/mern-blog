import moment from "moment";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Comment({ totalComments, onLike }) {
  const { currentUser } = useSelector((state) => state.user);

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${totalComments.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser();
  }, [totalComments]);

  return (
    <>
      <div className="flex p-4 border-b dark:border-gray-600 text-sm">
        <div className="flex-shirnk-0 mr-3">
          <img
            src={user.profilePhoto}
            alt={user.username}
            className="w-10 h-10 rounded-full bg-gray-200"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <span className="font-bold mr-1 text-xs truncate">
              {user ? `@${user.username}` : "anonymous user"}
            </span>
            <span className="text-gray-500 text-xs">
              {moment(totalComments.createdAt).fromNow()}
            </span>
          </div>
          <p className="text-gray-500 pb-2">{totalComments.content}</p>

          <div className="flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2">
            <button
              className={`text-gray-400 hover:text-blue-500 ${
                currentUser &&
                totalComments.likes.includes(currentUser._id) &&
                "!text-blue-500"
              }`}
              type="button"
              onClick={() => onLike(totalComments._id)}
            >
              <FaThumbsUp className="text-sm" />
            </button>
            <p className="text-gray-400">
              {totalComments.numberOfLikes > 0 &&
                totalComments.numberOfLikes +
                  " " +
                  (totalComments.numberOfLikes === 1 ? "like" : "likes")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
