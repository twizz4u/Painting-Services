import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="service py-32 relative">
      <div className="container mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-flex items-center mb-4">
            <svg width="30" height="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="5"
                x2="30"
                y2="5"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
            <span className="text-[18px] font-[600] mx-3 ">What We Offer</span>{" "}
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
          </span>
          <h2 className="text-5xl leading-[1.1]">Our Services</h2>
        </div>
        <div className="services-box grid grid-cols-3 gap-x-6">
          <div className="relative">
            <div className="rounded-tr-2xl rounded-tl-2xl overflow-x-hidden">
              <img src="service/3_4.jpeg" alt="" className="h-[400px] w-full" />
            </div>
            <div className="bg-[#fff] text-center p-7 [box-shadow:0px_10px_60px_0px_rgba(224,224,224,0.4)]">
              <div className="text-3xl mb-3 bg-orange-300 text-[#fff] w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-2xl">
                <i class="fi fi-rs-fill"></i>
              </div>
              <h3 className="mb-3 text-[22px]">Residential Painting</h3>
              <div className="mb-8">
                <b className="block font-[600] mb-3">
                  Transform your home with colors that reflect your style.
                </b>
                <p className="mb-2 leading-[28px]">
                  From cozy bedrooms to full exteriors, we specialize in
                  enhancing your home’s beauty and value. Whether you're
                  updating a single wall or renovating the entire house, our
                  team ensures a flawless finish with minimal disruption to your
                  daily life.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-tr-2xl rounded-tl-2xl overflow-x-hidden">
              <img src="service/5.jpeg" alt="" className="h-[400px] w-full" />
            </div>
            <div className="bg-[#fff] text-center p-7 [box-shadow:0px_10px_60px_0px_rgba(224,224,224,0.4)]">
              <div className="text-3xl mb-3 bg-orange-300 text-[#fff] w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-2xl">
                <i class="fi fi-rs-fill"></i>
              </div>
              <h3 className="mb-3 text-[22px]">Commercial Painting</h3>
              <div className="mb-9">
                <p className="mb-2 leading-[28px]">
                  <b className="block font-[600] mb-3">
                    Professional painting solutions that match your business
                    image.
                  </b>
                  Create a lasting impression on clients and employees with
                  clean, modern finishes. We handle everything from office
                  interiors to retail storefronts, delivering on-time, on-budget
                  results that elevate your brand’s presence.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-tr-2xl rounded-tl-2xl overflow-x-hidden">
              <img src="service/2_1.jpeg" alt="" className="h-[400px] w-full" />
            </div>
            <div className="bg-[#fff] text-center p-7 [box-shadow:0px_10px_60px_0px_rgba(224,224,224,0.4)]">
              <div className="text-3xl mb-3 bg-orange-300 text-[#fff] w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-2xl">
                <i class="fi fi-rr-paint-roller"></i>
              </div>
              <h3 className="mb-3 text-[22px]">
                Specialty Finishes & Custom Work
              </h3>
              <div className="mb-8">
                <b className="block mb-3 font-[600]">
                  Bring your creative vision to life with unique textures and
                  finishes.
                </b>
                <p className="mb-2 leading-[28px]">
                  Looking for something beyond standard paint? We offer faux
                  finishes, accent walls, murals, textured coatings, and more.
                  Perfect for feature walls, showrooms, or personalizing any
                  space with a touch of artistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
