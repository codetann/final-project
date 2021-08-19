import React from "react";
import { FadeTransition } from "../../../components/Animations/FadeTransition";
import { MemberView } from "../components/MemberView";
import { AdminView } from "../components/AdminView";
import { useSockets } from "../../../lib/sockets";

export function Waiting() {
  const { isAdmin, members, room } = useSockets();

  return (
    <FadeTransition>
      {isAdmin ? (
        <AdminView members={members} room={room} />
      ) : (
        <MemberView members={members} />
      )}
    </FadeTransition>
  );
}
