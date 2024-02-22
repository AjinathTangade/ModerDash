import { Keyboard, LogOut, Plus, Settings, Users } from "lucide-react";
import "@flaticon/flaticon-uicons/css/all/all.css";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function RecentChats() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <i
          variant="outline"
          className="fi fi-br-menu-dots-vertical text-md text-gray-500 hover:text-indigo-400"
        >
        
        </i> */}
        <div className="flex gap-2 items-center">
        <span className="text-sm font-semibold text-gray-500">Recent Chats </span>
        <i className="fi fi-bs-angle-down text-gray-500 text-sm font-medium"></i>
        </div>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Sort by time</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Sort by Unread</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Hide favourites</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
