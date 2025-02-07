"use client";

import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/services/api/authService";

const whoAmI = async () => {
  const response = await getUser();
  console.log(response);
};

export default function Home() {
  return (
    <div>
      <Button onClick={whoAmI}>Who are u</Button>
    </div>
  );
}
