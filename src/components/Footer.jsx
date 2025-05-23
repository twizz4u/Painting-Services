export default function Footer() {
  return (
    <section className="bg-gray-700 text-[#fff] py-10">
      <div className="container grid grid-cols-3 mx-auto px-6 gap-8">
        <div>
          <h2 className="my-4 text-2xl">Quick Links</h2>
          <ul className="flex flex-col gap-3.5">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Portifolio</a>
            </li>
            <li>
              <a>Blog Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="my-4 text-2xl">Get in Touch</h2>
          <ul>
            <li className="flex gap-3.5">
              <span>icon</span>
              <div>
                <h3>Location</h3>
                <span>750 Dunagan Forest Dr, Lawrenceville, GA 30045, USA</span>
              </div>
            </li>
            <li className="flex gap-3.5">
              <span>icon</span>
              <div>
                <h3>Email Us</h3>
                <span>dapson@gmail.com</span>
              </div>
            </li>
            <li className="flex gap-3.5">
              <span>icon</span>
              <div>
                <h3>Phone Us</h3>
                <span>080xxxxxx</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="my-4 text-2xl">About Company</h2>
          <p className=" leading-[1.7]">
            At The Paint Masters, we transform your home or business by
            providing top-notch custom made painting solutions. Offering
            residential, commercial, and specialty painting services, delivering
            quality, affordable, and lasting results.
          </p>
        </div>
      </div>
    </section>
  );
}
