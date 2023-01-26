import './App.css';
import {GoogleLogin} from 'react-google-login'
//import env from 'react-dotenv'

function App() {
  
  const handleLogin = async googleData => {
    console.log("hello everyone: "+googleData.token)
    const res = await fetch("http://localhost:5001/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }
  

  return (
    <div className="App">
      <GoogleLogin
            clientId="22382349268-25qdci2cenu1bbk3pse1n7nm26n4frcu.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
    </div>
  )
}

export default App;
