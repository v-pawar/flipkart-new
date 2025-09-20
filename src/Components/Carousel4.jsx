import React from "react";

const carousel4 = () => {
  return (
    <div className="bg-white  px-2 mt-4 max-w-[70rem] mx-auto h-[174px] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Box 1 */}
        <div className="rounded-sm overflow-hidden">         
          <img
            src="/img/img1.jpg"
            alt="Box 1"
            className="w-full h-[173px] object-fit"
          />
        </div>

        {/* Box 2 */}
        <div className="rounded-sm overflow-hidden">
          <img
            src="/img/img2.jpg"
            alt="Box 2"
            className="w-full h-[173px] object-fit"
          />
        </div>

        {/* Box 3 */}
        <div className="rounded-sm overflow-hidden">
          <img
            src="/img/img3.jpg"
            alt="Box 3"
            className="w-full h-[173px] object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default carousel4;
