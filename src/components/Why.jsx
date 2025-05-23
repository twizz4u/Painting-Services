export default function Why() {
  return (
    <section className="bg-[#f8f4ef]">
      <div className="container grid grid-cols-2 mx-auto px-24 gap-14">
        <div>
          <img src="why/why2.jpg" alt="" />
        </div>
        <div className="py-6 pr-6">
          <div className="mb-7">
            <span className="inline-flex items-center justify-center gap-3 text-[18px] mb-3.5">
              <svg width="30" height="10" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0"
                  y1="5"
                  x2="30"
                  y2="5"
                  stroke="rgb(103, 122, 133)"
                  stroke-width="2"
                />
              </svg>
              Know About Us
            </span>
            <h2 className="text-5xl leading-[1.1]">
              What Sets Dapson Painting Apart
            </h2>
          </div>
          <p className="mb-8">
            From refreshing your indoor spaces to protecting your exterior with
            a strong, lasting coat, we're here to handle it all.
          </p>
          <div className="list_items flex flex-col gap-4">
            <div className="flex gap-7">
              <div className="shrink-0">
                <img src="why/why-icon-1.png" alt="" />
              </div>
              <div className="">
                <h3 className="text-2xl mb-3">Skilled Craftsmanship</h3>
                <p>
                  Our team combines years of experience with attention to
                  detail, ensuring every project meets the highest standards of
                  quality and finish.
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <div className="shrink-0">
                <img src="why/why-icon-2.png" alt="" />
              </div>
              <div className="">
                <h3 className="text-2xl mb-3">Customer-First Approach</h3>
                <p>
                  From the first consultation to the final walkthrough, your
                  satisfaction is our top priority. We tailor every job to your
                  needs and vision.
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <div className="shrink-0">
                <img
                  src="why/why-icon-5.png"
                  alt=""
                  className=" h-[80px] w-[80px]"
                />
              </div>
              <div className="">
                <h3 className="text-2xl mb-3"> Reliable & On-Time</h3>
                <p>
                  We respect your time and property. Our team arrives on
                  schedule and completes projects efficiently without
                  compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
