import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

import { 
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth } 
from "../../utils/firebase/firebase.utils";



import './create-user.styles.scss';

const defaultformFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const CreateUser = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword} = formFields;
  const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password != confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try{
      const {user} = await createAuthUserWithEmailAndPassword(
        email, 
        password
      );
      setCurrentUser(user);

      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
    } 
    catch(error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use!');
      } else {
        alert('problem creating user!');
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  };

  return (
    <div className='create-user-container'>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Display Name'
          required 
          type='text'
          onChange={handleChange} 
          name='displayName' 
          value={displayName}
        />

        <FormInput
            label='Email'
            required
            type='email' 
            onChange={handleChange} 
            name='email' 
            value={email}
        />

        <FormInput
          label='Password'
          required
          type='password' 
          onChange={handleChange} 
          name='password' 
          value={password}
        />

        <FormInput
          label='Confirm Password' 
          required
          type='password' 
          onChange={handleChange} 
          name='confirmPassword' 
          value={confirmPassword} 
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default CreateUser;