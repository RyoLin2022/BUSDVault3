import React, { useState, useEffect } from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
import img from '../assets/images/common/img15.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

let refAccount;
let refLink;
let Refs;
let currentAccount;
let accAllowance = Number(0);

function IDO(props) {

    
    let BusdContract = '0x71aeC7A3540F96D3EDB83748485d473D9fd50E2B';
    let IDOContract = '0x31279f621b66489734083103FFc02dC60534B859';
    GetData();

    const [copied, setCopied] = useState(false);

    function alertCopied() {
        alert("Invitation link has been copied!!")
    }

    function GetData() {
        setAccountCorrectly()
        GenerateLink()
        CheckApproval()
        GetRef()
        seeRef()
    }
    async function seeRef() {
        let RefAddr = sessionStorage.getItem('RefAccount')
        console.log('seeRef : ' + RefAddr)
    }

    async function GetRef() {
        let link = window.location.href
        if (link.includes('invitedBy=')) {
            let start = link.indexOf('By=')
            refAccount = link.substring(start + 3, start + 45)
        } else {
            refAccount = '0x0000000000000000000000000000000000000000'
        }
        sessionStorage.setItem('RefAccount', refAccount)
    }

    /*------------------Checck the allowance for IDO contract-----------------*/
    /*------------------Checck the allowance for IDO contract-----------------*/
    /*------------------Checck the allowance for IDO contract-----------------*/
    async function CheckApproval() {
        setAccountCorrectly()
        console.log('Checking Approval' + accAllowance)
        let inputdata =
            '0xdd62ed3e' +
            '000000000000000000000000' +
            currentAccount.substring(2, currentAccount.length) +
            '000000000000000000000000' +
            IDOContract.substring(2, IDOContract.length)

        accAllowance = await window.ethereum.request({
            method: 'eth_call',
            params: [
                {
                    to: BusdContract,
                    data: inputdata,
                    //allowance:0xdd62ed3e
                    //BalanceOF + staking contract address
                },
                'latest',
            ],
        })
        console.log('Checking Approval' + accAllowance)
        // let idoButton = document.getElementById('idoButton')
        // let approved = document.getElementById('approveButton')
        // if (accAllowance > 0) {
        //     // approveButton.innerText = 'Approved'
        //     approved.hidden = true
        //     idoButton.hidden = false
        // } else {
        //     approved.hidden = false
        //     idoButton.hidden = true
        // }
    }

    async function setAccountCorrectly() {
        currentAccount = sessionStorage.getItem('Account');
        console.log('successfully set account to ' + currentAccount)
    }

    async function makeIDO() {
        setAccountCorrectly()
        accAllowance = parseInt(accAllowance)
        CheckApproval()
        console.log(accAllowance)
        if (accAllowance === 0) {
            console.log('No accAllowance')
            let idoButton = document.getElementById('idoButton')
            let ApproveBTN = document.getElementById('approveButton')
            ApproveBTN.hidden = false
            idoButton.hidden = true
        } else {
            console.log('accAllowance > 0')
        }
    }

    async function GenerateLink() {
        await setAccountCorrectly();
        let link = window.location.href;
        if (link.includes("tokenpocket"))
            link = link.substring(0, link.length - 23);

        if (link.length > 70)
            link = link.substring(0, link.length - 42) + currentAccount;
        else
            link = link + "?invitedBy=" + currentAccount;
        refLink = link;
        console.log(refLink);
    }
    const [dataBlock] = useState({
        title: 'BUSD VAULT IDO'
    })

    return (
        <div className='IDO'>
            <PageTitle title='IDO' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="IDO-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h4 className="tf-title st2 mb-60 sub-title">{dataBlock.title}</h4>
                                <p>The IDO price is 50 BUSD for each address</p>
                                <p>Note : All of the token claimed from IDO should be added into the liquidity pool</p>
                                <p>The address would be blacklisted if you did not add into the liquidity pool</p>
                                <p>Removing LP would be punished before the launch</p>

                                <CopyToClipboard text={refLink} onCopy={() => setCopied(true)}>
                                    <button id="inviteLink" className="tf-button btn-effect" onClick={alertCopied}>
                                        <span className="boder-fade"></span>
                                        <span className="effect">Copy Invite Link</span>
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
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