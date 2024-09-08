import { Link } from "react-router-dom";
import { MainNav } from "./MainNav";
import { Mobilenav } from "./Mobilenav";
export const Header = () => {
  return (
    <div
      className="
     border-b-2
     border-b-red-500
     py-6
    "
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={"/"}
          className="text-3xl font-bold tracking-tight text-red-500"
        >
          <span className="flex">
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">F</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">o</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">o</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">d</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">i</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">e</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">F</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">l</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">i</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">c</p>
            <p className=" hover:text-purple-500 hover:text-4xl md:hover:3xl">k</p>
          </span>
        </Link>
        <div className="md:hidden">
          <Mobilenav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};
