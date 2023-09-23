import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData)
  }

  return (
   <div className=" flex flex-col items-center mt-2">
   <form onSubmit={submitHandler}>

    <label htmlFor="firstName" className="font-bold">First name</label>
    <br/>
    <input
      className="border-solid rounded-lg bg-green-200   w-96 hover:bg-gradient-to-r from-cyan-200 to-blue-200 h-8"
      type="text"
      name="firstName"
      id="firstName"
      placeholder ="Enter You First name"
      value={formData.firstName}
      onChange={changeHandler}
      
    />

    <br/>
    <label htmlFor="lastName" className="font-bold" >Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Babbar"
      value={formData.lastName}
      onChange={changeHandler}
      className="border-solid rounded-lg bg-green-200 w-96 hover:bg-gradient-to-r from-cyan-200 to-blue-200 h-8"
    />

    <br/>
    <label htmlFor="email" className="font-bold" >Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="love@abcd.com"
      value={formData.email}
      onChange={changeHandler}
      className="border-solid rounded-lg bg-yellow-100  w-96 hover:bg-gradient-to-r from-cyan-200 to-blue-200 h-8"
    />

    <br/>
    <label htmlFor="country" className="font-bold">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="outline"
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>
    <label htmlFor="streetAddress" className="font-bold">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="B-25C"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="border-solid rounded-lg bg-green-200 w-96 hover:bg-gradient-to-r from-cyan-200 to-blue-200 h-8"
    />

    <br/>
    <label htmlFor="city " className="font-bold">City</label>
    <br/>
    <input
      type="text"
      name="city"
      id="city"
      placeholder="B-25C"
      value={formData.city}
      onChange={changeHandler}
      className="border-solid rounded-lg bg-green-200 w-96 hover:bg-gradient-to-r from-cyan-200 to-blue-200 h-8"
    />

  <br/>
    <label htmlFor="state" className="font-bold" >State / Province</label>
    <br/>
    <input
      type="text"
      name="state"
      id="state"
      placeholder="Bihar"
      value={formData.state}
      onChange={changeHandler}
      className="border-solid rounded-lg bg-green-200 w-96 hover:bg-gradient-to-r from-cyan-200 to-blue-200 h-8"
    />

    <br/>
    <label htmlFor="postalCode" className="font-bold" >Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="110077"
      value={formData.postalCode}
      onChange={changeHandler}
      className="border-solid rounded-lg bg-green-200 w-96 hover:bg-gradient-to-r from-cyan-200 to-blue-200 h-8"
    />

    <br/>
    <br/>
    <fieldset>
      <legend className="font-bold" >By Email</legend>

      <div className="flex">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="comments">Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>

      <div className="flex">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="candidates">Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
      </div>
      </div>

      <div className="flex">
      <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="offers">Offers</label>
        <p>Get notified when a candidate accepts or rejects an offer.

</p>
      </div>
      </div>
      


    </fieldset>

    <br/>
    <br/>
    <fieldset>
      <legend className="font-bold" >Push Notifications</legend>
      <p>These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
      />

      <label htmlFor="pushEverything">Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
      />

      <label htmlFor="pushEmail">Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
      />

      <label htmlFor="pushNothing">No Push Notifications</label>

    </fieldset>



   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4 w-40"
   >Save</button>






   </form>

   </div>
  );
}

export default App;
