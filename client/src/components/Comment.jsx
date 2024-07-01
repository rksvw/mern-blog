import moment from "moment";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Button, Textarea } from "flowbite-react";

export default function Comment({ totalComments, onLike, onEdit, onDelete }) {
  const { currentUser } = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({});
  const [editContent, setEditContent] = useState(totalComments.content);

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

  const handleEdit = () => {
    setIsEditing(true);
    setEditContent(totalComments.content);
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`/api/comment/editcomment/${totalComments._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: editContent,
        }),
      });
      if (res.ok) {
        setIsEditing(false);
        onEdit(totalComments, editContent);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          {isEditing ? (
            <>
              <Textarea
                className="mb-2"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <div className="flex justify-end gap-2 text-xs">
                <Button
                  type="button"
                  size={"sm"}
                  gradientDuoTone={"purpleToBlue"}
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button
                  type="button"
                  size={"sm"}
                  gradientDuoTone={"purpleToBlue"}
                  outlined
                  onClick={() => setIsEditing(false)}
                >
                  Cancle
                </Button>
              </div>
            </>
          ) : (
            <>
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
                {currentUser &&
                  (currentUser._id === totalComments.userId ||
                    currentUser.isAdmin) && (
                    <>
                      <button
                        className="text-gray-400 hover:text-blue-500"
                        type="button"
                        onClick={handleEdit}
                      >
                        Edit
                      </button>
                      <button
                        className="text-gray-400 hover:text-red-500"
                        type="button"
                        onClick={() => onDelete(totalComments._id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
