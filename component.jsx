/** 
 * v0 by Vercel. 
 * @see https://v0.dev/t/mXnPTGS337a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="h-8 w-8" />
            <span className="text-xl font-semibold">Book Library</span>
          </Link>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search books..."
              className="bg-primary-foreground/10 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
            <UserIcon className="h-6 w-6" />
          </Link>
          <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
            <ShoppingCartIcon className="h-6 w-6" />
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <nav className="bg-muted py-3 px-6 sticky top-0 z-10">
        <div className="flex gap-6 overflow-x-auto">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
            prefetch={false}
          >
            <BookIcon className="h-5 w-5" />
            <span>Fiction</span>
            <div className="relative group">
              <Button variant="ghost" size="icon" className="ml-2">
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-md shadow-lg z-20 group-hover:block hidden">
                <div className="py-2">
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Mystery
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Romance
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Sci-Fi
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Fantasy
                  </Link>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
            prefetch={false}
          >
            <BookIcon className="h-5 w-5" />
            <span>Non-Fiction</span>
            <div className="relative group">
              <Button variant="ghost" size="icon" className="ml-2">
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-md shadow-lg z-20 group-hover:block hidden">
                <div className="py-2">
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Biography
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    History
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Self-Help
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Business
                  </Link>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
            prefetch={false}
          >
            <BookIcon className="h-5 w-5" />
            <span>Children</span>
            <div className="relative group">
              <Button variant="ghost" size="icon" className="ml-2">
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-md shadow-lg z-20 group-hover:block hidden">
                <div className="py-2">
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Picture Books
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Early Readers
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Middle Grade
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Young Adult
                  </Link>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
            prefetch={false}
          >
            <BookIcon className="h-5 w-5" />
            <span>Classics</span>
            <div className="relative group">
              <Button variant="ghost" size="icon" className="ml-2">
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-md shadow-lg z-20 group-hover:block hidden">
                <div className="py-2">
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Literature
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Philosophy
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Poetry
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Drama
                  </Link>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
            prefetch={false}
          >
            <BookIcon className="h-5 w-5" />
            <span>Arts & Entertainment</span>
            <div className="relative group">
              <Button variant="ghost" size="icon" className="ml-2">
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-md shadow-lg z-20 group-hover:block hidden">
                <div className="py-2">
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Art
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Music
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Film
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-muted/50 transition-colors" prefetch={false}>
                    Theater
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </nav>
      <main className="flex-1 overflow-y-auto" />
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}