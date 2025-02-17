
import React  from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { produit } from './data';
const BlogPost = () => {
  
  const {id}=useParams();
  const produi=produit.find(e=>{
    return e.id==id;
  })
 
  
  
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', marginTop: '1rem' }}>
      <div>
        
        {/* Post content */}
        <article>
          {/* Post header */}
          <header style={{ marginBottom: '1.5rem' }}>
            {/* Post title */}
            <h1 style={{ fontWeight: '700', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              {produi.nom}
            </h1>
          </header>
          {/* Preview image figure */}
          <figure style={{ marginBottom: '1.5rem' }}>
            <img
              style={{ width: '100%', height: 'auto', borderRadius: '0.25rem' }}
              src={produi.image}
              alt="..."
            />
          </figure>
          {/* Post content */}
          <section style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
      {produi.description}
            </p>
          
            <h2 style={{ fontWeight: '700', fontSize: '2rem', marginBottom: '1rem', marginTop: '3rem' }}>
            l'histoire de {produi.nom}
            </h2>
            <p  dangerouslySetInnerHTML={{ __html: produi.histoire} } style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
           
            </p>
           
          </section>
        </article>

        {/* Comments section */}
    
      </div>
    </div>
  );
};

export default BlogPost;