export default function Page() {
  return (
    <div className="signupContainer">
      <div className="mb-5 text-center">
        <h2>Register</h2>
      </div>
      <div className="input-group mb-4">
        <label htmlFor="userName" className="block mb-2">First name:</label>
        <input type="text" id="userName" name="userName" className="input"/>
      </div>
      <div className="input-group mb-4">
        <label htmlFor="userName" className="block mb-2">Last name:</label>
        <input type="text" id="userName" name="userName" className="input"/>
      </div>
      <div className="input-group mb-4">
        <label htmlFor="userName" className="block mb-2">Email:</label>
        <input type="email" id="userName" name="userName" className="input"/>
      </div>
      <div className="input-group">
        <label htmlFor="passwordInput">Password:</label>
        <input type="password" id="passwordInput" name="passwordInput" className="input"/>
      </div>
      <div className="submit-group">
        <button type="submit" className="mb-4">Sign up</button>
      </div>
    </div>
  )
}