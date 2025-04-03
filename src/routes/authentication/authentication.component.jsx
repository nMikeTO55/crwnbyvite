
import CreateUser from "../../components/create-user/create-user.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = ()=>{
  return (
    <div className="authentication-container">
      <SignInForm />
      <CreateUser />
    </div>
  );
};

export default Authentication;