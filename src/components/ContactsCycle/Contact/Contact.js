import React from 'react';
import './Contact.css';

const Contact = ({img, name, onClick}) => (
  <div className="Contact" onClick={onClick}>
    <div className="ImgBlock">
      <img
        src={img || 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT6UdRbcbzqWG2-B2DgnxnTbup_lMM9sHFrv_7R6yUKa9313uftaYlHPzucRQRf-ObTESz2FAv2DDSnn93TfoI'}
        alt="Avatar"
      />
    </div>
    <div className="NameBlock">
      <p>{name}</p>
    </div>
  </div>
);

export default Contact;