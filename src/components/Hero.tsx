import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
return (

<div className="flex justify-between items-center container mx-auto">
 <div>
 <h1 className="text-6xl font-bold">
 Build Your Ideal <br />
 <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-6xl font-bold text-transparent">
 Development Stack
 </span>
</h1>
 <p className="pt-4">
 Explore frontend, backend, database, and tooling options,
<br /> compare them side by side, and put together the stack that fits
 your <br /> next project.
 </p>
 <div className="flex gap-4 mt-10">
<button className="btn bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl text-white">
Explore Technologies </button>
<button className="btn rounded-xl">Learn More</button>
 </div>
</div>
 <div>
 <img src={BannerImage} alt="BannerImg" />
 </div>
 </div>

 );

};

export default Banner;

