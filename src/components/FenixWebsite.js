import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
function FenixWebsite() {
  return (
    <div id='All'>
      <div className='fenixlogo'>
        <img src='images\fenix-insight-logo-white.png' alt='' id='logo'></img>
        <div id='btn'>
        <Button variant="primary">About Us</Button>{' '}
      <Button variant="primary">Contact Us</Button>{' '}
      <Button variant="primary">Pricing Packages</Button>{' '}
      <Button variant="success">Get Started Now</Button>{' '}
      <Button variant="primary">Login</Button>{' '}
      </div>
      </div>
      <div >
        <img src='./images/fenix-img.png' alt='' id='world'></img>
      </div>
      <div className='AI'>
        <h1>Artificial Intelligence.<br></br>Real Insights.</h1>
        <p>Fenix Insight is an advanced insight engine purpose <br></br> built for EOD operations, training and risk <br></br> management. It incorporates an artificial intelligence <br></br>system, scanning millions of online resources, giving<br></br> an accurate global map of explosive ordnance risk.</p>
        <Button variant="success">Get Started Now</Button>{' '}
        <Button variant="primary">Login</Button>{' '}
      </div>
      <div>
        <img src='./images/fenix-all.png' alt=''></img>
      </div>
      <br></br>
      <br></br>
      <div >
        <img className='earth' src='./images/earth.gif' alt=''></img>
      </div>
      <div className='AI'>
        <h1>Powered by<br></br>custom A.I.</h1>
        <p>We combine Machine Learning, Natural Language <br></br>Processing and lightning fast databases for results <br></br> which are up-to-date and accurate.</p>
      </div>
      <h1>Real-time, interactive, global data</h1>
      <br></br>
      <div id='fenix-mini'>
        <div>
        <h6>Local news and social media <br></br>monitored and mapped 24-7</h6>
        <img src='./images/fenix-mini-1.png' alt=''></img>
        </div>
        <div>
          <h6>Full detail and source of every <br></br>conflict event recorded</h6>
        <img src='./images/fenix-mini-2.png' alt=''></img>
        </div>
        <div>
          <h6>Powerful image search <br></br>categorises images</h6>
        <img src='./images/fenix-mini-3.png' alt=''></img>
        </div>
      </div>
      <br></br>
      <div>
      <select name="currency" id="currency" form="currencyform" >
  <option value="pounds">Pounds</option>
  <option value="euros">Euros</option>
  <option value="dollars">Us Dollars</option>
</select>
      </div>
      <div id='Pro1'>
        <h1>Pro Free Trial</h1>
        <h1>£ 24.99</h1>
        <h6>/user/month</h6>
        <Button variant="info">monthly</Button>{' '}
        <br></br>
        <br></br>
        <div>
        <Button variant="success" size="lg">
          Start 7-Day Free Trail
        </Button>{' '}
        </div>
        <h6>&#x2705; 70+ countries and associated events</h6>
        <h6>&#x2705;Access to munition data</h6>
        <h6>&#x2705;Dynamic category munition data charts</h6>
        <h6>&#x2705;
Detailed country page layout (Map<br></br> layers , Markers , Heatmap ,<br></br> Medical facilities, Infrastructure)</h6>
<h6>&#x2705;Complete munitions information (Pie charts, Line graphs)</h6>
<h6>&#x2705;Informative date range selector</h6>
<h6>&#x2705;Identified munitions</h6>
<h6>&#x2705;Events timeline</h6>
<h6>&#x2705;Upgrade to Teams at any time</h6>
      </div>
      <div id='Pro2'>
        <h1>Pro</h1>
        <h1>£ 24.99</h1>
        <h6>/user/month</h6>
        <span>
        <select name="currency" id="currency" form="currencyform" >
  <option value="user1">1 User</option>
  <option value="user2">2 Users</option>
  <option value="user3">3 Users</option>
  <option value="user4">4 Users</option>
  <option value="user5">5 Users</option>
  <option value="user6">6 Users</option>
  <option value="user7">7 Users</option>
  <option value="user8">8 Users</option>
  <option value="user9">9 Users</option>
  <option value="user10">10 Users</option>
</select>
        </span>
        <Button variant="info">monthly|Annually</Button>{' '}
        <br></br>
        <br></br>
        <div>
        <Button variant="success" size="lg">
          Get Started Now
        </Button>{' '}
        </div>
        <h6>&#x2705; All Benefits of Free trail Access</h6>
        <h6>&#x2705;Team management</h6>
      </div>
      <div id='Pro3'>
        <h6>Enterprise</h6>
        <h1>For Larger Organisations</h1>
        
        <br></br>
        <br></br>
        <div>
        <Button variant="success" size="lg">
          Get in Touch Now
        </Button>{' '}
        </div>
        <h6>&#x2705; All Benefits of Pro Access</h6>
        <h6>&#x2705;Team Management</h6>
        <h6>&#x2705;Dedicated Account Manager</h6>
        <h6>&#x2705;
        Technical Information Point of<br></br> Contact</h6>
<h6>&#x2705;Munition Documentation</h6>
<h6>&#x2705;Advanced Munition Data</h6>
      </div>
      <br></br>
      <div >
        <img id='bgimg' src='https://media.istockphoto.com/id/516604770/photo/computer-source-code-programmer-script-developer.jpg?s=612x612&w=is&k=20&c=_uL6LiLdpTRiQHD_Ht091HutRALM8DGNZ8jy4VKK2ZQ=' alt=''></img>
        <div id='heading'>
        <h1>There's even more to Fenix Insight...</h1>
        <h6>Find out about our Defense Intelligence products.</h6>
        <Button variant="success">Learn More</Button>{' '}
        </div>
        <h6>Ⓒ Fenix Insight Ltd. | Privacy Policy | Cancellation Policy | T's and C's | Contact Us</h6>
      </div>
    </div>
  )
}

export default FenixWebsite