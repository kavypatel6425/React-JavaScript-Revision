import { useEffect, useState } from "react";

function OnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineStatus = () => setOnline(true);
    const offlineStatus = () => setOnline(false);

    window.addEventListener("online", onlineStatus);
    window.addEventListener("offline", offlineStatus);

    return () => {
      window.removeEventListener("online", onlineStatus);
      window.removeEventListener("offline", offlineStatus);
    };
  }, []);

  return <h3>{online ? "Online" : "Offline"}</h3>;
}

export default OnlineStatus;