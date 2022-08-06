import Image from 'next/image'
import React from 'react'
import wineCapLogo from '../public/assets/winecap.png';
import tosyLogo from '../public/assets/tosy.png';
import profileImg from '../public/assets/profile.jpeg';
import reactLogo from '../public/assets/react.png';
import vueLogo from '../public/assets/vue-logo.png';
import bootLogo from '../public/assets/bootstrap.svg';

export default function MainPage() {
  return (
    <div className='main-wrapper container'>
      <h3 className='text-super'>Frontend Developer</h3>
      <h2 className='text-title'>Vandan Khamkar</h2>
      <div className='row'>
        <div className="col-4 service-section">
          <h6 className='card-title'>Recent Projects</h6>
          <div className='wrapper-box'>
            <div className='d-flex flex-row align-items-center'>
              <Image src={wineCapLogo} height='24' width='28'></Image>
              <h6 className='text-box'>WineCap: The Wine Investment Company</h6>
            </div>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</p>
          </div>
          <div className='wrapper-box'>
            <div className='d-flex flex-row align-items-center'>
              <Image src={wineCapLogo} height='24' width='28'></Image>
              <h6 className='text-box'>CRM for Wine Investment</h6>
            </div>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</p>
          </div>
          <div className='wrapper-box'>
            <div className='d-flex flex-row align-items-center'>
              <span style={{ color: '#ff0000', fontWeight: 'bold' }}>C<span style={{ color: '#000' }}>C</span></span>
              <h6 className='text-box' style={{ marginLeft: '20px' }}>E-COMM website for Craft Center</h6>
            </div>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</p>
          </div>
          <div className='wrapper-box'>
            <div className='d-flex flex-row align-items-center'>
              <span style={{ color: '#ff0000', fontWeight: 'bold' }}>C<span style={{ color: '#000' }}>C</span></span>
              <h6 className='text-box' style={{ marginLeft: '20px' }}>Admin Panel for Craft Center</h6>
            </div>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</p>
          </div>
          <div className='wrapper-box'>
            <div className='d-flex flex-row align-items-center'>
              <Image src={tosyLogo} height='24' width='28'></Image>
              <h6 className='text-box'>Tosy Auto: Industrial Parts</h6>
            </div>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</p>
          </div>
        </div>
        <div className="col-4 profile-section">
          <div className='profile-card d-flex flex-column justify-content-start align-items-center'>
            <Image src={profileImg} height='100' width='100'></Image>
            <div className='profile-details'>
              <h6>Sr. React Front-End Developer</h6>
              <hr />
            </div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>Name: </td>
                    <td>Vandan N. Khamkar</td>
                  </tr>
                  <tr>
                    <td>Birth: </td>
                    <td>9<sup>th</sup> October, 1998</td>
                  </tr>
                  <tr>
                    <td>Age: </td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>Location: </td>
                    <td>Navsari, Gujarat, IN</td>
                  </tr>
                  <tr>
                    <td>Qualifications: </td>
                    <td>10+2, B.E (Computer)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='tech-wrapper d-flex justify-content-center flex-wrap mt-3'>
              <Image title="React Js" src={reactLogo} height='50' width='50'></Image>
              <Image title="Vue Js" src={vueLogo} height='100' width='100'></Image>
              <Image title="Bootstrap/HTML/CSS" src={bootLogo} height='100' width='100'></Image>
            </div>
          </div>
        </div>
        <div className="col-4 service-section d-flex flex-column jus">
          <h6 className='card-title'>About Me</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button className='btn-chat'>Let's chat</button>
          <div className='meter-section d-flex justify-content-evenly'>
            <div className='inner'>
              <h3>3 Years+</h3>
              <p>Total Exp.</p>
            </div>
            <div className='inner'>
              <h3>10+</h3>
              <p>Projects</p>
            </div>
            <div className='inner'>
              <h3>5+</h3>
              <p>Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
