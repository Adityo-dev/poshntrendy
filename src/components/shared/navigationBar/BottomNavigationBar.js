"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigationData = [
  {
    type: "link",
    title: "Home",
    href: "/",
  },
  {
    type: "link",
    title: "New",
    href: "/new",
  },
  {
    type: "link",
    title: "Sale",
    href: "/sale",
  },
  {
    type: "link",
    title: "New",
    href: "/new",
  },
  {
    type: "link",
    title: "Women",
    href: "/women",
  },
  {
    type: "link",
    title: "Lehengas",
    href: "/lehengas",
  },
  {
    type: "link",
    title: "Sarees",
    href: "/sarees",
  },
  {
    type: "link",
    title: "Kurta Sets",
    href: "/kurta-sets",
  },
  {
    type: "link",
    title: "Anarkalis",
    href: "/anarkalis",
  },
  {
    type: "link",
    title: "Shararas",
    href: "/shararas",
  },
  {
    type: "link",
    title: "Dresses",
    href: "/dresses",
  },
  {
    type: "dropdown",
    title: "Special",
    items: [
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
        href: "/wedding",
        description: "Bridal and wedding guest outfits",
      },
      {
        title: "Ready to Wear",
        href: "/ready-to-wear",
        description: "Items available for immediate purchase",
      },
    ],
  },
  {
    type: "link",
    title: "Pret",
    href: "/pret",
  },
  {
    type: "link",
    title: "Fusion",
    href: "/fusion",
  },
  {
    type: "link",
    title: "Wedding",
    href: "/wedding",
  },
  {
    type: "dropdown",
    title: "Women",
    items: [
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
      {
        title: "Kurta Sets",
        href: "/kurta-sets",
        description: "Stylish kurta sets for casual and formal wear",
      },
      {
        title: "Dresses",
        href: "/dresses",
        description: "Western and fusion dress collection",
      },
      {
        title: "Pret",
        href: "/pret",
        description: "Ready-to-wear designer outfits",
      },
      {
        title: "Fusion",
        href: "/fusion",
        description: "Modern fusion of traditional and contemporary styles",
      },
    ],
    featured: {
      title: "Women's Fashion",
      href: "/women",
      description:
        "Explore our complete collection of ethnic and contemporary wear",
    },
  },
  {
    type: "link",
    title: "Ready",
    href: "/ready-to-wear",
  },
  {
    type: "link",
    title: "Sale",
    href: "/sale",
  },
];

export function BottomNavigationBar() {
  return (
    <section className="bg-[#400A38] py-4">
      <NavigationMenu className="container mx-auto">
        <NavigationMenuList className={"flex gap-6"}>
          {navigationData.map((item, index) => {
            if (item.type === "dropdown") {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className={"text-[#CAC8CA]"}>
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={`grid gap-3 p-4 ${
                        item.featured
                          ? "md:w-[500px] lg:w-[600px] lg:grid-cols-2"
                          : "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                      }`}
                    >
                      {item.featured && (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.featured.href}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-pink-100 to-pink-50 p-6 no-underline outline-none"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                {item.featured.title}
                              </div>
                              <p className="text-sm leading-tight text-gray-600">
                                {item.featured.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )}
                      {item.items.map((subItem, subIndex) => (
                        <ListItem
                          key={subIndex}
                          title={subItem.title}
                          href={subItem.href}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            } else {
              return (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={"text-[#CAC8CA]"}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
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
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-50 hover:text-pink-600 focus:bg-pink-50 focus:text-pink-600",
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
