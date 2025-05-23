export default function Contacts() {
  return (
    <section className="contact bg-orange-400 text-[#fff] py-32 px-24">
      <div className="container grid grid-cols-2 gap-9 mx-auto">
        <div>
          <div className="mb-8">
            <span className="inline-flex items-center justify-center gap-3 text-[18px] mb-3.5">
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
              Get in Touch
            </span>
            <h2 className="text-4xl leading-[1.1]">
              Transform your space with expert craftsmanship and stunning
              color—reach out to Dapson Painting for a complimentary estimate
              today.
            </h2>
          </div>
          <div className="">
            <form action="">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="outline-0 h-16 w-full pl-9 pr-16 text-2xl leading-[71px] border-2 border-neutral-50/40 placeholder-[#fff] font-[400] mb-2.5"
                />
                <div className="absolute  left-[90%] top-[43%]  -translate-y-1/2">
                  <i class="far fa-user"></i>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Email Adress"
                  className="outline-0 h-16 w-full pl-9 pr-16 text-2xl leading-[71px] border-2 border-neutral-50/40 border-[rgba(255, 255, 255, 0.25)] placeholder-[#fff] font-[400] mb-2.5"
                />
                <div className="absolute  left-[90%] top-[43%]  -translate-y-1/2">
                  <i class="far fa-envelope"></i>
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  className="w-full mb-2.5 text-2xl border-2 border-neutral-50/40 border-[rgba(255, 255, 255, 0.25)] placeholder-[#fff] px-9 py-8 h-36 resize-none"
                ></textarea>
              </div>
              <button className="h-16 px-20 leading-16 text-[#f30474] bg-[#fff]">
                send message
              </button>
            </form>
          </div>
        </div>
        <div className=" justify-self-center rounded-3xl overflow-hidden self-start">
          <img
            src="contact/paint-2.jpg"
            alt=""
            className="w-full h-full overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
