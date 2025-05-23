import { Outlet } from "react-router-dom";
export default function Main() {
  return (
    <div>
      <div className="md:grid md:grid-cols-[2fr_6fr_4fr] px-8 items-center bg-[#fff] sticky top-0 z-50">
        <div className="md:px-3">
          <img src="" alt="logo icon" className="h-[55px] w-[168px]" />
        </div>
        <div className="md:px-3">
          <ul className="px-3 flex gap-5 py-8">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">About</a>
            </li>
            <li className="">
              <a href="#">Services</a>
            </li>
            <li className="">
              <a href="#">Portfolio</a>
            </li>
            <li className="">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="md:px-3">
          <ul className="flex gap-3.5 md:justify-end">
            <li>
              <a
                href="#"
                target="_blank"
                className="text-[#f30474] bg-orange-200 h-10 w-10 flex items-center justify-center"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="text-[#f30474] bg-orange-200 h-10 w-10 flex items-center justify-center"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="text-[#f30474] bg-orange-200 h-10 w-10 flex items-center justify-center"
              >
                <i class="fab fa-google"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-orange-200">
        <ul className="flex px-8 py-4 gap-8 font-normal justify-end">
          <li className="flex gap-1.5 items-center">
            <i className="fa fa-map-marker-alt text-red-500"></i>
            <a href="#"> Texas, United States</a>
          </li>
          <li className="flex gap-1.5 items-center ">
            <i className="fa fa-envelope text-red-500"></i>
            <a href="#">dapsonpainting@gmail.com</a>
          </li>
          <li className="flex gap-1.5 items-center">
            <i class="fa fa-phone  text-red-500"></i>
            <a href="#"> +1 xxx xxx xxx</a>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
