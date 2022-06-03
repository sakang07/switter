import React from "react";
import { useState } from "react";
import { authService } from "fbase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  // 값이 변경되는 이벤트가 일어나면
  const onChange = event => {
    // name과 value 값을 가지고 와서 name과 value 변수에 할당
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      // email칸에 입력한 값을 email 변수에 할당(state에 저장)
      setEmail(value);
    } else if (name === "password") {
      // password칸에 입력한 값을 password 변수에 할당(state에 저장)
      setPassword(value);
    }
  };
  const onSubmit = async event => {
    event.preventDefault(); // 기본 기능을 지우지 않으면 새로고침이 된다
    try {
      if (newAccount) {
        // create account
        const data = await createUserWithEmailAndPassword(authService, email, password);
      } else {
        // log in
        const data = await signInWithEmailAndPassword(authService, email, password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='email'
          placeholder='Email'
          required
          value={email /* value값을 state로 설정 */}
          onChange={onChange}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          required
          value={password /* value값을 state로 설정 */}
          onChange={onChange}
        />
        <input type='submit' value={newAccount ? "Create Account" : "Log In"} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
}

export default Auth;
