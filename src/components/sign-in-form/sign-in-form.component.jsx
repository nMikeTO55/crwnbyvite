import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} 
from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultformFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password} = formFields;

  const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  }

  const signInWithGoogle = async () => {
    const {user} = signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const {user} = await signInAuthUserWithEmailAndPassword(
        email, 
        password
      );
      setCurrentUser(user)
      resetFormFields();      
    } 
    catch(error) {
      if  (error.code === 'auth/invalid-credential'){
        alert('incorrect email/password')
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

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
        <div className="buttons-container">
          <Button type='submit'>Sign In</Button>
          <Button type='button' 
            buttonType='google' 
            onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;