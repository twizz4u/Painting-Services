import styles from "../pages/style.module.css";
export default function About() {
  return (
    <section className={`About py-32`}>
      <div className="container mx-auto grid grid-cols-2 ">
        <div className="relative">
          <div className={`${styles["about-img"]} w-[65%] mx-auto `}>
            <img src="about/14.jpeg" alt="About section, painting image" />
          </div>
          <div className="absolute top-[55%] left-[32%] w-[38%] rounded-[50%] overflow-hidden border-[10px]  border-amber-50">
            <img src="about/2.jpeg" alt="About section2, painting image" />
          </div>
        </div>
        <div className="font-[600]">
          <span className="inline-flex items-center justify-center gap-3 text-[18px]  mb-3.5">
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
            About Us
          </span>
          <h2 className="text-5xl leading-[1.1] mb-6">
            Bringing Color and Craftsmanship to Texas Homes and Businesses
          </h2>

          <p className="mb-6 text-[18px] font-[500]">
            Expert Painting Services by Dapson Painting
          </p>

          <p className=" text-[18px] font-[500] text-[#2c3941] mb-2">
            At Dapson Painting, we transform spaces with precision and style
            through custom painting solutions tailored to your needs. Proudly
            serving homeowners and businesses across Texas—including Houston,
            Dallas, Austin, and surrounding areas—we deliver exceptional results
            that are built to last.
          </p>
          <p className=" text-[18px] font-[500] text-[#2c3941] mb-2">
            Our skilled painters use premium materials and expert techniques to
            achieve a flawless finish every time. From residential repaints and
            commercial upgrades to unique specialty finishes, Dapson Painting
            brings your vision to life with professionalism and care.
          </p>
        </div>
      </div>
    </section>
  );
}
