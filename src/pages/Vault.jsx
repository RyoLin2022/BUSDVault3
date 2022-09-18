import React from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
let currentAccount
function Vault(props) {
    let VaultContract;
    LoadAccount();
    async function LoadAccount() {
        currentAccount = sessionStorage.getItem('Account');
    }
    
    return (
        <div className='vault'>
            <PageTitle title='Vault' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="vault-container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={require('../assets/images/common/team12.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h5>The Vault</h5>

                                <form action="#" id="subscribe-form">
                                    <input type="email" placeholder="Number of token" required="" id="subscribe-email" />
                                    <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span className="effect">Max</span></button>
                                </form>
                                <Link to="#" className="tf-button btn-effect">
                                    <span className="boder-fade"></span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.8771 4.39102H13.0567C15.4181 4.39102 17.3346 6.26602 17.3346 8.56602V13.166C17.3346 15.466 15.4181 17.3327 13.0567 17.3327H4.94586C2.58446 17.3327 0.667969 15.466 0.667969 13.166V8.56602C0.667969 6.26602 2.58446 4.39102 4.94586 4.39102H5.12553C5.14264 3.39102 5.54477 2.45768 6.27201 1.75768C7.00781 1.04935 7.94894 0.691016 9.00986 0.666016C11.1317 0.666016 12.8514 2.33268 12.8771 4.39102ZM7.17038 2.64935C6.69125 3.11602 6.42602 3.73268 6.40891 4.39102H11.5937C11.5681 3.02435 10.4216 1.91602 9.00987 1.91602C8.35108 1.91602 7.66661 2.17435 7.17038 2.64935ZM12.2525 7.59935C12.6118 7.59935 12.8942 7.31601 12.8942 6.97435V6.00768C12.8942 5.66601 12.6118 5.38268 12.2525 5.38268C11.9017 5.38268 11.6108 5.66601 11.6108 6.00768V6.97435C11.6108 7.31601 11.9017 7.59935 12.2525 7.59935ZM6.31476 6.97435C6.31476 7.31601 6.03242 7.59935 5.67308 7.59935C5.32229 7.59935 5.0314 7.31601 5.0314 6.97435V6.00768C5.0314 5.66602 5.32229 5.38268 5.67308 5.38268C6.03242 5.38268 6.31476 5.66602 6.31476 6.00768V6.97435Z" fill="white" />
                                    </svg>
                                    <span className="effect">Redeem BUSD</span>
                                </Link>
                                <div className="list-product">
                                    <div className="box corner-box">
                                        <p>Your BV Balance</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>BUSD In Vault</p>
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

export default Vault;