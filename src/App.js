import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, LayoutGroup, color, delay } from "framer-motion";
import "./App.css";
import NewsCards from "./cards";
import { BrowserRouter,Link,Route,Routes,useLocation } from "react-router-dom";
import BlogPost from "./blog";


const sections = [
  {
    image: "https://i.ibb.co/zVxnFBf5/1.png",
    text: "Plongez dans l’univers enchanteur des produits 100% marocains, où tradition, savoir-faire et passion se rencontrent. Des trésors artisanaux aux bienfaits naturels, chaque création raconte une histoire et vous invite à vivre une expérience unique, riche en couleurs et en émotions. Bienvenue dans un voyage au cœur du Maroc !"
  },
  {
    image: "https://i.ibb.co/ycsf3zhp/2.png",
    text: "Le Maroc, terre de traditions et de savoir-faire ancestral, regorge de trésors authentiques qui racontent une histoire riche et envoûtante. Dans notre blog, nous vous invitons à explorer une sélection de produits 100% marocains, fabriqués avec passion et amour par des artisans locaux."
  },
  {
    image: "https://i.ibb.co/gMVDqPf2/4.png",
    text: "Des huiles d’argan précieuses, extraites des arganiers de la région de Souss, aux poteries berbères aux motifs hypnotisants, chaque produit incarne l’âme du Maroc. Laissez-vous séduire par les tapis tissés à la main, les lanternes en métal finement ciselées, ou encore les savons noirs purifiants, issus de recettes transmises de génération en génération."
  },
  {
    image: "https://i.ibb.co/MD9xQZX5/5.png",
    text: "Nous mettons en lumière des créations uniques, alliant tradition et modernité, pour vous offrir une expérience sensorielle inoubliable. Que ce soit pour sublimer votre intérieur, prendre soin de votre peau ou apporter une touche d’exotisme à votre quotidien, ces produits 100% marocains sont bien plus que de simples objets : ce sont des morceaux de culture à partager."
  },
  {
    image: "https://i.ibb.co/932P57BX/6.png",
    text: "Rejoignez-nous dans cette aventure et plongez au cœur du Maroc, où chaque produit raconte une histoire, chaque détail est une invitation au voyage."
  }
];
const Footer = () => {
  return (
    <motion.footer

    style={{
        backgroundColor: "#dc3545", // Red danger color
        color: "white", // White text for contrast
        textAlign: "center", // Center-align the text
        padding: "20px 0", // Add padding for spacing
        fontSize: "16px", // Set font size
        fontWeight: "bold", // Bold text
        fontFamily: "Arial, sans-serif", // Use a clean font
         // Fix the footer at the bottom
        left: "0",
        bottom: "0",
        width: "100%", // Full width
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
      }}
    >
      Développé par Lasmar Soufiane
    </motion.footer>
  );
};


