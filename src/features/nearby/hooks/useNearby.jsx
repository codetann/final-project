import { useEffect } from "react";

import { useAppContext } from "../../../context/ContextProvider";
import { fetchNearby } from "../api";

export function useNearby() {
  const { nearby, setNearby } = useAppContext();

  useEffect(() => {
    if (nearby) return;
    const _ = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const data = await fetchNearby(
          position.coords.latitude,
          position.coords.longitude
        );
        setNearby(data);
      });
    };

    _();
  }, []);

  return { nearby };
}
