import React, { useState } from "react";
import "./styles.css";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" },
  ]);

  const onSubmit = (e) => {
    // KODUNUZ BURAYA GELECEK
    e.preventDefault();
    if (!username && !password) return;
    const isThere = accounts.find((item) => {
      return username == item.username && password == item.password;
    });
    if (!isThere) {
      if (username.length > 6 && password.length > 6) {
        if (username.length <= 20 && password.length <= 20) {
          alert(`Yeni Hesap oluşturuldu merhaba ${username} `);
          const newAccounts = [...accounts, { username, password }];
          setAccounts(newAccounts);
        } else {
          alert("username ve password 20 karakterden uzun olmamalıdır");
        }
      } else {
        alert("username ve password 6 karakterden fazla olmalıdır");
      }
    } else {
      alert(`Login başarılı , selam ${username}`);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10,
      }}
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      <input
        value={username}
        type="text"
        onChange={(e) =>setUsername(e.target.value)}
        style={{ marginBottom: 5 }}
      />
      <input
        value={password}
        type="text"
        onChange={ (e) => setPassword(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <button style={{ alignSelf: "center" }} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default App;
