import React, { useEffect, useState } from 'react'
import { checkToken } from '../request/login';
import { getProductById } from '../request/product';
import { useNavigate, useParams } from 'react-router';
import Product from './Product';
import BasketDetail from './BasketDetail';
import { useDispatch, useSelector } from 'react-redux';
import { incrementWithValue, selectCount, selecttoplam, topla, buy } from '../request/slice';

export default function Basketusta() {


  const param = useParams();
  let navigate = useNavigate();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const toplam = useSelector(selecttoplam);
  const [productsbuy, setProductsbuy] = useState({});




  useEffect(() => {


    Deneme()

    setTimeout(() => {
      dispatch(topla())
    }, 200);



  }, [])




  const Deneme = () => {

    let token = localStorage.getItem('token');

    if (token == null) {
      navigate('/login');
    }
    else {
      checkToken(token).then((data) => {
        if (data) {
          getProductById(token, Number(param.id)).then((res) => {

            dispatch(incrementWithValue(res))



          })
        }
        else {
          navigate('/login');

        }
      })

    }



  }



  return (
    <div>

<div className='container'>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">İsim ve Soyisim</label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Uzmanlık Alanı</label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Adres</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">İlan açıklaması</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Telefon numarası</label>
          <input type="text" class="form-control" id="inputCity" />
         
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Fiyat</label>
          <input type="number" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Telefon ile ulaşılabilir
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Uzaktan çalışmaya uygun
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">İlan ver</button>
        </div>
      </form>
      </div>
    </div>


  )
}