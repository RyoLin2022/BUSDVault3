import React from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
let currentAccount
function IDO(props) {
    let IDOContract;
    LoadAccount();
    async function LoadAccount() {
        currentAccount = sessionStorage.getItem('Account');
    }
    
    return (
        <div className='IDO'>
            <PageTitle title='IDO' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="IDO-container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={require('../assets/images/common/team12.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <p>The IDO limitation is 50 BUSD for each address</p>
                                <p>Note : All of the token claimed from IDO should be added into the liquidity pool</p>
                                <Link to="#" className="tf-button btn-effect">
                                    <span className="boder-fade"></span>
                                    <span className="effect">Make IDO</span>
                                </Link>
                                <div className="list-product">
                                    <div className="box corner-box">
                                        <p>Joined?</p>
                                        <h6 className="h7">YES</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Your referrals</p>
                                        <h6 className="h7">Amount</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Your award</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Your BV Balance</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>BUSD In IDO</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Exchange Rate</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IDO;