import { Button } from "../ui/button";
import { countryCode } from "@/data/data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Country() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="px-2 border-0 rounded-full py-2 hover:bg-indigo-100"><img src="/icon-flag-en.svg" alt="county-flag" className="rounded-full h-10 w-6" /></Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-0">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-1 items-center">
              {countryCode.map((country) => (
                <div key={country.title} className="flex gap-4 hover:bg-indigo-50 p-3">
                  <img src={country.icon} alt={country.title} />
                  <p className="text-sm text-gray-600">{country.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
