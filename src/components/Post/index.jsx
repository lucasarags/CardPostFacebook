import { BiLike } from "react-icons/bi";
import { MdOutlineChat } from "react-icons/md";
import { PiArrowElbowUpRight } from "react-icons/pi";

export default function Post(props) {
  const { posts } = props;

  if (!Array.isArray(posts)) {
    return null;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <section className="flex items-center">
            <img
              src={post.avatar}
              alt="Perfil Icon"
              className="mx-4 mt-4 mb-1"
            />

            <div>
              <h2 className="font-bold text-xs text-black">{post.user}</h2>

              {post.comments && post.comments.length > 0 && (
                <div className="">
                  <ul>
                    {post.comments.map((comment) => (
                      <li
                        key={comment.id}
                        className="text-xs flex items-center text-gray-400 font-medium gap-x-0.5"
                      >
                        {comment.content}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <h3 className="text-xs flex items-center text-gray-400 font-medium gap-x-0.5">
                {post.since}
              </h3>
            </div>
          </section>
          <section className="flex items-center items-center px-6 pb-4 text-xs text-gray-400 font-medium space-x-5 ">
            <section className="flex items-center gap-1">
              Curtir <BiLike />
            </section>
            <section className="flex items-center gap-1">
              Comentar <MdOutlineChat />
            </section>
            <section className="flex items-center gap-1 ">
              Comentar <PiArrowElbowUpRight />
            </section>
          </section>
        </div>
      ))}
    </div>
  );
}
