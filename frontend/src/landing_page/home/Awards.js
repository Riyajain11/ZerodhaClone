import React from 'react';

function Awards() {
  return (
    <div className='container py-5'>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <img
            src='./media/images/largestBroker.svg'
            alt='Largest Broker'
            className='img-fluid'
          />
        </div>

        {/* Text Content */}
        <div className='col-12 col-md-6'>
          <h2 className='fw-semibold mb-3'>Largest Broker in India</h2>
          <p className='mb-4'>
            2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:
          </p>

          <div className='row'>
            {/* First List */}
            <div className='col-6'>
              <ul>
                <li>Futures and Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency</li>
              </ul>
            </div>

            {/* Second List */}
            <div className='col-6'>
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds and Government Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className='mt-4'>
            <img
              src='./media/images/pressLogos.png'
              alt='Press Logos'
              className='img-fluid'
              style={{ maxWidth: '90%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
