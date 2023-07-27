import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { selectKeyword, } from '../request/slice';
import { FaShoppingBasket } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import logo from '../images/logo.png';









export default function MainLayout() {
  const [keyy, setKey] = useState()
  const [usta, setusta] = useState()
  let key = useSelector(selectKeyword);
  let navigate = useNavigate()
  let user = localStorage.getItem('user');
  

  useEffect(()=>{

    let ustaa = localStorage.getItem('usta');
    setusta(ustaa)



  })



  return (



    <div>
      {/* header */}
      <header >
    <div class="px-3 py-2 " style={{backgroundColor: "#ffcc99"}}>
      <div class="container" >
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a   href="/home" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
           <img style={{height:"70px",width:"100px"}} src={logo}/>
           <h1 style={{fontFamily:"fantasy",color:"#71b85f"}}>KOLAYCA</h1>
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li> 
              {
                usta==="true"||usta==="false"?"":<NavLink className='nav-link baslik' to={'/'} style={{ color: "white", fontSize: '20px' }}>Anasayfa</NavLink>

              }
                
            </li>

            <li>
            <NavLink className='nav-link baslik' to={'/product'} style={{ color: "white", fontSize: '20px' }}>
Hizmetler</NavLink>
            </li>

            <li>
              {usta==="true"? <NavLink className='nav-link baslik' to={'/registered'} style={{ color: "white", fontSize: '20px' }}>İlanlarım</NavLink>:usta==="false"?<NavLink className='nav-link baslik' to={'/registered'} style={{ color: "white", fontSize: '20px' }}>Tekliflerim</NavLink>:"" }
            </li>

            <li>
            {usta==="true"?<NavLink className='nav-link' to={'/basketusta'} style={{ color: "white", fontSize: '20px' }} >Hizmet ver</NavLink>:<NavLink className='nav-link ' to={'/basket'} style={{ color: "white", fontSize: '20px' }} >İlan ver</NavLink>}
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2 border-bottom mb-3" style={{backgroundColor:"#ffb566"}}>
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search" onSubmit={(e) => {
                e.preventDefault()
                key = keyy
                navigate(`/product/${key}`)

              }}>
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search" onChange={(e) => {setKey(e.target.value)}}/>
        </form>

        <div class="text-end d-flex justify-content-between">
        
        {
          usta==="true"||usta==="false"?"":<h5 className='mt-1' style={{color:"white"}}>Giriş Yap </h5>

        }
        
        
          <h5 className='mt-1' style={{color:"white"}}>{usta==="true"||usta==="false"?<FaUser />:""}  {user} {usta==="true"?"USTA":""}  </h5>

        
        

              <NavLink className='nav-link mx-2 ' to={'/login'} style={{color:"white",  fontSize: '20px' }} onClick={() => { localStorage.clear() }}><FaSignOutAlt /></NavLink>
       
        </div>
      </div>
    </div>
  </header>

      
      {/* header end  */}


      



      <Outlet />

      {/* footer */}
<div  style={{marginTop:"100px"}}>
      <div className="footer fixed-bottom px-5" style={{ backgroundColor: "#ffcc99",width: "100%"}}>
        <footer className="d-flex flex-wrap justify-content-between align-items-center  my-4 ">
          <div className="col-md-4 d-flex align-items-center">

            <span className="mb-3 mb-md-0 text-body-secondary " style={{ color: "white" }}>© 2023 YB Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" href="#"></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"></a></li>
          </ul>
        </footer>
      </div>
      </div>


      {/* footer end  */}

    </div>

  )
}
