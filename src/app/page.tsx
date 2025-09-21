import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4 justify-center items-center gap-4">
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="link">Button</Button>
    </div>
  );
}
