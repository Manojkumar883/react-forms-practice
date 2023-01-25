import { useState } from "react";
import "./App.css";

const intialFormState = {
  name: '',
  address :'',
  phone: '',
  email:''
}
export default function App() {
  
  //TODO: Add your state fields here
 const [formState, setFormState] = useState(intialFormState)
//  const [address, setAddress] = useState(intialFormState.address)

 const handleChange = (event) => {
  const value = event.target.value
  const name = event.target.name
  const type = event.target.type


  console.log("handleChange", name, type, value)

  const newFormState = {...formState}
  if(name === 'name') {
    newFormState.name = value
  }
  if(name === 'address') {
    newFormState.address = value
  }
  if(name === 'email') {
    newFormState.email = value
  }
  if(name === 'phone') {
    newFormState.phone = value
  }
  setFormState(newFormState)
 
 }

const handleSubmit = (event) => {
  event.preventDefault()

  console.log("form submitted.name=",formState.name , "address =",formState.address,
  formState.email, formState.phone )
  setFormState(intialFormState)
}
  return (
    <>
      <form className="form" onSubmit = {handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" value = {formState.name} onChange ={handleChange}required />
          </label>
          <label>
            Address
            <input type="text" name="address" value = {formState.address} onChange = {handleChange}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value = {formState.phone} onChange = {handleChange} />
          </label>

          <label>
            Email
            <input type="email" name="email"  value = {formState.email} onChange = {handleChange}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