// Navbar Component
const Navbar = () => {
  const location=useLocation();
  return (
    <motion.nav
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="navbar navbar-inverse"
  style={{
    backgroundColor: "rgb(247, 38, 38)",
    border: "none",
    borderRadius: "0",
    marginBottom: "0",
    position: "relative",padding:"20px"
  }}
>
  <div className="container-fluid" style={{ textAlign: "center" }}>
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target="#myNavbar"
        style={{ borderColor: "white", marginTop: "25px" }}
        aria-label="Toggle navigation"
      >
        <span className="icon-bar" style={{ backgroundColor: "white" }}></span>
        <span className="icon-bar" style={{ backgroundColor: "white" }}></span>
        <span className="icon-bar" style={{ backgroundColor: "white" }}></span>
      </button>
      <div style={{ width: "100px", height: "100px" }}></div>
      <a
        className="navbar-brand"
        href="#"
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "150px",
          height: "150px",
          overflow: "hidden",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 1000,
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
        <svg
             
             style={{ width: "100%", height: "100%" }}
             xmlns="http://www.w3.org/2000/svg"
             shapeRendering="geometricPrecision"
             textRendering="geometricPrecision"
             imageRendering="optimizeQuality"
             fillRule="evenodd"
             clipRule="evenodd"
             viewBox="0 0 424 512.324"
           >
             <motion.path

initial={{ pathLength: 0,opacity:0 }} // Start with no visible path
animate={{ pathLength: 1,opacity:1 }} transition={{
duration: 2, // Animation duration
ease: "easeInOut", repeat: Infinity,
repeatType: "reverse", }}  
stroke="white"  // Change from fill to stroke
strokeWidth="4"   // Ensure stroke is visible
fill="none" 
               d="M212.001 0c58.438 0 111.355 23.698 149.653 61.996 38.298 38.298 61.996 91.215 61.996 149.653 0 58.438-23.698 111.355-61.996 149.653-38.298 38.298-91.215 61.996-149.653 61.996-58.432 0-111.355-23.698-149.653-61.996C24.05 323.004.352 270.081.352 211.649c0-58.438 23.698-111.355 61.996-149.653C100.646 23.698 153.563 0 212.001 0z"
             />
             <motion.path  initial={{ pathLength: 0 }} // Start with no visible path
       animate={{ pathLength: 1 }} transition={{
         duration: 2, // Animation duration
         ease: "easeInOut", repeat: Infinity,
         repeatType: "reverse", }}
         stroke="white"  // Change from fill to stroke
         strokeWidth="4"   // Ensure stroke is visible
         fill="none" 
               d="M212.002 16.202c53.969 0 102.834 21.88 138.202 57.246 35.366 35.368 57.246 84.233 57.246 138.202 0 53.969-21.88 102.834-57.248 138.2-35.366 35.368-84.231 57.249-138.2 57.249-53.969 0-102.834-21.881-138.202-57.247-35.366-35.368-57.247-84.233-57.247-138.202 0-53.969 21.881-102.834 57.247-138.202 35.368-35.366 84.233-57.246 138.202-57.246z"
             />
             <motion.path
             initial={{ pathLength: 0 }} // Start with no visible path
             animate={{ pathLength: 1 }} transition={{
               duration: 2, // Animation duration
               ease: "easeInOut", repeat: Infinity,
               repeatType: "reverse", }}
               stroke="white"  // Change from fill to stroke
strokeWidth="4"   // Ensure stroke is visible
fill="none" 
               d="M276.739 378.484H147.265C80.453 352.539 33.087 287.629 33.087 211.65c0-98.814 80.101-178.915 178.915-178.915 98.812 0 178.915 80.101 178.915 178.915 0 75.979-47.366 140.889-114.178 166.834z"
             />
             <motion.path
             initial={{ pathLength: 0 }} // Start with no visible path
             animate={{ pathLength: 1 }} transition={{
               duration: 2, // Animation duration
               ease: "easeInOut", repeat: Infinity,
               repeatType: "reverse", }}
               stroke="green"  // Change from fill to stroke
strokeWidth="4"   // Ensure stroke is visible
fill="none" 
               d="M216.134 125.176l16.423 50.545h66.549l-53.84 39.117 20.558 63.272-53.822-39.104-53.822 39.104 20.558-63.272-53.84-39.117h66.548l20.556-63.266 4.132 12.721zm19.252 59.253l7.056 21.712 29.884-21.712h-36.94zm13.905 70.919l-11.418-35.138-18.473 13.421 29.891 21.717zm-14.244-43.835l-8.799-27.084h-28.493l-8.798 27.084 23.045 16.744 23.045-16.744zm-11.63-35.792l-11.415-35.136-11.418 35.136h22.833zm-18.813 57.91l-18.473-13.421-11.418 35.138 29.891-21.717zm-52.926-49.202l29.884 21.712 7.056-21.712h-36.94z"
             />
             <motion.path initial={{ pathLength: 0 }} // Start with no visible path
       animate={{ pathLength: 1 }} transition={{
         duration: 2, // Animation duration
         ease: "easeInOut", repeat: Infinity,
         repeatType: "reverse", }}
         stroke="white"  // Change from fill to stroke
         strokeWidth="4"   // Ensure stroke is visible
         fill="none" 
               d="M47.4 325.256h329.194c14.722 0 24.966 11.9 26.93 26.931L424 485.393c0 14.723-12.208 26.931-26.93 26.931H26.924C12.154 512.324 0 500.164 0 485.393l20.476-133.206c3.366-15.677 12.872-26.925 26.924-26.931z"
             />
             <motion.path initial={{ pathLength: 0 }} // Start with no visible path
       animate={{ pathLength: 1 }} transition={{
         duration: 2, // Animation duration
         ease: "easeInOut", repeat: Infinity,
         repeatType: "reverse", }}
         stroke="white"  // Change from fill to stroke
         strokeWidth="4"   // Ensure stroke is visible
         fill="none" 
               d="M45.496 336.16h333.01c7.763 0 13.032 6.753 14.136 14.136l20.478 136.993c1.104 7.391-6.651 14.136-14.136 14.136H25.026c-7.484 0-15.286-6.441-14.135-14.136l20.47-136.993c1.15-7.695 6.385-14.136 14.135-14.136z"
             />
             <motion.path 
         stroke="none"  // Change from fill to stroke
         strokeWidth="4"   // Ensure stroke is visible
         fill="black" 
               d="M128.699 400.619h-9.327v-38.38h11.418l6.217 20.506 6.216-20.506h11.42v38.38h-9.267v-24.39l-4.782 16.079h-7.173l-4.722-15.96v24.271zm50.273 0l-1.196-5.739h-9.206l-1.255 5.739h-10.283l9.863-38.38h12.734l9.865 38.38h-10.522zm-8.789-13.151h5.98l-2.929-13.81-3.051 13.81zm22.301-25.229h17.634c5.857 0 8.789 2.472 8.789 7.414v23.553c0 4.943-2.932 7.413-8.789 7.413h-17.634v-38.38zm15.959 30.188v-21.998c0-.876-.498-1.315-1.493-1.315h-4.005v24.629h4.005c.995 0 1.493-.437 1.493-1.316zm25.528.718h13.092v7.474H223.51v-38.38h23.016v7.473h-12.555v7.832h10.819v7.471h-10.819v8.13zm28.336-30.906h10.461v38.38h-10.461v-38.38zm32.759 0h9.565v38.38h-8.967l-8.547-20.146v20.146h-9.565v-38.38h8.967l8.547 20.506v-20.506z"
             />
             <motion.path
         stroke="none"  // Change from fill to stroke
         strokeWidth="4"   // Ensure stroke is visible
         fill="white" 
               d="M72.494 475.353h-13.06v-53.744h15.989l8.706 28.714 8.706-28.714h15.989v53.744H95.849v-34.155l-6.697 22.517H79.106l-6.612-22.349v33.987zm55.082-53.744h12.389c8.205 0 12.306 3.461 12.306 10.38v32.984c0 6.919-4.101 10.38-12.306 10.38h-12.389c-8.204 0-12.306-3.461-12.306-10.38v-32.984c0-6.919 4.102-10.38 12.306-10.38zm10.046 41.438v-29.132c0-1.228-.698-1.843-2.094-1.843h-3.515c-1.396 0-2.094.615-2.094 1.843v29.132c0 1.227.698 1.842 2.094 1.842h3.515c1.396 0 2.094-.615 2.094-1.842zm35.744-6.78v19.086h-14.649v-53.744h24.863c8.203 0 12.306 3.461 12.306 10.38v13.897c0 5.301-2.402 8.567-7.2 9.795l9.878 19.672h-15.738l-8.538-19.086h-.922zm5.777-24.195h-5.777v14.231h5.777c1.396 0 2.091-.612 2.091-1.84v-10.548c0-1.228-.695-1.843-2.091-1.843zm34.658-10.463h12.389c8.205 0 12.306 3.461 12.306 10.38v32.984c0 6.919-4.101 10.38-12.306 10.38h-12.389c-8.203 0-12.306-3.461-12.306-10.38v-32.984c0-6.919 4.103-10.38 12.306-10.38zm10.045 41.438v-29.132c0-1.228-.697-1.843-2.094-1.843h-3.514c-1.396 0-2.094.615-2.094 1.843v29.132c0 1.227.698 1.842 2.094 1.842h3.514c1.397 0 2.094-.615 2.094-1.842zm57.093-21.346h-14.651v-8.624c0-1.227-.698-1.842-2.092-1.842h-2.931c-1.394 0-2.092.615-2.092 1.842v30.807c0 1.227.698 1.843 2.092 1.843h2.931c1.394 0 2.092-.616 2.092-1.843v-8.289h14.651v9.378c0 6.919-4.103 10.38-12.306 10.38h-11.805c-8.204 0-12.306-3.461-12.306-10.38v-32.984c0-6.919 4.102-10.38 12.306-10.38h11.805c8.203 0 12.306 3.461 12.306 10.38v9.712zm41.439 0h-14.652v-8.624c0-1.227-.698-1.842-2.092-1.842h-2.931c-1.394 0-2.092.615-2.092 1.842v30.807c0 1.227.698 1.843 2.092 1.843h2.931c1.394 0 2.092-.616 2.092-1.843v-8.289h14.652v9.378c0 6.919-4.103 10.38-12.306 10.38h-11.806c-8.203 0-12.306-3.461-12.306-10.38v-32.984c0-6.919 4.103-10.38 12.306-10.38h11.806c8.203 0 12.306 3.461 12.306 10.38v9.712zm17.494-20.092h12.389c8.206 0 12.306 3.461 12.306 10.38v32.984c0 6.919-4.1 10.38-12.306 10.38h-12.389c-8.203 0-12.306-3.461-12.306-10.38v-32.984c0-6.919 4.103-10.38 12.306-10.38zm10.046 41.438v-29.132c0-1.228-.698-1.843-2.094-1.843h-3.514c-1.397 0-2.095.615-2.095 1.843v29.132c0 1.227.698 1.842 2.095 1.842h3.514c1.396 0 2.094-.615 2.094-1.842z"
             />
           </svg>
        </div>
      </a>
    </div>
    <div className="collapse navbar-collapse" style={{border:"none"}} id="myNavbar">
      <ul className="nav navbar-nav" style={{border:"none"}}>
        <li className="active">
          <Link to="/"
            href="#"
            style={{
              color: "white",
              backgroundColor: location.pathname === "/" ? "#b71c1c" : "transparent",
              fontWeight: "bold",
              height: "100%",
              marginTop: "25px",
            }}
          >
            principale
          </Link>
        </li>
        <li>
          <Link
            to="/prds"
            style={{
              color: "white",
              backgroundColor: location.pathname === "/prds" ? "#b71c1c" : "transparent",
              fontWeight: "bold",
              height: "100%",
              marginTop: "25px",
            }}
          >
            Produits
          </Link>
        </li>
      </ul>
    </div>
  </div>
</motion.nav>
  );
};
// Photo1 Component
function Photo1({ img, isExpanded }) {
  return (
    <motion.div
      layoutId="sharedPhoto" // Shared layoutId for smooth transitions
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{
        width: isExpanded ? "40%" : "20%", // Adjust size based on `isExpanded`
        maxWidth: "100%",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <img
        src={img}
        alt="Moroccan item"
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      
    </motion.div>
  );
}

// Photo2 Component
const Photo2 = ({ img,delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 150 }}
    transition={{ type: "tween", duration: 1, ease: "easeInOut" ,delay:delay}}
    whileHover={{ scale: 1.05 }}
    style={{ width: "20%", maxWidth: "100%" }}
  >
    <img
      src={img}
      alt="Moroccan item"
      style={{ width: "100%", height: "auto", borderRadius: "8px" }}
    />
  </motion.div>
);

