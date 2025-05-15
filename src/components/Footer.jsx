import { useState } from "react";
import "../App.css";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images-removebg-preview.png"
import facebook from "../assets/facebook (1).png"
import inn from "../assets/social.png"
import instagram from "../assets/social.png"
import twitter from "../assets/twitter (1).png"
const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { theme } = useTheme();

  const formatPhone = (e) => {
    let phone = e.target.value.replace(/\D/g, "");
    let formattedPhone = phone;

    if (phone.length <= 11) {
      formattedPhone = "+" + phone.slice(0, 1);
      formattedPhone += "(" + phone.slice(1, 4) + ")";
      formattedPhone += phone.slice(4, 7);
      formattedPhone += "-" + phone.slice(7, 9);
      formattedPhone += "-" + phone.slice(9, 11);
    }

    setPhoneNumber(formattedPhone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.replace(/\D/g, "").length === 11) {
      setErrorMessage("Thanks, please wait for our message");
    } else {
      setErrorMessage("Number is not included");
    }
    setPhoneNumber("");
  };

  return (
    <footer
      className={`pt-48 px-8 pb-8 text-xl transition-colors duration-300
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <section className="subscribe">
        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-center items-center"
        >
          <div className="bg-blue-700 p-10 rounded-2xl w-[1400px] flex justify-center items-center gap-5 mb-36">
            <div className="max-w-[500px]">
              <div className="text-2xl font-bold flex items-center gap-2 ">
                <img className="w-8 h-8 rounded-full" src={logo} alt="Logo" />
                BisbenOzger
              </div>
              <div className="my-5 text-xl leading-relaxed text-gray-300">
                Discover balance and energy through mindful habits and daily
                wellness practices.
              </div>
              <div className="flex gap-4 mt-12 flex-row">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="bg-white w-10 h-10 rounded-full"
                />
                <img
                  src={inn}
                  alt="Social"
                  className="bg-white w-10 h-10 rounded-full"
                />
                <img
                  src={instagram}
                  alt="Social"
                  className="bg-white w-10 h-10 rounded-full"
                />
                <img
                  src={twitter}
                  alt="Twitter"
                  className="bg-white w-10 h-10 rounded-full"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[300px]">
              <div className="text-xl font-bold mb-5">
                Join our newsletter for weekly lifestyle tips.
              </div>
              <div className="bg-[rgba(84,118,253,0.404)] bg-opacity-40 p-7 rounded-xl">
                <div className="bg-[rgb(62,101,255)] p-5 rounded-xl flex items-center justify-between w-full border border-[rgba(255,255,255,0.259)] border-opacity-25 h-16">
                  <input
                    type="text"
                    id="number"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={formatPhone}
                    className="flex-1 bg-transparent border-none text-gray-200 text-base p-2 outline-none placeholder-gray-200 placeholder-opacity-80"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black font-bold py-2 px-6 rounded-xl ml-3 h-12 text-center"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <p
                className={`mt-3 ${
                  errorMessage.includes("Thanks")
                    ? "text-green-500 font-black"
                    : "text-red-500"
                }`}
              >
                {errorMessage}
              </p>
              <div className="text-sm text-gray-300 text-opacity-85 mt-5">
                By clicking 'Subscribe' you agree to our{" "}
                <a href="#" className="text-blue-900 underline">
                  Wellness Policy
                </a>
                .
              </div>
            </div>
          </div>
        </form>
      </section>

      <div className="flex flex-wrap gap-10 max-w-6xl mx-auto">
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-bold mb-11">Navigation</h3>
          <ul>
            {[
              "Home",
              "About",
              "Team",
              "Services",
              "Pricing",
              "Articles",
              "Contact",
            ].map((item) => (
              <li className="mb-8" key={item}>
                <a
                  href="#"
                  className={`no-underline hover:opacity-70 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h3 className="font-bold mb-11">CMS Pages</h3>
          <ul>
            {[
              "Blog Post Page",
              "Blog Categories",
              "Plan Page",
              "Categories Plan",
              "Services Page",
            ].map((item) => (
              <li className="mb-8" key={item}>
                <a
                  href="#"
                  className={`no-underline hover:opacity-70 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h3 className="font-bold mb-11">Essential Pages</h3>
          <ul>
            {[
              "Style-Guide",
              "Licenses",
              "Changelog",
              "404 Page",
              "Password Page",
            ].map((item) => (
              <li className="mb-8" key={item}>
                <a
                  href="#"
                  className={`no-underline hover:opacity-70 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h3 className="font-bold mb-11">Account</h3>
          <ul>
            {["Sign up", "Log in", "Reset password", "User account"].map(
              (item) => (
                <li className="mb-8" key={item}>
                  <a
                    href="#"
                    className={`no-underline hover:opacity-70 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mb-10 w-full">
        <div
          className={`border rounded-2xl mt-10 py-5 px-6 flex flex-col items-center text-lg text-center w-[90%]
          ${
            theme === "dark"
              ? "border-white border-opacity-70 text-gray-400"
              : "border-black border-opacity-30 text-gray-600"
          }`}
        >
          <p>
            Copyright © BisbenOzger | Designed with ❤️ by
            <a
              href="#"
              className={
                theme === "dark"
                  ? "text-white no-underline"
                  : "text-black no-underline"
              }
            >
              {" "}
              Aiganym
            </a>
          </p>
          <p>Powered by Aiganym</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
