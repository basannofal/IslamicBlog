import React from "react";
import "../../assets/css/pages/Home.css";

const Categories = () => {
  return (
    <>
      <div className="w-4/5 mx-auto my-5">
        <span className="section_title">اقسام:-</span>
      </div>
      <div className="flex flex-wrap w-4/5 mx-auto mb-10">
        <div className="lg:w-1/4 md:w-1/2 w-full py-7 pillers-sections cursor-pointer">
          <div className="four-piller-outside">
            <div className="four-piller-inside">
              <img
                src={require("../../assets/image/islamic-piller-salah-image.png")}
                alt="islamic-salah"
                width="100%"
              ></img>
            </div>
          </div>
          <p className="four-piller-names">صلاح</p>
          <p className="four-piller-discription">
            عرض جمعت منتصف تم, تكاليف الأرواح الا كل. ما لان وحتى الثالث.
          </p>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full py-7 pillers-sections cursor-pointer">
          <div className="four-piller-outside">
            <div className="four-piller-inside">
              <img
                src={require("../../assets/image/islamic-piller-salah-image.png")}
                alt="islamic-salah"
                width="100%"
              ></img>
            </div>
          </div>
          <p className="four-piller-names">صلاح</p>
          <p className="four-piller-discription">
            عرض جمعت منتصف تم, تكاليف الأرواح الا كل. ما لان وحتى الثالث.
          </p>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full py-7 pillers-sections cursor-pointer">
          <div className="four-piller-outside">
            <div className="four-piller-inside">
              <img
                src={require("../../assets/image/islamic-piller-salah-image.png")}
                alt="islamic-salah"
                width="100%"
              ></img>
            </div>
          </div>
          <p className="four-piller-names">صلاح</p>
          <p className="four-piller-discription">
            عرض جمعت منتصف تم, تكاليف الأرواح الا كل. ما لان وحتى الثالث.
          </p>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full py-7 pillers-sections cursor-pointer">
          <div className="four-piller-outside">
            <div className="four-piller-inside">
              <img
                src={require("../../assets/image/islamic-piller-salah-image.png")}
                alt="islamic-salah"
                width="100%"
              ></img>
            </div>
          </div>
          <p className="four-piller-names">صلاح</p>
          <p className="four-piller-discription">
            عرض جمعت منتصف تم, تكاليف الأرواح الا كل. ما لان وحتى الثالث.
          </p>
        </div>
      </div>
    </>
  );
};

export default Categories;