// Loader Component
function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: "15px",
        }}
      >
        <Photo2 delay={0.3} img="https://i.ibb.co/fVHrYNP4/Moroccan-food-tour-shop-2020-09938-scaled-1.jpg" />
        <Photo2 delay={0.5} img="https://i.ibb.co/0pxQftsL/images-3.jpg" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "start",
          paddingTop: "15px",
        }}
      >
        <Photo1 img="https://i.ibb.co/20psTszD/baner1.jpg" isExpanded={false} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Photo2 delay={0.8} img="https://i.ibb.co/2YKx5mMc/images.png" />
        <Photo2 delay={1} img="https://i.ibb.co/LDGKk7p8/images-4.jpg" />
      </div>
    </motion.div>
  );
}

// Slider Component
const Slider = () => {
  const l = ["https://i.ibb.co/2YKx5mMc/images.png", "https://i.ibb.co/fVHrYNP4/Moroccan-food-tour-shop-2020-09938-scaled-1.jpg","https://i.ibb.co/5h0w08Ky/savon-de-menage-au-lavande-el-kef.jpg",
  ,"https://i.ibb.co/YTRxc4K1/jhguf.png","https://i.ibb.co/jPLzc0zs/images-8.jpg","https://i.ibb.co/x8J3RQ83/images-7.jpg","https://i.ibb.co/rPG5Myt/images-6.jpg","https://i.ibb.co/chvLjQJz/images-5.jpg"];
  return (
    <main>
      <div
        className="slider"
        style={{
          "--width": "150px",
          "--height": "100px",
          "--quantity": "10",
        }}
      >
        <div className="list">
          {l.map((e, index) => (
            <div
              key={index}
              className="item"
              style={{ "--position": index + 1 }}
            >
              <img style={{height:"100%",width:"100%"}} src={e} alt="" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

// View Component
function View() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true); // Set `show` to true after 3 seconds
    }, 3000);

    // Cleanup the timer on unmount
  }, []);
  return (
    <>
     
      <BrowserRouter> <Navbar /><Routes>
        <Route path="/" element={<>
        
        {!show ? (
          <Loader key="loader" />
        ) : (  <LayoutGroup>
      <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
          <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "start",
        }}
      >
        {/* Always render the shared Photo1 component */}
        <motion.div
      layoutId="sharedPhoto" // Shared layoutId for smooth transitions
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        maxWidth: "100%", // Adjust size based on `isExpanded`
        marginTop: "10px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Banner Image */}
      <img
        src="https://i.ibb.co/20psTszD/baner1.jpg"
        alt="Moroccan item"
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />

      {/* Overlay Text */}
      <h2
        style={{
          position: "absolute",
          left: "30px",
          top: "10%", // Adjusted for better positioning
          color: "white",
          textShadow: "2px 2px 8px black",
          fontSize: "clamp(0.9rem, 3vw, 1.5rem)", // Responsive font size
          maxWidth: "80%", // Ensure text doesn't overflow
          lineHeight: "1.5", // Improved readability
        }}
      >
    <motion.font 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4,delay:1}}
    >Découvrez une sélection unique de produits{" "}</motion.font>   
        <motion.b   initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4,delay:1.5
    }}  style={{ color: "#ffd700" }}>100% marocains</motion.b> 
  <motion.font  initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4,delay:2}}  >qui allient{" "}</motion.font>  
        <motion.b   initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4,delay:2.5}} style={{ color: "#ffd700" }}>authenticité</motion.b> 
        <motion.b   initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4,delay:3}} style={{ color: "#ffd700" }}> et{" "} modernité</motion.b>
    <motion.font
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.4,delay:3.5}}
    >  . Sur notre site, nous
    célébrons la richesse culturelle du Maroc tout en mettant en avant des
    créations innovantes et contemporaines.</motion.font>
  
      </h2>
    </motion.div>
      </div>
      <br></br>
      <Slider />
      <br></br>
      <section className="container mx-auto px-4 py-8">
      {/* Section Template */}
      {sections.map((section, index) => (
        <div key={index} className={` row`}>
          <figure className=" autoShow " >
        <div className="col-md-6">    <img src={section.image} style={{width:"100%"}} alt=""    /> </div>
          </figure>
          <h2  className="col-md-6  text-center text-red-600 font-bold text-xl md:text-2xl leading-relaxed autoShow">
            {section.text}
          </h2>
        </div>
      ))}

      {/* Decorative Separator */}
      <hr className="border-4 border-red-600 bg-red-600 rounded-full my-8" />
    </section> <Footer></Footer> </motion.div> </AnimatePresence></LayoutGroup> ) }  
     </>} ></Route>
        <Route path="/prds" element={<NewsCards></NewsCards>} ></Route>
        <Route path="/blog/:id" element={<BlogPost></BlogPost>} ></Route>
        </Routes></BrowserRouter>
     
    </>
  );
}

// App Component
function App() {
  

  return (
   
        <>    <View  /></>)
       
}

export default App;