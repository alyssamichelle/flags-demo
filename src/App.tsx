import { useState } from "react";
import { users } from "./users";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(users[0].id);
  const user = users.find((u) => u.id === userId)!;

  return (
    <main>
      <h1>Demo Store</h1>

      <label>
        Signed in as{" "}
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name} ({u.plan})
            </option>
          ))}
        </select>
      </label>

      <Checkout user={user} />
    </main>
  );
}

function Checkout({ user }: { user: { name: string } }) {
  return (
    <section>
      <h2>Checkout</h2>
      <p>Hi {user.name}. This is the current checkout.</p>
    </section>
  );
}

export default App;
