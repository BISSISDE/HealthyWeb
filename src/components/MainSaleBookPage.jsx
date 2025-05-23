import { useState } from "react";
import "./SaleBook.css";

const MainContent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");

  const handlePurchase = (bookName) => {
    setSelectedBook(bookName);
    setShowPopup(true);
  };

  return (
    <div className="bg-black text-white font-sans p-20 -mt-45">
      <main>
        <div className="title">
          <h1>
            Affordable book for <br />
            change your life!
          </h1>
        </div>

        <section className="books">
          <div className="pricing-section">
            {}
            <div className="card">
              <p className="subtitle">Simple payment</p>
              <h2>Men кітабы</h2>
              <p className="price">6 500 ₸</p>
              <p className="subtitle">Азамат Скаков</p>
              <p className="description">
                Бұл кітап адамның ішкі жан-дүниесін түсіну, эмоция мен ойларды
                басқару туралы.Автор жеке даму, өткенмен жұмыс істеу секілді
                тақырыптарды қозғайды.
              </p>
              <p className="includes">📙 MEN – What's Included:</p>
              <ul>
                <li>✔ Ішкі трансформацияға бастар мотивация</li>
                <hr />
                <li>✔ Күйзеліс пен мазасыздықты жеңу әдістері</li>
                <hr />
                <li>✔ Өзін-өзі тану құралдары</li>
              </ul>
              <button onClick={() => handlePurchase("Men")}>Сатып алу</button>
            </div>

            <div
              className="card special"
              style={{
                border: "blue 1px solid",
                paddingBottom: "40px",
                paddingTop: "40px",
              }}
            >
              <p className="subtitle">Reasonable payment</p>
              <h2>Sen + Men жинағы</h2>
              <p className="price">11 000 ₸</p>
              <p className="subtitle">Азамат Скаков</p>
              <p className="description">
                Актуалды тақырыптар : Әдет, тәртіп, өзін-өзі тану қазіргі жастар
                мен ересектерге ең керек дүниелер. Қарапайым тілмен жазылған ,
                Күрделі теория емес, нақты өмірге қажетті кеңестер.
              </p>
              <p className="includes">📦 SEN + MEN – What's Included:</p>
              <ul>
                <li>✔ Сыртқы тәртіп + Ішкі тыныштық</li>
                <hr />
                <li>✔ Әдет, тәртіп, эмоция – толық жүйе</li>
                <hr />
                <li>✔ Өзгерісті бүгін бастауға арналған комбо</li>
              </ul>
              <button onClick={() => handlePurchase("Sen + Men")}>
                Сатып алу
              </button>
            </div>

            <div className="card">
              <p className="subtitle">Simple payment</p>
              <h2>Sen кітабы</h2>
              <p className="price">6 500 ₸</p>
              <p className="subtitle">Азамат Скаков</p>
              <p className="description">
                Бұл кітап адам бойындағы жақсы әдеттерді қалай қалыптастыруға
                болады деген сұраққа жауап береді.
              </p>
              <p className="includes">📘 SEN – What's Included:</p>
              <ul>
                <li>✔ Жақсы әдеттерді қалыптастыру жүйесі</li>
                <hr />
                <li>✔ Жүйелі өмірге бағытталған кеңестер</li>
                <hr />
                <li>✔ Өнімділік пен фокус арттыру әдістері</li>
              </ul>
              <button onClick={() => handlePurchase("Sen")}>Сатып алу</button>
            </div>

            {showPopup && (
              <div className="popup">
                <div className="btnsWhatsApp">
                  <p>
                    {selectedBook} кітабын сатып алу үшін WhatsApp арқылы
                    хабарласыңыз:
                  </p>
                  <div className="btns">
                    <a
                      href="https://wa.me/77774894678"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="whatsapp-button with-icon">
                        <div className="svg-wrapper-1">
                          <svg
                            fill="#116e17"
                            width="30"
                            height="30"
                            className="icon"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 308 308"
                            xml:space="preserve"
                            stroke="#116e17"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <g id="XMLID_468_">
                                {" "}
                                <path
                                  id="XMLID_469_"
                                  d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                                ></path>{" "}
                                <path
                                  id="XMLID_470_"
                                  d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                                ></path>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                        </div>
                        <span>WhatsApp-қа өту</span>
                      </button>
                    </a>

                    <button
                      onClick={() => setShowPopup(false)}
                      className="learn-more"
                    >
                      Жабу
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="Customers">
          <img
            src="./kisspng-computer-icons-clip-art-portable-network-graphics-pair-of-blue-stars-icons-bing-images-5b6a2433842ed3.8835517515336827395414-removebg-preview__1_-removebg-preview.png"
            alt="Happy customers"
          />
          <div className="CustomersInside">
            <p>
              <strong>Over 1,7K+ </strong>Satisfied Customers
            </p>
          </div>
        </section>

        <section>
          <div class="AboutContain">
            <div class="image-side">
              <img
                src="https://6f2859a7-8667-4b05-9978-a8922e29bf1f.selstorage.ru/INST:17841409000825258?time=1722764540"
                alt=""
              />
            </div>

            <div class="text-side">
              <div class="stat-block">
                <div class="stat-box">
                  <p>10+</p>
                  <p>Жыл тәжірибе</p>
                </div>
                <div class="stat-text">
                  Азамат Скаков — тұлғалық даму мен менталдық тәртіп саласында
                  10 жылдан астам уақыт зерттеу жүргізіп келе жатқан автор. Оның
                  кітабы – тек теория емес, жылдар бойы сынақтан өткен
                  тәжірибелер мен нақты әдістердің жиынтығы.
                </div>
              </div>
              <div class="stat-block">
                <div class="stat-box">
                  <p>100%</p>
                  <p>Ғылыми негіз</p>
                </div>
                <div class="stat-text">
                  Бұл кітап – мотивация емес. Бұл — жоспар. Жаңа әдет
                  қалыптастыру, жалқаулықпен күресу, өзіңе шындықпен қарау — әр
                  тарау осыны негізге алады. Азамат Скаков тек "қалай" емес,
                  "неге" деген сұрақтың жауабын ұсынады. “Мақсат – финиш емес.
                  Ол — сенің мінезіңді қалыптастыратын орта.” — дейді автор.
                </div>
              </div>
              <div class="stat-block">
                <div class="stat-box">
                  <p>75+</p>
                  <p>Мысалдар</p>
                </div>
                <div class="stat-text">
                  Іс жүзінде дәлелденген. Кітапты оқығандар 3 аптада ерте тұруды
                  үйреніп, экран тәуелділігін азайтып, өміріне нақты бағыт
                  тапқан. “Өзгеріс – сенде. Бұл кітап – тек айна.”
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainContent;
