import "./card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chercher } from "./slice";
import { useSelector } from "react-redux";

const NewsCards = () => {
  const d=useDispatch();
  const lp=useSelector(st=>st.produits.lp);
    const articles = [
      {
        id: 1,
        tag: "NEWS",
        date: "6/11/2018",
        title: "There has been a big Tesla accident at New Jersey",
        author: "Sardorbek Usmonov",
        img: "1.png"
      },
      {
        id: 2,
        tag: "Tech",
        date: "6/07/2018",
        title: "Samsung laptops are exploding again",
        author: "Tyler Platt",
        img: "2.png"
      },
      {
        id: 3,
        tag: "Deals",
        date: "5/27/2018",
        title: "Apple is having a big sale for the first time",
        author: "Timur Mirzoyev",
        img: "4.png"
      },
      {
        id: 4,
        tag: "Politics",
        date: "5/20/2018",
        title: "Net Neutrality is coming to its end",
        author: "Gregoy Trem",
        img: "5.png"
      },
    ];
  
    return ( <div><center> <br></br>
      <input onChange={(e)=>d(chercher(e.target.value))} className="form-control" style={{width:"40%"}} placeholder="chercher sur un produit" ></input>
    </center>
      <div className="card-container">

        {lp.map((article) => (
          <div key={article.id} className={`card card-4 autoShow`}>
            <div className="card-img" style={{ backgroundImage: `url(${article.image})` }}></div>
            <Link  to={"/blog/"+article.id} className="card-link">
              <div className="card-img-hovered" style={{ backgroundImage: `url(${article.image})` }}></div>
            </Link>
            <div className="card-info">
              <div className="card-about">
                <Link to={"/blog/"+article.id}  style={{background:'rgba(254,87,87)'}} className={`card-tag tag-Deals`}>{article.prix}</Link>
               
              </div>
              <h1 className="card-title">{article.description}</h1>
              <div className="card-creator">  <Link to={"/blog/"+article.id} ><a href="#">{article.nom}</a></Link></div>
            </div>
          </div>
        ))}
      </div></div>
    );
  };
  
  export default NewsCards;