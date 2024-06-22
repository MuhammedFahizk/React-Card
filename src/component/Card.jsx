import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";


const Card = ({ like, share, save, setLike, setShare, setSave }) => {
  const [open, setOpen] = useState(false);
  const [commentAdd, setCommentAdd] = useState('');
  const [comments, setComments] = useState([]);

  const handlePostClick = (e) => {
    e.preventDefault();
    if (commentAdd.trim() !== "") {
      setComments((prevComments) => [...prevComments, commentAdd]);
      setCommentAdd(""); // Clear the input field after adding the comment
    }
  };

  return (
    <div className="w-1/3 border rounded-3xl">
      <div className="bg-black flex justify-start rounded-t-2xl px-10 gap-5 items-center py-2">
        <img
          className="w-7 h-7 rounded-full"
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?fm=webp"
          alt=""
        />
        <h2 className="text-white">m fahiz</h2>
      </div>
      <div>
        <img
          className=""
          src="https://img.freepik.com/premium-photo/big-american-house-generative-ai_170984-9624.jpg"
          alt=""
        />
      </div>
      <div className="bg-black flex text-white justify-between px-20 rounded-b-2xl gap-5 items-center py-2">
        <FaRegHeart
          className={like > 0 ? `text-2xl text-red-500` : 'text-2xl'}
          onClick={() => setLike(like + 1)}
        />
        <FaRegUserCircle
          onClick={() => setShare(share + 1)}
          className="text-2xl"
        />
        <CiLocationArrow1 

          onClick={() => setSave(save + 1)}
          className="text-2xl"
        />
        <FaRegComment
          onClick={() => setOpen(!open)}
          className="text-2xl"
        />
      </div>

      <div className={open ? 'px-1 pb-1 ' : 'hidden'}>
        <form className="flex justify-center border rounded-lg m-1 my-4 gap-2 p-10" onSubmit={handlePostClick}>
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full h-10"
            value={commentAdd}
            onChange={(e) => setCommentAdd(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            POST
          </button>
        </form>
        <div className={comments.length>0?" border rounded-lg bg-black rounded-b-3xl": 'hidden'}>
          {comments.map((c, index) => (
            <div  key={index}>
                <p className='p-1 px-5 text-white '>{c}</p>
                </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
