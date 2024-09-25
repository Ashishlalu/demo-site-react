import React from 'react'

const Demosite = () => {
  return (
    <div>
        <div id="container">
        {/* <!----------- nav ---------------> */}
        <nav>
            {/* <!-- logo --> */}
            {/* <!-- <i  className="fa-brands fa-bootstrap"></i> --> */}
             {/* <!-- <img className="logo" src="./images/png-transparent-bootstrap-brands-icon-removebg-preview.png" alt="logo"> --> */}
             <h3 className="logo-head">MONO <br/></h3>
             {/* <!-- LINKS --> */}
              <ul>
                <li className="list-items"><a className="links" href="">Home</a></li>
                <li className="list-items"><a className="links" href="">Enterprise</a></li>
                <li className="list-items"><a className="links" href="">Support</a></li>
                <li className="list-items"><a className="links" href="">Pricing</a></li>
              </ul> 
         </nav>  
         {/* <!-- paragraph --> */}
         <section id="paragraph">
            <p className="para">We're leading brands & <br/> businesses into a digital <br/> world</p>
         </section>
         {/* <!-- links above photo --> */}
        <section id="part2">
            <div className="lap">
                <ul>
                    <li className="list-items"><a className="link2" href="">Features</a></li>
                    <li className="list-items"><a className="link2" href="">Enterprise</a></li>
                    <li className="list-items"><a className="link2" href="">Support</a></li>
                    <li className="list-items"><a className="link2" href="">Pricing</a></li>
                  </ul> 
            </div>
            {/* <!-- /* photos under the link  */}
            <div className="photos">
                <div><img className="img-w" src='src\images\download (3).jpg' alt="no image"/></div>
                <div><img className="img-w" src="src/images/pexels-ajay-donga-1113836-2174656.jpg" alt="no image"/></div>
                <div><img className="img-w" src="src/images/𝑪𝒉𝒊𝒍𝒍 𝒘𝒂𝒍𝒑𝒂𝒑𝒆𝒓.jpg" alt="no image"/></div>
                <div><img className="img-w" src="src/images/pexels-elletakesphotos-1680172.jpg" alt="no image"/></div>
                <div><img className="img-w img5" src="src/images/red light photography Woman with glasses.jpg" alt="no image"/></div>
                <div><img className="img-w" src="src/images/pexels-bertellifotografia-573271.jpg" alt="no image"/></div>
            </div>
        </section>
        {/* <!-- under the photo items & paragraph --> */}
        <section id="part3">
            <div className="card">
                <i className="fa-regular fa-star part3icon"></i>
                <h3 className="part3heading">Branding</h3>
                <p className="part3para">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Assumenda cupiditate in aliquam debitis <br/>delectus magnam. </p>
            </div>
            <div className="card">
                <i className="fa-solid fa-bullhorn part3icon"></i>
                <h3 className="part3heading">Social Marketing</h3>
                <p className="part3para">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Assumenda cupiditate in aliquam debitis <br/>delectus magnam. </p>
            </div>
            <div className="card">
                <i className="fa-solid fa-camera part3icon"></i>
                <h3 className="part3heading">Production</h3>
                <p className="part3para">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Assumenda cupiditate in aliquam debitis <br/>delectus magnam. </p>
            </div>
        </section>
        {/* <!-- black part --> */}
        <section id="part4">
            <table className="logo-table">
                <tr>
                    <td><i className="fa-brands fa-discord"></i> Discord</td>
                    <td><i className="fa-solid fa-ghost"></i> Ghost</td>
                    <td><i className="fa-brands fa-algolia"></i> Algolia</td>
                    <td><i className="fa-solid fa-plane"></i> Plane</td>
                    <td><i className="fa-solid fa-code"></i> Code</td>
                </tr>
                <tr>
                    <td><i className="fa-brands fa-shopify"></i> Shopify</td>
                    <td><i className="fa-brands fa-discord"></i> Discord</td>
                    <td><i className="fa-solid fa-sun"></i> Sun</td>
                    <td><i className="fa-solid fa-code"></i> Code</td>
                    <td><i className="fa-solid fa-ghost"></i> Ghost</td>
                </tr>
                {/* <tr>
                    <td><i className="fa-brands fa-shopify"></i> Shopify<td>
                    <td><i className="fa-brands fa-discord"></i> Discord</td>
                    <td><i className="fa-solid fa-sun"></i> Sun</td>
                    <td><i className="fa-solid fa-code"></i> Code</td>
                    <td><i className="fa-solid fa-ghost"></i> Ghost</td>
                </tr> */}
                
            </table>
        </section>
        {/* video part */}
         <section id="part5">
            <div>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/QPuH-2YXv_A" title="Fashion Week special models sashay in  SakhiFashions designer saree" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;   picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
         </section>
        {/* <!-- heading 2 --> */}
         <section id="part6">
            <div className="headingpart">
                <h1 className="part6head">OUR TEAM</h1>
                <p className="part6para">We have the best team to make the impossible things possible <br/> with the help of the best people around the world with the best level of knowledge  <br/> and expertism which no one can get.
                </p>
            </div>
            {/* <!-- photos --> */}
            <div className="photo">
                <div >
                    <img className="img1 img2" src="src/images/5bafe39e-b9ab-48f3-85b8-245040edfe5c.jpg" alt=""/>
                    <h4 className="hd-6">JOHNNY DEPP</h4>
                </div>
                <div>
                    <img className="img1" src="src/images/Loki wallpaper.jpg" alt=""/>
                    <h4 className="hd-6">TOM HIDDLESTON</h4>
                </div>
                <div>
                    <img className="img1" src="src/images/Robert Downey Jr wallpaper.jpg" alt=""/>
                    <h4 className="hd-6">ROBERT DOWNEY JR</h4>
                </div>
            </div>
         </section>
        {/* <!-- list & images --> */}
         <section id="part7">
            <div className="list">
                <h5>Book your artist now <span className="spn">-</span></h5>
                <h5>Contact for more info <span className="spn">-</span></h5>
                <h5>Visit our instagram page <span className="spn">-</span></h5>
                <h5>Book your tickets via bookmyshow <span className="spn">-</span></h5>
            </div>
            <div className="list-photo">
                <img className="list-img" src="src/images/download (2).jpg" alt=""/>
            </div>
         </section>
         {/* <!-- footer --> */}
         <footer>

            <div className="parent">
                <div className="child">
                    <h2>MONO</h2>
                    
                    <i className="fa-sharp fa-light fa-circle-c"></i>ⓒ  2017-2023
                </div>
                <div className="child">
                    Features <br/><br/>
                    <a className="ftr" href="">Cool stuff</a>
                    <a className="ftr" href=""> Random feature</a>
                    <a className="ftr" href="">Team feature</a>
                    <a className="ftr" href="">Stuff for developers</a>
                    <a className="ftr" href="">Another one</a>
                    <a className="ftr" href="">Last time</a>
                </div>
                <div className="child">
                    Resources <br/><br/>
                    <a className="ftr" href="">Resource</a>
                    <a className="ftr" href="">Resource name</a>
                    <a className="ftr" href="">Another resource</a>
                    <a className="ftr" href="">Final resource</a>
                </div>
                <div className="child">
                    About <br/><br/>
                    <a className="ftr" href="">Team </a>
                    <a className="ftr" href="">Locations </a>
                    <a className="ftr" href="">Privacy</a>
                    <a className="ftr" href="">Terms</a>
                </div>
            </div>
            <div className="black">
                <section id="contact">
                   
                    <div className="icons">
                         <div className="instagram icon">
                            <a href=""><i className="fa-brands fa-instagram brands"></i></a>
            
                         </div> 
                         <div className="whatsapp icon">
                            <a href=""><i className="fa-brands fa-whatsapp brands"></i></a>
            
                         </div>
                         <div className="twitter icon">
                            <a href=""><i className="fa-brands fa-twitter brands"></i></a>
            
                         </div>
                         <div className="xtwitter icon">
                            <a href=""><i className="fa-brands fa-x-twitter brands"></i></a>
            
                         </div>
                        
                        
        
                    
                    </div>
                </section>
            </div>
         </footer>

     </div>
    </div>
  )
}

export default Demosite