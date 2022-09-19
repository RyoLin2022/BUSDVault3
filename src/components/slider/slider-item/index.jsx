import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
// import { Modal } from "react-bootstrap";
import './styles.scss'

SliderItem.propTypes = {
    item: PropTypes.object,
};

function SliderItem(props) {
    const { item } = props;

    const [isOpen, setOpen] = useState(false)

    // const [modalShow, setModalShow] = useState(false);

    return (
        <div className={`box-slider ${item.classAction}`}>
            <img className='bg-slider' src={item.bgImg} alt="cybox" />
            <div className="box-slider__main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-box">
                                <h1 className="title">{item.title}</h1>
                                <p className="sub-title">{item.desc}</p>
                                <div className="wrap-btn">
                                    <Link to="/ido">
                                        <button className="tf-button btn-effect">
                                            <span className="boder-fade"></span>
                                            <span className="effect">Make IDO</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderItem;