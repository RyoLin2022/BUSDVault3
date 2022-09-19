import React, { useState, useEffect } from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
import NFTContainer from './NFTContainer';
import './NFTProfile.css';

function NFTStaking(props) {
    let currentAccount = null;
    const [WalletAddress, setWalletAddress] = useState(null)
    const [nfts, setNfts] = useState([])
    const options = { method: 'GET', headers: { Accept: 'application/json', 'X-API-Key': 'test' } }
    const getNFTData = async () => {
        if (!currentAccount) return
        const response = await fetch(
            `https://deep-index.moralis.io/api/v2/${currentAccount}/nft?chain=eth&format=decimal`,
            //`https://deep-index.moralis.io/api/v2/${currentAccount}/nft?chain=eth&format=decimal&token_addresses=${NFTContract}`,
            options,
        )
        const data = await response.json()
        console.log(data)
        setNfts(data.result)
    }

    useEffect(() => {
        getNFTData()
    }, [currentAccount])

    readAccount()
    async function readAccount() {
        currentAccount = sessionStorage.getItem('Account');
        console.log("NFT Profile" + currentAccount);
    }
    
    return (
        <div className='NFTStaking'>
            <PageTitle title='NFT Staking' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="NFTStaking-container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={require('../assets/images/common/team12.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h5>Stake Your NFT</h5>

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
            
            <PageTitle title='My NFTS' />
            <NFTContainer nfts={nfts} />
        </div>
    );
}

export default NFTStaking;