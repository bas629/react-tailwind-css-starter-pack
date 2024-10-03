import { image } from '@cloudinary/url-gen/qualifiers/source';
import React, { useState } from 'react'

function Publicpost() {
  const [pPost,setPpost]=useState([]);
  const [flag,setFlag]=useState(false);

  function renderPost(post)
  {   console.log(post); 
    console.log(post.post[2].public_Post[0].title); 
    for(let i=0; i<3; i++)
  {  let t={name:"", _id:"", title:"", image_url:""}
       t.name=post.post[i].name;
       t._id=post.post[i]._id;
   for(let j=0; j<post.post[i].public_Post.length; j++)
   {
      t.title=post.post[i].public_Post[j].title;
      t.image_url=post.post[i].public_Post[j].post_url;
          
      pPost.push(t);

   


  }
   setFlag(true);
    console.log(pPost);
  }

  }


  async function getPublicPost() {
     try{ 

         const post = await fetch("http://localhost:2000/getAllPost",{
             method: "GET",
             })
           const data = await post.json();
            console.log(data);
           renderPost(data);



     }
 catch(e){
     console.log(e);
 }

  }

  return (
    <div className='z-30'>

   
          <button onClick={getPublicPost}  > click</button>

          {  flag &&
             pPost.map((p) => 
                

          ( 
             <p>
             <p> {p.name}  </p>

            <video
            src={p.image_url}
            width='1440'
            height='680'
            controls
            ></video></p>))
        }
      

     </div>
    

  )
}

export default Publicpost