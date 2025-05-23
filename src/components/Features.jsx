export default function Features() {
  return (
    <section className="features bg-[url('/feature/features-bg-2.jpg')] bg-cover bg-no-repeat bg-[position:30%_50%] py-32">
      <div className="px-24">
        <span className="inline-flex items-center justify-center gap-3 text-[18px] text-[#000] mb-3.5">
          <svg width="30" height="10" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="5" x2="30" y2="5" stroke="#000" stroke-width="2" />
          </svg>
          Our Process
        </span>
        <h2 className="text-4xl mb-10">
          How We Deliver Excellence — The Dapson Painting Way
          <small className="block">
            See why homeowners and businesses across Texas trust our proven
            step-by-step process to bring their spaces to life.
          </small>
        </h2>
        <div className="px-3 grid w-[50%]">
          <div className="flex pr-10 mb-9 pb-9 border-b-2 border-[#dedede] gap-7">
            <span className="w-[100px] shrink-0  h-[100px] flex items-center justify-center bg-[#f8f4ef] rounded-full">
              <img src="/feature/icon/cleaning-products.png" alt="" />
            </span>
            <div>
              <h3 className="text-2xl mb-1">Initial Consultation</h3>
              <p>
                We begin with a free, no-obligation consultation to understand
                your goals, style preferences, and project scope. Whether it's a
                single room or a full commercial space, we take the time to
                listen and assess your needs.
              </p>
            </div>
          </div>
          <div className="flex pr-10 mb-9 pb-9 border-b-2 border-[#dedede]  gap-7">
            <span className="w-[100px] h-[100px] shrink-0  flex items-center justify-center bg-[#f8f4ef] rounded-full">
              <img src="/feature/icon/fea-1.png" alt="" />
            </span>
            <div>
              <h3 className="text-2xl mb-1">Detailed Estimate & Planning</h3>
              <p>
                After evaluating your space, we provide a transparent, itemized
                quote with timelines and recommendations. You’ll know exactly
                what to expect—no hidden fees, no surprises.
              </p>
            </div>
          </div>
          <div className="flex pr-10 mb-9 pb-9  border-b-2 border-[#dedede]  gap-7">
            <span className="w-[100px] h-[100px] shrink-0  flex items-center justify-center bg-[#f8f4ef] rounded-full">
              <img src="/feature/icon/fea-2.png" alt="" />
            </span>
            <div>
              <h3 className="text-2xl mb-1">Color & Design Guidance</h3>
              <p>
                Need help choosing the perfect color palette or finish? Our
                experts offer personalized design advice, color matching, and
                sample testing to ensure your vision becomes reality.
              </p>
            </div>
          </div>
          <div className="flex pr-10 mb-9 pb-9  border-b-2 border-[#dedede]  gap-7">
            <span className="w-[100px] h-[100px] shrink-0  flex items-center justify-center bg-[#f8f4ef] rounded-full">
              <img src="/feature/icon/fea-3.png" alt="" />
            </span>
            <div>
              <h3 className="text-2xl mb-1">Surface Preparation</h3>
              <p>
                Before we paint, we prep thoroughly. That includes cleaning,
                sanding, repairing minor surface flaws, and protecting furniture
                and floors. A great paint job starts with a perfect foundation.
              </p>
            </div>
          </div>
          <div className="flex pr-10  pb-9  border-b-2 border-[#dedede]  gap-7">
            <span className="w-[100px] h-[100px] shrink-0  flex items-center justify-center bg-[#f8f4ef] rounded-full">
              <img src="/feature/icon/fea-4.png" alt="" />
            </span>
            <div>
              <h3 className="text-2xl mb-1"> Final Walkthrough & Clean-Up</h3>
              <p>
                Once the painting is complete, we walk you through the finished
                project to ensure satisfaction. We handle all clean-up, leaving
                your space spotless and beautifully transformed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
