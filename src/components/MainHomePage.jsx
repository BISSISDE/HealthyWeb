import { useState } from "react";
import "../App.css"
import kisspng from '../assets/kisspng-computer-icons-clip-art-portable-network-graphics-pair-of-blue-stars-icons-bing-images-5b6a2433842ed3.8835517515336827395414-removebg-preview__1_-removebg-preview.png'
import { useTheme } from "../context/ThemeContext";
import brain from '../assets/brain.png'
import gym from "../assets/dumbbell.png"
import action from "../assets/action-plan.png"
import logic from "../assets/psychological-education.png"
const BisbenOzger = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { theme } = useTheme();
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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

  const faqs = [
    {
      question: "How to start a healthy morning?",
      answer:
        "Begin with light stretching, hydration, and a nutrient-rich breakfast. Keep your mind calm with meditation or a short walk.",
    },
    {
      question: "What food is best for energy?",
      answer:
        "Whole grains, bananas, eggs, and nuts are excellent for sustained energy throughout the day.",
    },
    {
      question: "How often should I exercise?",
      answer:
        "Aim for at least 30 minutes of moderate activity 5 times a week, like walking, swimming, or dancing.",
    },
    {
      question: "What helps improve sleep quality?",
      answer:
        "Avoid screens before bed, maintain a regular sleep schedule, and create a relaxing bedtime routine.",
    },
    {
      question: "What helps improve sleep quality?",
      answer:
        "Avoid screens before bed, maintain a regular sleep schedule, and create a relaxing bedtime routine.",
    },
    {
      question: "What helps improve sleep quality?",
      answer:
        "Avoid screens before bed, maintain a regular sleep schedule, and create a relaxing bedtime routine.",
    },
  ];

  return (
    <div>
      <main
        className={` font-sans -mt-30 ${
          theme === "dark" ? "!bg-black !text-white" : "!bg-white !text-black"
        }`}
      >
        <section className="text-center my-24 pt-30 flex justify-start items-center px-10 py-10 gap-12">
          <h1
            className={`text-5xl w-[700px] text-right font-bold tracking-[2px] ${
              theme === "dark"
                ? "!bg-black !text-white"
                : "!bg-white !text-black"
            }`}
          >
            Making the day beneficial and appreciating with Chiropractic
          </h1>
          <p className="!text-3xl text-left">
            Reclaim your energy and we support your unique health needs and
            lifestyle.
          </p>
        </section>

        <section className="relative">
          <div className="flex m-9">
            <img
              className="w-[470px] h-[470px] mx-3 rounded-lg"
              src="https://i.pinimg.com/736x/bb/87/7e/bb877e132ce41ceb491832f73845bc4a.jpg"
              alt=""
            />
            <img
              className="w-[470px] h-[470px] mx-3 rounded-lg"
              src="https://i.pinimg.com/736x/b6/f1/9a/b6f19a0d478e686799d4c14ff4897638.jpg"
              alt=""
            />
            <img
              className="w-[470px] h-[700px] mx-3 rounded-lg"
              src="https://i.pinimg.com/736x/c7/e6/fe/c7e6fe155f70146883f0d72a1a1e90b2.jpg"
              alt=""
            />
          </div>
          <div className="font-['Lobster'] tracking-wider rounded-lg w-[960px] h-45 bg-blue-600 ml-12 mr-3 absolute bottom-0 flex items-center">
            <div className="flex justify-center items-center w-48 h-72">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pierre-Jean_de_B%C3%A9ranger_1847.jpg/800px-Pierre-Jean_de_B%C3%A9ranger_1847.jpg"
                alt=""
                className="w-28 h-28 rounded-xl"
              />
            </div>
            <div
              className="flex flex-col gap-2 
 "
            >
              <h1 className="!text-2xl ">Pierre-Jean de Béranger</h1>
              <p className="text-lg text-gray-400">
                French poet and songwriter
              </p>
            </div>
            <div>
              <p className="w-80 !ml-10 tracking-wider">
                « The best investment is in your health, because health is the
                most valuable thing we have. »
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center gap-5 mt-12">
          <img src={kisspng} alt="" className="w-12 h-12 rounded-lg" />
          <div className="rounded-3xl h-12 bg-[rgba(255,255,255,0.094)] bg-opacity-10 flex justify-center items-center px-4 ">
            <p className="tracking-wider text-darkblue">
              <strong className={"!text-blue"}>Over 1,7K+ </strong>Satisfied
              Customers
            </p>
          </div>
        </section>

        <section className="links">
          <div className="w-full flex justify-center">
            <h1 className="text-6xl text-white mt-80 font-black tracking-[2px] w-[800px] text-center">
              Coverage Solution for Every Requirement
            </h1>
          </div>
          <div className="flex justify-center items-center gap-10 mt-24 flex-wrap">
            <div className="bg-[rgb(24,24,27)] border border-[rgb(39,39,42)] rounded-xl p-5 w-[600px] h-[550px]">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mt-5 mb-5">
                <img src={gym} alt="Icon" className="w-12 h-12" />
              </div>
              <hr className="border border-[rgb(39,39,42)] rounded-full w-[600px] -ml-5 shadow-lg mt-10" />
              <div className="p-5 pt-19">
                <div
                  className={`text-2xl font-semibold mb-2 ${
                    theme === "dark" ? "!text-black" : "!text-white"
                  }`}
                >
                  Bye a book
                </div>
                <div className="text-xl text-gray-400 leading-relaxed mb-4">
                  Books by Azamat Skakov offer practical guidance for personal
                  growth and achieving life goals. His books provide clear methods and motivational insights to
                  unlock your full potential.
                </div>
                <a
                  href="/book"
                  className="text-xl text-gray-400 no-underline inline-flex items-center gap-1 hover:text-white"
                >
                  Learn more →
                </a>
              </div>
            </div>

            <div className="bg-[rgb(24,24,27)] border border-[rgb(39,39,42)] rounded-xl p-5 w-[600px] h-[550px]">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mt-5 mb-5">
                <img src={action} alt="Icon" className="w-12 h-12" />
              </div>
              <hr className="border border-[rgb(39,39,42)] rounded-full w-[600px] -ml-5 shadow-lg mt-10" />
              <div className="p-5 pt-24">
                <div
                  className={`text-2xl font-semibold mb-2 ${
                    theme === "dark" ? "!text-black" : "!text-white"
                  }`}
                >
                  Daily Routine Planning
                </div>
                <div className="text-xl text-gray-400 leading-relaxed mb-4">
                  Balanced daily habits crafted to align your schedule with
                  health, productivity, and rest - helping you stay consistent
                  and motivated.
                </div>
                <a
                  href="/planner"
                  className="text-xl text-gray-400 no-underline inline-flex items-center gap-1 hover:text-white"
                >
                  Learn more →
                </a>
              </div>
            </div>

            <div className="bg-[rgb(24,24,27)] border border-[rgb(39,39,42)] rounded-xl p-5 w-[600px] h-[550px]">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mt-5 mb-5">
                <img
                  src={logic}
                  alt="Icon"
                  className="w-12 h-12"
                />
              </div>
              <hr className="border border-[rgb(39,39,42)] rounded-full w-[600px] -ml-5 shadow-lg mt-10" />
              <div className="p-5 pt-24">
                <div
                  className={`text-2xl font-semibold mb-2 ${
                    theme === "dark" ? "!text-black" : "!text-white"
                  }`}
                >
                  Logic Games
                </div>
                <div className="text-xl text-gray-400 leading-relaxed mb-4">
                  Brain-boosting puzzles and games designed to improve memory,
                  focus, and problem-solving skills — making mental fitness both
                  fun and rewarding.
                </div>
                <a
                  href="/logicGames"
                  className="text-xl text-gray-400 no-underline inline-flex items-center gap-1 hover:text-white"
                >
                  Learn more →
                </a>
              </div>
            </div>

            <div className="bg-[rgb(24,24,27)] border border-[rgb(39,39,42)] rounded-xl p-5 w-[600px] h-[550px]">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mt-5 mb-5">
                <img src={brain} alt="Icon" className="w-12 h-12" />
              </div>
              <hr className="border border-[rgb(39,39,42)] rounded-full w-[600px] -ml-5 shadow-lg mt-10" />
              <div className="p-5 pt-24">
                <div
                  className={`text-2xl font-semibold mb-2 ${
                    theme === "dark" ? "!text-black" : "!text-white"
                  }`}
                >
                  Mind Care
                </div>
                <div className="text-xl text-gray-400 leading-relaxed mb-4">
                  Mental wellness practices including mindfulness, stress
                  relief, and focus-building strategies to strengthen your mind
                  and emotional balance.
                </div>
                <a
                  href="/ai"
                  className="text-xl text-gray-400 no-underline inline-flex items-center gap-1 hover:text-white"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-row rounded-2xl w-full mt-48 p-10 items-center">
          <div className="flex-1">
            <img
              src="https://i.pinimg.com/736x/44/1e/85/441e8559a94328a48d7149fd645eb10b.jpg"
              alt="Healthy Lifestyle"
              className="w-[90%] h-[700px] object-cover border-2 border-white rounded-2xl"
            />
          </div>

          <div className="flex-1 ml-[-15px] p-2 flex flex-col gap-7 justify-center">
            <div className="flex gap-5 items-center">
              <div className="bg-blue-600 p-5 rounded-xl w-96 h-48 text-center">
                <p className="text-3xl mt-11 font-bold">14+</p>
                <p className="text-sm mt-1">Жыл зерттеу</p>
              </div>
              <div className="text-gray-400 text-base border-2 border-gray rounded-2xl h-48 items-center flex p-5 leading-relaxed">
                Салауатты өмір салты – бұл соңғы 14 жылдан астам уақыт бойы
                зерттеліп келе жатқан тақырып. Фитнес, дұрыс тамақтану және
                менталдық саулық адамның өмір сапасын жақсартады.
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="bg-blue-600 p-5 rounded-xl w-96 h-48 text-center">
                <p className="text-3xl mt-11 font-bold">100%</p>
                <p className="text-sm mt-1">Ғылыми негіз</p>
              </div>
              <div className="text-gray-400 text-base border-2 border-gray rounded-2xl h-48 items-center flex p-5 leading-relaxed">
                Ғылыми зерттеулер физикалық белсенділік, зейін мен дұрыс
                тамақтануды біріктіру жалпы өмір сапасын арттыратынын
                дәлелдейді.
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="bg-blue-600 p-5 rounded-xl w-96 h-48 text-center">
                <p className="text-3xl mt-11 font-bold">75+</p>
                <p className="text-sm mt-1">Мысалдар</p>
              </div>
              <div className="text-gray-400 text-base border-2 border-gray rounded-2xl h-48 items-center flex p-5 leading-relaxed">
                75-тен астам нақты жағдайлар – жаттығу, теңгерімді тамақтану
                және ұйқы тәртібін сақтау секілді пайдалы әдеттердің денсаулыққа
                оң әсерін көрсетеді.
              </div>
            </div>
          </div>
        </div>

        <section className="flex justify-center items-center gap-5 mt-12">
          <img src={kisspng} alt="" className="w-12 h-12 rounded-lg" />
          <div className="rounded-3xl h-12 bg-[rgba(255,255,255,0.094)] bg-opacity-10 flex justify-center items-center px-4">
            <p className="tracking-wider text-darkblue">
              <strong>Over 1,7K+ </strong>Satisfied Customers
            </p>
          </div>
        </section>

        <section className="faq">
          <h1 className="text-5xl font-bold mt-48 mb-8 text-center">
            Healthy Lifestyle Questions
          </h1>

          <div className="grid grid-cols-2 gap-5 px-24 py-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-700 rounded-xl overflow-hidden transition-all ${
                  activeFaq === index ? "active" : ""
                }`}
              >
                <div
                  className="p-5 text-2xl flex justify-between items-center h-20 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="text-2xl transition-transform">
                    {activeFaq === index ? "+" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all ${
                    activeFaq === index ? "h-30" : "h-0"
                  }`}
                  style={{
                    padding: activeFaq === index ? "10px 20px 20px" : "0 20px",
                  }}
                >
                  <div className="text-xl">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BisbenOzger;
