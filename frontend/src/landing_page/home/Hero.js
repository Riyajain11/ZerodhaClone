import React from 'react';

function Hero() {
  return (
    <div className='container py-5'>
      <div className='row justify-content-center text-center'>
        <div className='col-12 col-md-10 col-lg-8'>
          <img
            src="./media/images/homeHero.png"
            alt='HeroImage'
            className='img-fluid mb-4'
            style={{ maxHeight: "400px" }}
          />
          <h1 className='mt-4 fw-semibold'>Invest in everything</h1>
          <p className='lead'>
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <button
            className="btn btn-primary fs-5 px-4 py-2 mt-3"
            style={{
              backgroundColor: '#387ed1',
              borderColor: '#387ed1',
            }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
