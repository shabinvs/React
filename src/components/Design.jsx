import React from "react";
import shoe from "../images/shoe.png";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const Design = () => {
  return (
    <div className="py-2 px-6">
      <nav className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">React.</h1>
        <ul className="flex gap-3 font-serif font-medium">
          <li className="p-4 cursor-pointer">Home</li>
          <li className="p-4 ">About</li>
          <li className="p-4 ">Products</li>
          <li className="p-4 ">Contact Us</li>
        </ul>
      </nav>

      <div className="flex justify-between items-center h-[500px] pt-20">
        <div className="w-2/3 font-mono">
          <h1 className="text-6xl">
            <span className="font-bold">Step Into</span> Elegance
          </h1>
          <h1 className="text-9xl font-bold">Calza</h1>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis error numquam veniam omnis nihil earum atque, dolore
            officia, assumenda id harum quas excepturi sequi totam cum dicta non
            nisi sapiente!
          </p>
          <button className="bg-gray-700 px-10 py-2 mt-5 text-white rounded-full">
            View More..
          </button>
        </div>

        <div className="pr-6">
          <img src={shoe} alt="" className="h-[500px]" />
        </div>
      </div>

      <div className="pt-20 flex justify-evenly h-[300px] items-center">
        <div className="bg-gray-600 py-10 px-10 w-[270px] flex justify-center items-center rounded">
          <img src={logo1} alt="" className="h-[70px]" />
        </div>

        <div className="bg-gray-600 py-10 px-10 w-[270px] h-[151px] flex justify-center items-center rounded">
          <img src={logo2} alt="" className="h-[50px]" />
        </div>

        <div className="bg-gray-600 py-10 px-10 w-[270px] flex justify-center items-center rounded">
          <img src={logo3} alt="" className="h-[70px]" />
        </div>

        <div className="bg-gray-600 py-10 px-10 w-[270px] flex justify-center items-center rounded">
          <img src={logo1} alt="" className="h-[70px]" />
        </div>
      </div>

      <div className="h-[500px] pt-20">
        <h1 className="font-bold text-3xl">UP TO 30% OFF ON TOP MODELS</h1>
        <div className="mt-10 flex justify-evenly">
          <div>
            <img src={img1} alt="" className="h-[350px] rounded-3xl" />
          </div>

          <div>
            <img src={img2} alt="" className="h-[350px] rounded-3xl" />
          </div>

          <div>
            <img src={img3} alt="" className="h-[350px] rounded-3xl" />
          </div>
        </div>
      </div>

      <div className="h-[600px] mt-24">
        <h1 className="font-bold text-3xl">NEW ARRIVALS</h1>
        <div className="mt-10 flex justify-evenly items-center">
          <div className="w-[250px] rounded-3xl p-3 border-2 border-gray-200">
            <img src={img1} className="w-full rounded-3xl" alt="shoe" />
            <div className="text-center mt-2 font-mono">
              <h3 className="mt-3 font-bold text-xl">Jordan 1 Retro</h3>
              <h3 className="my-2 font-bold font-serif">$1265.00</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="mt-4 bg-gray-700 text-white py-2 px-12 rounded-full font-serif">
                BUY NOW
              </button>
            </div>
          </div>

          <div className="w-[250px] rounded-3xl p-3 border-2 border-gray-200">
            <img src={img1} className="w-full rounded-3xl" alt="shoe" />
            <div className="text-center mt-2 font-mono">
              <h3 className="mt-3 font-bold text-xl">Jordan 1 Retro</h3>
              <h3 className="my-2 font-bold font-serif">$1265.00</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="mt-4 bg-gray-700 text-white py-2 px-12 rounded-full font-serif">
                BUY NOW
              </button>
            </div>
          </div>

          <div className="w-[250px] rounded-3xl p-3 border-2 border-gray-200">
            <img src={img1} className="w-full rounded-3xl" alt="shoe" />
            <div className="text-center mt-2 font-mono">
              <h3 className="mt-3 font-bold text-xl">Jordan 1 Retro</h3>
              <h3 className="my-2 font-bold font-serif">$1265.00</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="mt-4 bg-gray-700 text-white py-2 px-12 rounded-full font-serif">
                BUY NOW
              </button>
            </div>
          </div>

          <div className="w-[250px] rounded-3xl p-3 border-2 border-gray-200">
            <img src={img1} className="w-full rounded-3xl" alt="shoe" />
            <div className="text-center mt-2 font-mono">
              <h3 className="mt-3 font-bold text-xl">Jordan 1 Retro</h3>
              <h3 className="my-2 font-bold font-serif">$1265.00</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="mt-4 bg-gray-700 text-white py-2 px-12 rounded-full font-serif">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] mt-10">
        <h1 className="font-bold text-3xl">VALUABLE CUSTOMERS SAY ABOUT US</h1>
        <div className="mt-10 flex items-center gap-4">
          <div className="border-2">
            <div className="py-8 px-8 font-mono">
              <h1 className="font-bold">John M.</h1>
              <h4 className="font-bold">New York, USA</h4>
              <h1>⭐⭐⭐⭐⭐</h1>
              <p className="mt-4">"These shoes are incredibly comfortable and stylish! Perfect for casual wear and long walks. Highly recommend!"</p>
            </div>
          </div>

          <div className="border-2">
            <div className="py-8 px-8 font-mono">
              <h1 className="font-bold">Sarah L.</h1>
              <h4 className="font-bold">London, UK</h4>
              <h1>⭐⭐⭐⭐⭐</h1>
              <p className="mt-4">"Amazing quality! The material feels premium, and the fit is just perfect. Will definitely buy again!"</p>
            </div>
          </div>

          <div className="border-2">
            <div className="py-8 px-8 font-mono">
              <h1 className="font-bold">John M.</h1>
              <h4 className="font-bold">New York, USA</h4>
              <h1>⭐⭐⭐⭐⭐</h1>
              <p className="mt-4">"These shoes are incredibly comfortable and stylish! Perfect for casual wear and long walks. Highly recommend!"</p>
            </div>
          </div>

          <div className="border-2">
            <div className="py-8 px-8 font-mono">
              <h1 className="font-bold">Sarah L.</h1>
              <h4 className="font-bold">London, UK</h4>
              <h1>⭐⭐⭐⭐⭐</h1>
              <p className="mt-4">"Amazing quality! The material feels premium, and the fit is just perfect. Will definitely buy again!"</p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Design;
