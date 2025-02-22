import "./card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chercher } from "./slice";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import AdSense from "./ads";
const NewsCards = () => {
  const d=useDispatch();
  const lp=useSelector(st=>st.produits.lp);


  
 
  
    return ( <div><center> <br></br>
      <input onChange={(e)=>d(chercher(e.target.value))} className="form-control" style={{width:"80%"}} placeholder="chercher sur un produit" ></input>
    </center>
      <div className="card-container">

        {lp.map((article) => (
          <motion.div initial={{scale:0.6}}
          transition={{duration:0.5}}
          whileInView={{scale:1}} key={article.id} className={`card card-4 `}>
            <div className="card-img" style={{ backgroundImage: `url(${article.image})` }}></div>
            <Link  to={"/blog/"+article.id} className="card-link">
              <div className="card-img-hovered" style={{ backgroundImage: `url(${article.image})` }}></div>
            </Link>
            <div className="card-info">
              <div className="card-about">
                <Link to={"/blog/"+article.id}  style={{background:'rgba(254,87,87)',width:"fit-content"}} className={`card-tag tag-Deals`}>{article.nom}</Link>
               
              </div>
              <h1 className="card-title">{article.description}</h1>
              <div className="card-creator">  <Link to={"/blog/"+article.id} >{article.anciennete}</Link></div>
            </div>
          </motion.div>
        ))}
      </div>   <AdSense></AdSense></div>
    );
  };
  
  export default NewsCards;