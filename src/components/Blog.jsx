import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="py-32 bg-[#f8f4ef]">
      <div className="container mx-auto px-24">
        <div className="text-center mb-20">
          <span className="inline-flex items-center mb-4">
            <svg width="30" height="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="5"
                x2="30"
                y2="5"
                stroke="#fff"
                stroke-width="2"
              />
            </svg>
            <span className="text-[18px] text-[#f30474] font-[600] mx-3 ">
              What We Offer
            </span>
            <svg width="30" height="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="5"
                x2="30"
                y2="5"
                stroke="#f30474"
                stroke-width="2"
              />
            </svg>
          </span>
          <h2 className="text-5xl leading-[1.1]">
            Our Latest News Blog Articles & Tips
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <h3 className="text-3xl mb-4">
              5 Signs Your Home Needs a Fresh Coat of Paint
            </h3>
            <div>
              <div className="mb-4">
                <img
                  src="blog/slider-7.jpg"
                  alt=""
                  className="w-full h-full overflow-hidden"
                />
              </div>
              <div>
                <p>
                  Is the interior or exterior painting of your home looking a
                  little worn out? A fresh coat of paint can renew your space
                  and protect it from damage. Here are some key signs it’s time
                  to repaint your home,
                </p>
                <Link to={"/blog"}>Read more</Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl mb-4">
              5 Signs Your Home Needs a Fresh Coat of Paint
            </h3>
            <div>
              <div className="mb-4">
                <img
                  src="blog/slider-7.jpg"
                  alt=""
                  className="w-full h-full overflow-hidden"
                />
              </div>
              <div>
                <p>
                  Is the interior or exterior painting of your home looking a
                  little worn out? A fresh coat of paint can renew your space
                  and protect it from damage. Here are some key signs it’s time
                  to repaint your home,
                </p>
                <Link to={"/blog"}>Read more</Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl mb-4">
              5 Signs Your Home Needs a Fresh Coat of Paint
            </h3>
            <div>
              <div className="mb-4">
                <img
                  src="blog/slider-7.jpg"
                  alt=""
                  className="w-full h-full overflow-hidden"
                />
              </div>
              <div>
                <p>
                  Is the interior or exterior painting of your home looking a
                  little worn out? A fresh coat of paint can renew your space
                  and protect it from damage. Here are some key signs it’s time
                  to repaint your home,
                </p>
                <Link to={"/blog"}>Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
