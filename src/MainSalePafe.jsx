const MainContent = () => {
  return (
    <main>
      <div className="title">
        <h1>
          Affordable book for <br />
          change your life!
        </h1>
      </div>

      <section className="books">
        <div className="pricing-section"></div>
      </section>

      <section className="Customers">
        <img
          src="./kisspng-computer-icons-clip-art-portable-network-graphics-pair-of-blue-stars-icons-bing-images-5b6a2433842ed3.8835517515336827395414-removebg-preview__1_-removebg-preview.png"
          alt="Customers"
        />
        <div className="CustomersInside">
          <p>
            <strong>Over 1,7K+ </strong>Satisfied Customers
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="image-side">
            <img
              src="https://6f2859a7-8667-4b05-9978-a8922e29bf1f.selstorage.ru/INST:17841409000825258?time=1722764540"
              alt="Author"
            />
          </div>

          <div className="text-side"></div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
