export default function Testimonial() {
  return (
    <section className="testimonial bg-[#f8f4ef] py-32 px-24">
      <div className="container mx-auto">
        <div className="mb-8">
          <span className="inline-flex items-center justify-center gap-3 text-[18px] mb-3.5">
            <svg width="30" height="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="5"
                x2="30"
                y2="5"
                stroke="#000"
                strokeWidth="2"
              />
            </svg>
            Testimonials
          </span>
          <h2 className="text-4xl leading-[1.1]">
            What Our Clients Say About Us
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-9">
          <div className="bg-[#fff] rounded-3xl p-8 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img
                src="testimonial/testimonial-1.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-[#f30474]">CEO, Company Name</p>
              </div>
            </div>
            <p className={""}>
              "The Paint Masters did an amazing job on our office. The team was
              professional, and the quality of work was top-notch. Highly
              recommend!"
            </p>
          </div>
          <div className="bg-[#fff] rounded-3xl p-8 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img
                src="testimonial/testimonial-1.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-[#f30474]">CEO, Company Name</p>
              </div>
            </div>
            <p className={""}>
              "The Paint Masters did an amazing job on our office. The team was
              professional, and the quality of work was top-notch. Highly
              recommend!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
