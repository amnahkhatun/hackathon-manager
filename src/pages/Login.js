import React from 'react'
import styled from 'styled-components';

function Login() {
  return (
    <Wrapper>
      <h4>Welcome</h4>
      <p>Login to Dashboard</p>
      <form>
        <label>
          Enter your Name
          <input></input>
        </label>
        <button className="btn">Login</button>
      </form>

     
     
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
  }
`;
export default Login