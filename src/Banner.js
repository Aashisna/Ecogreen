import React from 'react';
import Cat from './Cat';
const shoot = () => {
  alert("Let's work together for protecting endanger species!");
}
export default function Banner() {
  
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://news.cgtn.com/news/3d3d414f3255444d34457a6333566d54/img/3ac2e367385a4a378fb5cf7fc58d8ebc/3ac2e367385a4a378fb5cf7fc58d8ebc.jpg" className="d-block w-100 img-fluid img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Help Us<span> To Save </span>The Animals</h1>
              <p>“Animals are<span> such agreeable friends—they ask no questions; they </span>  pass no criticisms."</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.bu.edu/files/2022/03/feat-iStock-1333294167-1498x1000.jpg" class="d-block w-100 img-fluid img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Help Us<span> To Save </span>The Animals</h1>
              <p>“Animals are <span>such agreeable friends—they ask no questions; they</span> pass no criticisms."</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://a-z-animals.com/media/2021/08/Zebras-header-1.jpg" class="d-block w-100 img-fluid img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Help Us<span> To Save </span>The Animals</h1>
              <p>“Animals are <span> such agreeable friends—they ask no questions; they</span> pass no criticisms."</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container'>
        <div className='row'>
         <div className='col'>
         <ul className="list-group py-5">
         <h3 className='text-center'>List One</h3>
         {Cat.map((i)=>(
          <li className="list-group-item text-center li">{i.catName}</li>
         ))}
         <li> <a href="/blogs"></a><button onClick={(shoot)} className="list-group-item text-center li">Click Here!</button></li>
        </ul>
         </div>
         <div className='col'>
         <ul className="list-group py-5">
         <h3 className='text-center'>List Two</h3>
         {Cat.map((i)=>(
          <li className="list-group-item text-center li">{i.catName}</li>
         ))}
        </ul>

         </div>
        </div>

      </div>
    </>
  )
}
