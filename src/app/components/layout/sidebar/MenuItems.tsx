import {
  IconBoxMultiple,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconLogout,
  IconPhoto,
  IconPoint,
  IconStar,
  IconTable,
  IconUser,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/landing-page",
  },
  {
    id: uniqueId(),
    title: "Pets",
    icon: IconLayoutGrid,
    href: "/my-pets",
  },
  {
    id: uniqueId(),
    title: "Services",
    icon: IconCircleDot,
    href: "/request-service",
  },
  {
    id: uniqueId(),
    title: "Profile",
    icon: IconUser,
    href: "/landing-page/",
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconLogout,
    href: "/",
  },
  // {
  //   id: uniqueId(),
  //   title: "Alerts",
  //   icon: IconInfoCircle,
  //   href: "/demo/ui-components/alerts",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Ratings",
  //   icon: IconStar,
  //   href: "/demo/ui-components/ratings",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Images",
  //   icon: IconPhoto,
  //   href: "/demo/ui-components/images",
  // },
];

export default Menuitems;
