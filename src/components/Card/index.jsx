import Post from "../Post";

import iredeIcon from "../../assets/irede.png";
import restic12 from "../../assets/restic12.png";

import { IoMdGlobe } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { MdOutlineChat } from "react-icons/md";
import { PiArrowElbowUpRight } from "react-icons/pi";

function Header() {
  return (
    <div className="flex items-center ">
      <img src={iredeIcon} alt="Irede Icon" className=" m-4" />
      <div>
        <h2 className="font-bold text-xs text-black">Instituto IREDE</h2>
        <h3 className="text-xs flex items-center text-gray-400 font-medium gap-x-0.5">
          12h
          <IoMdGlobe />
        </h3>
      </div>
    </div>
  );
}
function Body() {
  return (
    <div>
      <img src={restic12} alt="Inscrição Restic12" className="w-72 h-48"></img>
    </div>
  );
}
function Footer() {
  return (
    <div className="flex items-center items-center p-3 text-xs text-gray-400 font-medium space-x-9 ">
      <section className="flex items-center gap-1">
        Curtir <BiLike />
      </section>
      <section className="flex items-center gap-1">
        Comentar <MdOutlineChat />
      </section>
      <section className="flex items-center gap-1 ">
        Comentar <PiArrowElbowUpRight />
      </section>
    </div>
  );
}

function Comments({ posts }) {
  return (
    <>
      <Post posts={posts} />
    </>
  );
}

export default function Card({ posts }) {
  return (
    <div className="w-72 mx-4 my-7 shadow-md shadow-gray-400">
      <Header />
      <Body />
      <Footer />
      <Comments posts={posts} />
    </div>
  );
}
