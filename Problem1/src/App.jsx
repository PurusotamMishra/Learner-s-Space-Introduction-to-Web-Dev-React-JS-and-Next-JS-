import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <div id="header">
          <div className="left"><h2>Blue Planet PG</h2>
          </div>
          <div className="mid">
            <ul id='navbar'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Tech</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </header>

      <br />
      <br />
      <br />

      {/* Reviews */}
      <div className='reviews'>
        <h3 className='subheading'>Reviews</h3>
        <div className="testimonials">
          <div class="container">
              <p><span>Jhonny Depp</span>Room No. 192</p>
              <p>Love to play Guitar. Nice place to learn and practice.</p>
          </div>
          <div class="container">
              <p><span>Elon Musk</span>Room No. 582</p>
              <p>The Tech inventory has many useful things including a Glue gun and screw drivers set I used recently.</p>
          </div>
          <div class="container">
              <p>Virat Kohli<span></span>Room No. 622</p>
              <p>I use mostly Cricket kit when I go to play indoor nets a few minutes form PG. All the items are well maintained. </p>
          </div>

        </div>

      </div>

      {/* Subcribe the newsletter */}
      <div className="subscribe">
        <h3 className='subheading'>Subscribe to Newsletter</h3>
        <p>Please enter your details to subscribe to the newsletter. This will be needed
          to inform you about the every updates regarding inventory.</p>
        <table className='tabelForReviews'>
          <tr>
            <td>Name</td>
            <td><input type="text" size={50} maxLength={50} /></td>
          </tr>
          <tr>
            <td>e-mail Id</td>
            <td><input type="email" size={50} maxLength={50} /></td>
          </tr>
          <tr>
            <td>Mobile Number</td>
            <td><input type="text" size={50} maxLength={50} /></td>
          </tr>
          <tr>
            <td>Room Number</td>
            <td><input type="text" size={50} maxLength={4} /></td>
          </tr>
          <tr>
            <input type="submit" name="submit" id="submit" />
          </tr>
        </table>
        {/* <form action="" className='tableForReviews'>
            <label htmlFor="name">Full Name </label>
            <input type="text" name="name" id="name" maxLength={50} size={50}/> <br />
            <label htmlFor="email">e-mail Id </label>
            <input type="email" name="email" id="email" maxLength={50} size={50}/><br />
            <label htmlFor="mobilenumber">Mobile Number </label>
            <input type="number" name="mobilenumber" id="mobilenumber" maxLength={10} size={50}/><br />
            <label htmlFor="roomnumber">Full Name </label>
            <input type="number" name="roomnumber" id="roomnumber" maxLength={4} size={50}/><br />
            <input type="submit" name="submit" id="submit" />
          </form> */}
      </div>
    </div>
  )
}

export default App
