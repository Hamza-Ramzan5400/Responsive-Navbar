import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileNavbar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="bg-slate-900">
              <ul className="flex flex-col  gap-5 text-white font-semibold">
                <li>
                  <a href="##">Home</a>
                </li>
                <li>
                  <a href="##">Contact</a>
                </li>
                <li>
                  <a href="##">Gallery</a>
                </li>
                <li>
                  <a href="##">About</a>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
