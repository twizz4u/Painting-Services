export default function Statistics() {
  return (
    <section className="statistics px-24 my-24 bg-[url('/counter/map-2.png')]">
      <div className="container grid grid-cols-2 mx-auto">
        <div className="wrapper">
          <div className="title-section mb-8">
            <span className="inline-flex items-center justify-center gap-3 text-[18px] text-[#677a85] mb-3.5">
              <svg width="30" height="10" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0"
                  y1="5"
                  x2="30"
                  y2="5"
                  stroke="#677a85"
                  stroke-width="2"
                />
              </svg>
              Company statistics
            </span>
            <h2>Serving Texas—and Beyond</h2>
          </div>
          <div className="count-info mb-4">
            <p className="leading-[28px]">
              Headquartered in Texas, Dapson Painting proudly serves clients
              across the Lone Star State, including Houston, Dallas, Austin, and
              San Antonio. Our reputation for quality and reliability has also
              led us to projects in neighboring states. Whether you're in the
              heart of Texas or just beyond its borders, we're here to deliver
              exceptional painting solutions wherever you need us.
            </p>
          </div>
          <div className="license-info flex gap-4">
            <icon>icon</icon>
            <p>Certified, Covered, and Authorized Across the Southeast</p>
          </div>
        </div>
        <div className="inline-flex  gap-6">
          <div>
            <img src="brand/brand-1.png" alt="" />
          </div>
          <div>
            <img src="brand/brand-22.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8">
        <div className="flex items-center flex-col w-full bg-[#fff] [box-shadow:0px_10px_60px_0_rgba(211,211,211,0.4)] px-16 pt-12 pb-10">
          <img src="counter/counter-1.png" alt="" className="mb-4" />
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl ">
              <span>1100</span>+
            </h2>
            <p>Project Completed</p>
          </div>
        </div>
        <div className="flex items-center flex-col w-full bg-[#fff] [box-shadow:0px_10px_60px_0_rgba(211,211,211,0.4)] px-16 pt-12 pb-10">
          <img src="counter/counter-2.png" alt="" className="mb-4" />
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl">
              <span>1100</span>+
            </h2>
            <p>Project Completed</p>
          </div>
        </div>
        <div className="flex items-center flex-col w-full bg-[#fff] [box-shadow:0px_10px_60px_0_rgba(211,211,211,0.4)] px-16 pt-12 pb-10 row-start-1 row-end-3">
          <img src="counter/counter-3.png" alt="" className="mb-4" />
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl">
              <span>1100</span>+
            </h2>
            <p>Project Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
