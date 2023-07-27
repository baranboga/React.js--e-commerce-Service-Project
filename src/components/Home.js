import React, { useEffect, useState } from 'react'
import { checkToken } from '../request/login';
import { Navigate, useNavigate } from 'react-router-dom';
import { getProducts, productType } from '../request/product';


export default function Home() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [usta, setusta] = useState();


  useEffect(() => {
    let token = localStorage.getItem('token');
    let ustaa = localStorage.getItem('usta');
    setusta(ustaa);
    
    if (token == null) {
      navigate('/login');
    }
    else {
      checkToken(token).then((data) => {
        if (data) {
          getProducts(token).then((request) => setProducts(request))
        }
        else {
          navigate('/login');

        }
      })

    }

  })

  return (


    <>

<section class="testimonial" >
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                    <ol class="carousel-indicators tabs">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                            <figure>
                                <img style={{borderRadius:"150px",height:"250px",width:"250px"}} src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                        <figure>
                                <img style={{borderRadius:"200px",height:"300px",width:"300px"}} src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                        <figure>
                                <img style={{borderRadius:"100px",height:"200px",width:"200px"}} src="https://images.pexels.com/photos/8520440/pexels-photo-8520440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                    <div id="carouselExampleIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
                        <h2 style={{color: "#black",fontSize:"30px",fontFamily:'fantasy'}}> İHTİYACIN OLAN</h2><br/>
                        <h2  style={{color: "#black" ,fontSize:"35px",fontFamily:'fantasy'}}> HİZMETE KOLAYCA ULAŞ</h2>
                       
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="quote-wrapper">
                                <h1 style={{fontSize:"40px", color:"black", fontFamily:"fantasy"}}>
  BEKLEYEN İŞLERİNİ <span style={{fontSize:"60px", fontWeight:"bold", color:"#71b85f"}}>KOLAYCA</span> HALLET <span style={{color:"#71b85f",fontFamily:'inherit'}}>!</span>
</h1>
                                    {/* <h3>peter lee</h3> */}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-wrapper">
                                    <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                    <h3>peter lee</h3>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-wrapper">
                                    <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                    <h3>peter lee</h3>
                                </div>
                            </div>
                        </div>
                        <ol class="carousel-indicators indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>


  )
}