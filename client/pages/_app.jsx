import React from 'react'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <Component {...pageProps} />
        <style jsx global>
          {`
            @font-face {
            font-family: 'Roboto';
            src: url('/fonts/roboto/Roboto-light.ttf');
            font-display: auto;
            font-style: normal;
            }
            .swirl-button {
            border-radius: 50%;
            height: 160px;
            width: 160px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            margin-top: 2rem;
            color: white;
            font-family: 'Roboto';
            font-size: 2.8rem;
            box-shadow: 7px 13px 20px rgba(0, 0, 0, 0.25);
            }
            .med-swirl-button > svg.MuiSvgIcon-root {
            font-size: 4.5rem !important;
            }
            .discover-button > svg.MuiSvgIcon-root {
            font-size: 2.8rem !important;
            }
            .inner-page {
              background-image: url('/images/purp-swirl.png')
            }
            .inner-page-card {
              background-color: white;
              border-radius: 19px;
              height: 83vh;
            }
            .swirl-button:hover {
              cursor: pointer;
            }
            .hidden {
              display: none
            }

            @media (min-width: 375px) {
              .login-button-container {
                height: 60vh;
                align-items: flex-end
              }
              iframe {
                height: 160px !important
              }
             @media (min-width: 768px) {
              .login-container {
                height: 97vh;
              }
              iframe {
                height: 470px !important
              }
             }
              @media (min-width: 1024px) {
              iframe {
                height: 282px !important
              }
             }
            }
            `}
        </style>
      </div>
    )
  }
}

export default MyApp
