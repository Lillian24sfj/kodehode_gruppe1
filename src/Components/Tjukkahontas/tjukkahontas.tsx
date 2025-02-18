import { useState } from "react";

export function TjukkahontasSignature() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Tjukkahontas sin Signatur</h3>
      <button onClick={() => setCount(count + 1)}>
        <a href="https://www.lunehjem.no/rom-til-rom/kjokken/kjokkenutstyr/petra-morter">
          Fin morter sett på {count}
        </a>
      </button>
    </div>
  );
}
