import React from "react";
import vg from "../assets/vg.png";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>The Techieee...</h1>
          <p>One stop solution to all your problems</p>
        </main>
      </div>

      <div className="details">
        <img src={vg} alt="graphics" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa
          maxime quisquam ratione reiciendis illum nisi in vero sapiente
          accusantium. At labore aut fugiat aliquid aliquam error nihil
          delectus, ratione eos voluptas sapiente?
        </p>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga odio,
            iure non cumque recusandae animi, dolorem dolore eveniet ut quasi,
            sapiente tempore aspernatur. Possimus quisquam perspiciatis ex error
            nisi maiores quos nulla fuga officiis praesentium, necessitatibus
            at. Deleniti necessitatibus omnis amet quis voluptates, ipsum
            suscipit odio consectetur temporibus quam tenetur eligendi provident
            hic quia cum est quaerat sit tempore? Enim harum quam reprehenderit
            magnam omnis cumque, suscipit tenetur dicta praesentium debitis.
            Repudiandae neque consectetur porro, ea architecto aperiam suscipit
  
  


          </p>
        </div>
      </div>


      <div className="home4" id="brands">

        <div>
        <h1>brands</h1>

        <article>
            <div style={{
                animationDelay: "0.3s",
            }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{
                animationDelay: "0.5s",
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay: "0.7s",
            }}>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay: "0.9s",
            }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>

        </article>
        </div>
      </div>
    </>
  );
};

export default Home;
