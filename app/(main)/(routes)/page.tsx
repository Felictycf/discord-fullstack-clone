import { UserButton } from "@clerk/nextjs";
import '../../globals.css'
import { ModeToggle } from "@/components/toggle-mode";

export default function Home() {
  return (
    <div>
      <div>
        <UserButton
          afterSignOutUrl="/"
        />
        <ModeToggle />
      </div>
    </div>
  )
}
