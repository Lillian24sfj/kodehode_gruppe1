import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// @ts-expect-error do to vite static import.
import animasjon from "./skjellett.lottie?url";


export function Skeleton({ duration = 2000 }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div>
      {loading ? (
       <DotLottieReact
       src={animasjon}
       loop
       autoplay
     />
      ) : (
       <p>
        Finished loading
        </p>
      )}
    </div>
  );
}
