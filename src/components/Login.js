import React, { useState } from 'react'
import { submitHandle } from '../request/login';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';


// type resultType = {
//     token: string;
//     isAuthenticated: boolean;
// }

var login = false;

export default function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({});
    const [login, setlogin] = useState(false);

    return (
        <>
            <div className='row d-flex align-content-center justify-content-center mt-5' >
                <div className='row d-flex align-item-center  justify-content-center mt-5'>
                    <div className="col-6 d-flex align-item-center text-center justify-content-center">
                        <form className="text-center" onSubmit={(e) => {
                            let result = submitHandle(e, user.userName, user.password);
                            result.then((res) => {
                                console.log(res);
                                if (res.isAuthenticated) {
                                    setlogin(true)
                                    console.log(login);
                                    localStorage.setItem('token', res.token);
                                    localStorage.setItem('user', user.userName);
                                    localStorage.setItem('usta', res.usta);

                                    setTimeout(() => {
                                        navigate('/home');
                                    }, 1500);
                                }
                                else {
                                    alert('Giriş Başarısız');
                                }
                            })
                            result.catch((err) => {
                                console.log(err.message);
                            })




                        }}>

                            <h1 className="h3 mb-3 fw-normal" style={{ color: "#3F054C" }}> <i className="fa-solid fa-right-to-bracket " style={{ color: "#0c2a2f" }}></i> Giriş Yap</h1>

                            <div className="form-floating">
                                <input type="text"
                                    className="form-control mb-2"
                                    id="girisKullaniciAdi"
                                    placeholder="mail"
                                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                                    required />
                                <label htmlFor="floatingInput">Mail adresi</label>
                            </div>
                            <div className="form-floating">
                                <input type="password"
                                    className="form-control mb-2"
                                    id="girisSifre"
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    placeholder="Password"
                                    required />
                                <label htmlFor="floatingPassword">Şifre</label>
                            </div>

                            {login && <p style={{ color: "green" }}>Başarıyla giriş yaptınız. Yönlendiriliyorsunuz...</p>}


                            <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: "#0c2a2f", color: "white" }} type="submit" id="btnGirisYap"   >Giriş Yap</button>

                        </form>



                    </div>

                </div>
                <div className="row d-flex align-item-center justify-content-center mt-3'">
                    <div className="col-6 d-flex align-item-center   justify-content-center'">


                    </div>
                </div>
                <div className='row d-flex align-item-center  justify-content-center mt-3'>
                    <div className='col-6 d-flex align-item-center text-center justify-content-center'>

                        <NavLink className='nav-link mx-2 ' to={'/singin'} style={{ color: "red", fontSize: '20px',fontWeight:"bold" }}>Kayıt ol</NavLink>
                        <h4>/</h4>
                        <NavLink className='nav-link mx-2 ' to={'/'} style={{ color: "red", fontSize: '20px',fontWeight:"bold" }}>Ana Sayfa</NavLink>




                    </div>

                </div>


            </div>

        </>

    )
}
