import { Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";

export default function AddUser({ users, setUsers }) {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const example = {};
  example.name = name;
  example.password = password;
  example.age = age;
  example.email = email;
  const history = useHistory();
  return (
    <form>
      <div className="row">
        <TextField
          label="UserName"
          variant="standard"
          id="title"
          type="text"
          className="col"
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          id="Password"
          label="Password"
          variant="standard"
          type="text"
          className="col"
          onInput={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          label="Age"
          variant="standard"
          type="text"
          id="Age"
          className="col"
          onInput={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          id="email"
          label="email"
          variant="standard"
          className="col"
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <p></p>
      <div className="row">
        <Button
          variant="outlined"
          onClick={() => {
            setUsers([...users, example]);
            history.push("/");
          }}
        >
          Create
        </Button>
      </div>
    </form>
  );
}
