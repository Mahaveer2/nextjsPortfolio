import React, {  ReactElement } from 'react';
import Fade from '../Fade';
 
interface Card{
  title:string;
  description:string;
  image:string;
  link:string;
}

function Card({ title,image,link, description }:Card) {
  return (
    <a href={link} aria-details={description} className="card overflow-hidden">
      <img className="w-full h-full rounded-xl object-cover p-[1px]" src={image} alt={description}/>
      <article className="card-content">
        <div className="card-image">
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}

const Project = ({projects}:{projects:Project[]}) => {

  const onMouseMove = (e:any) => {
    const cards:any = document.getElementsByClassName("card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div className='w-[80%] mx-auto'>
      <Fade>
    <h1 className='text-3xl mb-10  ' style={{fontFamily:"oracle"}}>Projects</h1>
    <div id="cards" onMouseMove={onMouseMove}>
      {projects.map(proj => (
        <Card
        key={proj.name}
        image={proj.imageUrl}
        link={proj.link}
        title={proj.name}
        description={proj.description}
      />
      ))}
    </div>
    </Fade> 
    </div>
  )
}

export default Project