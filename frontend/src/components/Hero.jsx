import hero from "../assets/hero.png";
export default function Hero() {
  return (
    <>
      <div className="bg-primary text-textColor py-20 px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <img src={hero} alt="HERO" />
            <p className="text-lg mb-8">
              Post any task. Pick the best person. Get it done.
            </p>
            <div className="flex flex-col md:flex-row">
              <button className="bg-white text-blue-700 rounded-lg px-6 py-3 mb-4 md:mb-0 md:mr-4">
                Post your task for free
              </button>
              <button className="bg-blue-500 text-white rounded-lg px-6 py-3">
                Earn money as a Tasker
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0"></div>
        </div>
        <div className="container mx-auto mt-8 flex justify-between text-textColor">
          <div className="flex items-center">
            <span className="text-4xl font-bold mr-2">1M+</span>
            <p>customers</p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl font-bold mr-2">2.5M+</span>
            <p>tasks done</p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl font-bold mr-2">4M+</span>
            <p>user reviews</p>
          </div>
        </div>
      </div>
    </>
  );
}
