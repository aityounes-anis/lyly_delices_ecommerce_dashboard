import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <section>
      <h1 className="text-red-500">Test Title</h1>
      <UserButton />
      <Button>Shadcn UI Button</Button>
    </section>
  );
}
