import css from './Nav.css';
function Nav(){
  return(
    <>
    <div className="nav">
    {/* <label htmlFor="explore">Explore</label> */}
    <select name="explore" id="explore">
      <option value="explore"><a href="#">Explore</a></option>
      <option value="Missions"><a href="#">Missions</a></option>
      <option value="Earth & Climate"><a href="#">Earth & Climate</a></option>
      <option value="The solar System"><a href="#">The solar system</a></option>
      <option value="The Universe"><a href="#">The universe</a></option>
    </select>
    <input type="text" name="search" id="search" placeholder='Search...'/>
    <a href="#" id='img1'><img src="./nasa.svg" alt="image" /></a>
    <select name="events" id="events">
      <option value="All NASA News"><a href="#">News & Events</a></option>
      <option value="Video Series on NASA+"><a href="#">Video Series on NASA+</a></option>
      <option value="Podcasts"><a href="#">Podcasts</a></option>
      <option value="Blogs"><a href="#">Blogs</a></option>
      <option value="Newsletters"><a href="#">Newsletters</a></option>
    </select>
    <select name="multimedia" id="multimedia">
      <option value="NASA+"><a href="#">Multimedia</a></option>
      <option value="Images"><a href="#">Images</a></option>
      <option value="Nasa TV"><a href="#">Nasa TV</a></option>
      <option value="Sounds and Ringtones"><a href="#">Sounds and Ringtones</a></option>
      <option value="Interactives"><a href="#">Interactives</a></option>
    </select>
   <button id="Nasa"><a href="#">NASAS+ <span>LIVE</span></a></button>
    </div>
    {/* ! banner 1 content start */}
    <div className="ban1">
     <h3>LIVE at 1 a.m.EDT, Saturday, Aug. 17 (0500 UTC)</h3>
     <hr id='hr'/>
    <div className="space">
     <a href="#"><img src="./images/station-space.webp" alt="space station" /></a> 
     <h2>Progress 89 Cargo Spacecraft <br />Coverage</h2>
     <p>Live coverage of the rendezvuous and docking of the Progress 89 cargo <br />
     spacecraft to t he International Space Station</p>
     <a href="#"><img src="./images/right-arrow.png" alt="" /></a>
    </div>
    </div>
    <div className="banner2">
      <img src="./images/ban.gif" alt="" />
      <div className="content">
        <h2>Full-Stream Ahead</h2>
        <p>This summer, NASA will take gaint leap by cutting the cord and going full- <br />
        stram ahead for the benefit of all. Watch on-demand launch coverage, inspiring <br />
        stories,and exploration for the next generation on one platform, NASA+.</p>
        <button><a href="#">The Universe at Your Fingertips</a></button>
        <div className="box">
          <div className="box-content1">
            <hr />
            <h5>N A S A + S E R I E S</h5>
            <p id='par'>Other Worlds<i class="fa-solid fa-arrow-trend-up arrow"></i></p>
          </div>
          <div className="box-content2">
            <hr />
            <h5>N A S A + S E R I E S</h5>
            <p id='par'>Space Out <i class="fa-solid fa-arrow-trend-up arrow"></i></p>
          </div>
          <div className="box-content3">
            <hr />
            <h5>N A S A + S E R I E S</h5>
            <p id='par'>The Color od Space <i class="fa-solid fa-arrow-trend-up arrow"></i></p>
          </div>
        </div>
      </div>
    </div>
    {/*! banner 1 content end */}
    <div className="container">

    <div className="check1">
    <h3 id='h3'>Featured News</h3>
    <h3 id='news'>More Nasa News <i class="fa-solid fa-arrow-trend-up"></i></h3>
    </div>
    </div>
    {/* Grid container start */}
    <div className="container-fluid">
      <div className="parent">
        <div className="child1">
          {/* <img src="./images/red-box-space.webp" alt=""/> */}
          <div className="content-ex">
            <h3>&trade; A R T I C L E</h3>
            <p>4 M I N R E A D</p>
            <h2>NASA Citizen Scientists Spot Object Moving 1 Million <br />Miles Per Hour</h2>
          </div>
        </div>
        <div className="child2">
         {/* <img src="./images/yellow-box-space.webp" alt="" /> */}
         <div className="content-ex1">
            <h3>&trade; A R T I C L E</h3>
            <p>9 M I N R E A D</p>
            <h4>NASA Select 5 New Roman Technology Fellows in Astrophysics.<br />Miles Per Hour</h4>
          </div>
        </div>
        <div className="child3">
          {/* <img src="./images/blue-box-space.webp" alt="" /> */}
          <div className="content-ex2">
            <h3>&trade; A R T I C L E</h3>
            <p>5 M I N R E A D</p>
            <h4>NASA Telescopes Work.<br />Out Black Hole's Snacks <br />Schedule</h4>
          </div>
        </div>
        <div className="child4">
          {/* <img src="./images/pink-box-space.webp" alt="" /> */}
        </div>
      </div>
    </div>
    {/* Grid container end */}
    {/* ! flex position start */}
    <div className="container">
      <div className="par1">
        <div className="child1">
          <img src="./images/flex1.webp" alt="" />
          <div className="cont">
            <p>5 M I N R E A D</p>
            <h3>NASA D emonstrates 'Ultra-Cool <br />Quantum Sensor for <br />First Time in Space.</h3>
            <h4>&trade; A R T I C L E</h4>
          </div>
        </div>
        <div className="child2">
          <img src="./images/flex1.webp" alt="" />
          <div className="cont">
            <p>6 M I N R E A D</p>
            <h3>Primary Instument for Roman <br />Space Telescope Arrives at <br />NASA Goddard.</h3>
            <h4>&trade; A R T I C L E</h4>
          </div>
        </div>
        <div className="child3">
          <img src="./images/flex3.webp" alt="" />
          <div className="cont">
            <p>3 M I N R E A D</p>
            <h3>NASA's X-59 Progresses<br />Through Tests on the Path to <br />Flight.</h3>
            <h4>&trade; A R T I C L E</h4>
          </div>
        </div>
        <div className="child4">
          <img src="./images/flex4.webp" alt="" />
          <div className="cont">
            <p>6 M I N R E A D</p>
            <h3>What's Up:August 2024 <br />Skywatching Tips from NASA.</h3>
            <h4>&trade; A R T I C L E</h4>
          </div>
        </div>
      </div>
    </div>
    {/* ! flex position end */}
    {/* ! down mars banner start */}
    <div className="container-fluid">
      <div className="main">
        <div className="content">
          <h2>Earth <br />Information <br />Center</h2>
          <p>For more than 50 years, NASA satellites have provided data on Earth's land, <br /> water, air, temperature, and climate. NASA's Earth Information <br /> Center allows visitors to see how our planet is changing in six key areas: <br /> sea level rise and coastal impacts, health and air quality, wildfires, <br /> greenhouse gases, sustainable energy, and agriculture.</p>
          <h4>Start Exploring <i class="fa-solid fa-arrow-trend-up arrow"></i></h4>
        </div>
      </div>
    </div>
    {/* ! down mars banner end */}
    {/* Rings in things start */}
    <div className="container-fluid">
      <div className="main1">
        <div className="child1">
          <p id='today'>T O D A Y</p>
          <h2>Image Of The Day</h2>
          <h4>Rings and Things</h4>
          <p>The subject of this week's circular Hubble Picture of <br />
          the Week is situated in the Pereus Cluster,alse <br />
          Known as Abell 426,320 million light-years from <br />
          Earth.It's a barred spiral galaxy Known as MCG+07-07-072 <br />
          ,seen here among a number of Photobombing <br />
          stars that are much closer to Earth than it is. <br />
          MCG+07-07-072 has quite an unusual shape, for a <br />
          spiral galaxy,with thin arms emerging from the ends <br />
          of its barred core to draw a near-circle around its <br />
          disc.</p>
          <h5>Browse Image Archive <i class="fa-solid fa-arrow-trend-up arrow"></i></h5>
        </div>
        <div className="child2"></div>
      </div>
    </div>
    {/* Rings in things end */}
    {/* ! climbing position start here.. */}
    <div className="container-fluid">
      <div className="main3">
        <div className="content">
          <h2>Climbing the <br />Jezero Crater</h2>
          <p>After two and a half years exploring Jezero Crater’s floor <br /> and river delta, NASA’s Perseverance Mars rover will ascend <br /> to an area where it will search for more discoveries that could <br /> rewrite Mars’ history. </p>
          <h4>Onward to the Crater Rim <i class="fa-solid fa-arrow-trend-up arrow"></i></h4>
        </div>
      </div>
    </div>
    {/* ! climbing position start end... */}
    {/* ! Image galary start here... */}
    <div className="container-fluid">
      <div className="flex">
{/* <h2 id="head">More Nasa Images : </h2> */}
      <div className="container-image1">
        <div className="child1"></div>
        <div className="child2"></div>
        <div className="child3"></div>
      </div>
      <div className="container-image2">
        <div className="child1"></div>
        <div className="child2"></div>
        <div className="child3"></div>
      </div>

      </div>  
    </div>
    {/* ! Image galary start end... */}
    {/* ! More Topics from Nasa */}
    <div className="container-fluid">
      <h2 id='more'>More Topics from NASA</h2>
      <div className="tops">
        <div className="child1">
          <img src="./images/box1.webp" alt="" />
          <div className="content">
            <h2>Mission <i class="fa-solid fa-arrow-trend-up arrow"></i></h2>
          </div>
        </div>
        <div className="child2">
          <img src="./images/box2.webp" alt="" />
          <div className="content">
            <h2>Humans In <br />Space <i class="fa-solid fa-arrow-trend-up arrow"></i></h2>
          </div>
        </div>
        <div className="child3">
          <img src="./images/box3.webp" alt="" />
          <div className="content">
            <h2>Climatic Change <i class="fa-solid fa-arrow-trend-up arrow"></i></h2>
          </div>
        </div>
        <div className="child4">
          <img src="./images/box4.webp" alt="" />
          <div className="content">
            <h2>Climatic Change <i class="fa-solid fa-arrow-trend-up arrow"></i></h2>
          </div>
        </div>
      </div>
      <div className="tops1">
        <div className="child1">
          <img src="./images/box5.webp" alt="" />
          <div className="content">
            <h2>Universe <i class="fa-solid fa-arrow-trend-up arrow"></i></h2>
          </div>
        </div>
        <div className="child2">
          <img src="./images/box6.webp" alt="" />
          <div className="content">
            <h2>Science News <i class="fa-solid fa-arrow-trend-up arrow"></i></h2>
          </div>
        </div>
        <div className="child3">
          <img src="./images/box7.webp" alt="" />
          <div className="content">
            <h2>Aeronautics <i class="fa-solid fa-arrow-trend-up arrow"></i></h2>
          </div>
        </div>
        <div className="child4">
          <img src="./images/box8.webp" alt="" />
          <div className="content">
            <h2>Technology <i class="fa-solid fa-arrow-trend-up arrow"></i></h2>
          </div>
        </div>
      </div>
    </div>
    {/* ! More Topics from Nasa end */}
    {/* Universe start here */}
    <div className="container-fluid">
      <div className="main4">
        <div className="content">
          <h2>Explore the <br />Universe from <br />Your Inbox</h2>
          <p>Stay up-to-date on the latest news from NASA–from Earth to the <br /> Moon, the Solar System and beyond.</p>
          <p>We will never share your email address. <span>Privacy Policy</span></p>
          <h4>Sign Up <i class="fa-solid fa-arrow-trend-up arrow"></i></h4>
        </div>
      </div>
    </div>
    {/* Universe start end */}
    {/* footer start  */}
    <div className="container-fluid">
      <div className="footer">
        <img src="./nasa.svg" alt="checkout" />
        <div className="foot-child">
          <div className="child1">
            <h2>National Aeronautics and Space <br />Administation</h2>
            <p>NASA explore the unknown in air and space <br />
            innovates for the benefit of humanity,and inspires the <br />
            world through discovery.</p>
            <b>About NASA's Mission</b>
            <h3>Join Us <i class="fa-solid fa-arrow-trend-up arrow"></i></h3>
          </div>
          <div className="child2">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">news & Events</a></li>
              <li><a href="#">Multimedia</a></li>
              <li><a href="#">NASA+ <span>LIVE</span></a></li>
              <li><a href="#">Missions</a></li>
            </ul>
            <ul>
              <li><a href="#">Humans in Space</a></li>
              <li><a href="#">Earth & Climate</a></li>
              <li><a href="#">The Solar System</a></li>
              <li><a href="#">The Universe</a></li>
              <li><a href="#">Science</a></li>
            </ul>
            <ul>
              <li><a href="#">Aeronautics</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Learning Resources</a></li>
              <li><a href="#">NASA en Espanol</a></li>
              <li><a href="#">Missions</a></li>
            </ul>
            <div className="follow">
              <h3>Follow NASA</h3>
              <div className="icons">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
              </div>
              <h4 id='h4'>More NASA Social Accounts</h4>
              <h4>NASA Newsletters</h4>
            </div>
          </div>
        </div>
        <div className="foot2">
          <p><a href="#">Sitemap</a></p>
          <p><a href="#">For Media</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">FOIA</a></p>
          <p><a href="#">No FEAR Act</a></p>
          <p><a href="#">Office of the IG</a></p>
          <p><a href="#">Budget & Annual Reports</a></p>
          <p><a href="#">Agency Financial Reports</a></p>
          <p><a href="#">Contact NASA</a></p>
          <p><a href="#">Accessibility</a></p>
        </div>
        <div className="foot3">
          <p>Page Last Updated: Aug 17,2024</p>
          <p>Page Editor: Brittany A.Brown</p>
          <p>Responsible NASA Official:Abigail Browman</p>
        </div>
      </div>
    </div>
    {/* footer end */}
    </>
  )
};

export default Nav;