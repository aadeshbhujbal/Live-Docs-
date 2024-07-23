"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/ui/Loader";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      // publicApiKey={
      //   "pk_dev_aVxRn9C14LqtfenwrWacUbMMi35pY78TpFLZlCPzCfetfW3NJTupTjCxltN5CFVP"
      // }
    >
      <ClientSideSuspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
}
