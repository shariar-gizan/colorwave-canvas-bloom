
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserProfile() {
  return (
    <div className="fixed top-20 right-8 z-50">
      <Avatar className="h-16 w-16 shadow-lg hover:scale-105 transition-transform duration-300">
        <AvatarImage 
          src="https://framerusercontent.com/images/8xIMJ2dOYMXV37h1FSLBBnQFag.png" 
          alt="User Profile" 
        />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
    </div>
  );
}
