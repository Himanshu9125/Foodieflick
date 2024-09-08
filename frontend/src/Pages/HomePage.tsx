import landing from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
export const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-xl shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-red-500">
          FoodieFlick into takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>

      <div className="grid md:flex gap-5">
        <img src={landing} className="md:w-[50%]"></img>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl  tracking-tighter ">
            Order takeway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering personlised
            recommendaion
          </span>
          <img src={appDownload} />
        </div>
      </div>
    </div>
  );
};
