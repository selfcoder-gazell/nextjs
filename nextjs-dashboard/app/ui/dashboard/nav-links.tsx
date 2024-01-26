//add Reacts "use client" directive then import usePathname()
//turns the nav-links.tsx into a Client Component
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

//import the Link component from .next/Link
import Link from 'next/link';

// import usePathname hook provided by next.js
import { usePathname } from 'next/navigation';

//use the clsx library (CSS Styling) to conditionally apply class names when the link is active
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  //assing the path to a variable called pathname inside the NavLinks component:
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          //replacing the <a> tag with the Link component - it has similar function
          //whenever <Link> component appear in the browser's view, 
          //Next.js automatically prefetches the code for the linked route in the 
          //background - making the page transition near-instant
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
           //When link.href matches the pathname, the link should be displayed with blue text and a light blue background.
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
        )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
