"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const navigationData = [
  { title: "home", href: "/" },
  { title: "shop", href: "/shop" },
  { title: "new", href: "/new" },
  {
    title: "women",
    subTitle: [
      {
        title: "Anarkalis",
        href: "/anarkalis",
        description: "Regal anarkali suits with intricate designs",
      },
      {
        title: "Shararas",
        href: "/shararas",
        description: "Beautiful sharara sets for special occasions",
      },
      {
        title: "Wedding Collection",
        href: "/wedding-collection",
        description: "Bridal and wedding guest outfits",
      },
      {
        title: "Ready to Wear",
        href: "/ready-to-wear",
        description: "Items available for immediate purchase",
      },
    ],
  },
  { title: "kids", href: "/kids" },
  { title: "men", href: "/men" },
  { title: "jewllery", href: "/jewllery" },
  { title: "wedding", href: "/wedding" },
  { title: "wear", href: "/wear" },
  { title: "bags", href: "/bags" },
  {
    title: "party",
    subTitle: [
      {
        title: "New Arrivals",
        href: "/new-arrivals",
        description: "Fresh designs just added to our collection",
      },
      {
        title: "Lehengas",
        href: "/lehengas",
        description: "Traditional and contemporary lehenga designs",
      },
      {
        title: "Sarees",
        href: "/sarees",
        description: "Elegant sarees for every occasion",
      },
    ],
    featured: {
      image: "/image/7.png",
      title: "Women's Fashion",
      href: "/women's-fashion",
      description:
        "Explore our complete collection of ethnic and contemporary wear",
    },
  },
  { title: "Sale", href: "/sale" },
];

export function BottomNavigationBar() {
  const pathname = usePathname();

  return (
    <section className="bg-[#400A38]">
      <NavigationMenu className="container mx-auto px-4 py-4 flex items-center justify-center">
        <NavigationMenuList className="flex gap-6">
          {navigationData.map((item, index) => {
            const isActive = pathname === item?.href;

            if (item?.subTitle) {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-[#CAC8CA] hover:text-[#E60CD9] transition duration-300 cursor-pointer capitalize",
                      isActive && "text-[#E60CD9] underline"
                    )}
                  >
                    {item?.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={`grid gap-2 p-2 ${
                        item.featured
                          ? "md:w-[500px] lg:w-[800px] lg:grid-cols-2"
                          : "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[500px]"
                      }`}
                    >
                      {item?.featured && (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.featured.href}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#400A38] bg-blend-overlay bg-cover bg-center p-6 no-underline outline-none text-white"
                              style={{
                                backgroundImage: `url(${item.featured.image})`,
                              }}
                            >
                              <div className="mb-2 mt-4 text-lg font-medium drop-shadow">
                                {item.featured.title}
                              </div>
                              <p className="text-sm leading-tight drop-shadow">
                                {item.featured.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )}

                      {item?.subTitle.map((subItem, subIndex) => {
                        const isSubActive = pathname === subItem.href;

                        return (
                          <ListItem
                            key={subIndex}
                            title={subItem.title}
                            href={subItem.href}
                            active={isSubActive}
                          >
                            {subItem.description}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            } else {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={cn(
                      "text-[#CAC8CA] hover:text-[#E60CD9] transition duration-300 capitalize",
                      isActive && "text-[#E60CD9] underline"
                    )}
                    asChild
                  >
                    <Link href={item?.href}>{item?.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, active, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-50 hover:text-pink-600 focus:bg-pink-50 focus:text-pink-600",
              active && "text-[#E60CD9]",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
