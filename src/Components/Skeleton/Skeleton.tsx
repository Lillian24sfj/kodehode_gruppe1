import { useEffect, useState } from "react";
import { GiSkeleton } from "react-icons/gi";
import { GiRaiseSkeleton } from "react-icons/gi";

export function Skeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <p style={{ fontSize: "50px" }}>
          <GiRaiseSkeleton />
        </p>
      ) : (
        <p style={{ fontSize: "50px" }}>
          <GiSkeleton />
        </p>
      )}
    </div>
  );
}
