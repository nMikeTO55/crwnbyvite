import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth
} 
from "../../utils/firebase/firebase.utils"; 

import CreateUser from "../../components/create-user/create-user.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = ()=>{
  return (
    <div>
      <h1>Sign in Page</h1>
      <SignInForm />
      <CreateUser />
    </div>
  );
};

export default Authentication;