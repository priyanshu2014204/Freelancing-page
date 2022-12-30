import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";


const Home = () => {
  return (
    <>
      <div className="home" id="home" >
        <main>
          <h1>Priyanshu</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>
      <div className="home2">
        <img
          src="https://raw.githubusercontent.com/meabhisingh/react-techystar/master/src/assets/2.webp"
          alt="Grahics"
        />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quibusdam hic voluptatem ipsum quae eius excepturi libero, ab,
            tempora, doloremque autem officia! Doloribus provident laudantium
            in, maxime debitis, cumque perspiciatis ad fugiat veritatis quisquam
            iure optio distinctio aperiam ipsum suscipit illo esse blanditiis
            ullam fuga accusantium! Atque voluptate fuga nemo!
          </p>
        </div>
      </div>


      <div className="home4" id="brands">
        <div>
        <h1>Brands</h1>
            <article>

                <div style={{animationDelay:"1s"}}>
                    <AiFillGoogleCircle></AiFillGoogleCircle>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillAmazonCircle></AiFillAmazonCircle>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillYoutube></AiFillYoutube>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillInstagram></AiFillInstagram>
                    <p>Instagram</p>
                </div>
            </article>
         
        </div>
      </div>
    </>
  );
};

export default Home;
