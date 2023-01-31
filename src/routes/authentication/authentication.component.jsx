// import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const {user} = await signInWithGooglePopup();
  //   // console.log(response);
  //   const userDocRef=await createUserDocumentFromAuth(user);
  // };
  return (
    <div className="authentication-container">
      {/* <h1>Sign In</h1> */}
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
