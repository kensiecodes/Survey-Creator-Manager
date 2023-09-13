export default function Page() {
  return (
    <div className="container">
      <div className="mb-5 text-center">
        <h2>Login</h2>
      </div>
      <div className="input-group mb-4">
        <label htmlFor="userName" className="block mb-2">Username:</label>
        <input type="text" id="userName" name="userName" className="input"/>
      </div>
      <div className="input-group">
        <label htmlFor="passwordInput">Password:</label>
        <input type="password" id="passwordInput" name="passwordInput" className="input"/>
      </div>
      <div className="submit-group">
        <button type="submit" className="mb-4">Login</button>
        <br />
        <p>
          Don't have an account? <a href="/signup" className="text-black underline">Sign up</a>
        </p>
        <p>
          Forgot your password? <a href="/reset" className="text-black underline">Reset password</a>
        </p>
      </div>



    </div>
  )
}

