'use client'

import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return (
    <h1 className="bg-gradient-horizontal h-40">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </h1>
  );
}
