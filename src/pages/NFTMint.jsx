import React from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
let currentAccount
function NFTMint(props) {
    let NFTMintContract;
    LoadAccount();
    async function LoadAccount() {
        currentAccount = sessionStorage.getItem('Account');
    }
    
    return (
        <div className='NFTMint'>
            <PageTitle title='NFT Mint' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="NFTMint-container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={require('../assets/images/common/team12.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h5>Mint Your NFT</h5>

                                <form action="#" id="subscribe-form">
                                    <input type="email" placeholder="Number of NFT You Want to Mint" required="" id="subscribe-email" />
                                    <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span className="effect">MINT</span></button>
                                </form>
                                <Link to="/nft-profile" className="tf-button btn-effect">
                                    <span className="boder-fade"></span>
                                    <span className="effect">Check My NFTs</span>
                                </Link>
                                <br />
                                <p>First Generation NFT</p>
                                <p>The rest of the NFTs that haven't be minted would automatically burned after the mint sale ends</p>
                                <div className="list-product">
                                    <div className="box corner-box">
                                        <p>Total Minted</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Owned by you</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Your Staking</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Total Burned</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Smart Contract Written</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Smart Contract Written</p>
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

export default NFTMint;