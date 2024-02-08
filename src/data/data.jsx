import React from "react";

const sideBarLinks = [
  {
    label: "Calendar",
    href: "/link1",
    icon: <i className="fi fi-rr-calendar-day"></i>,
  },
  {
    label: "Kanban",
    href: "/link2",
    icon: <i className="fi fi-rr-square-kanban"></i>,
  },
  {
    label: "Chat",
    href: "/link3",
    icon: <i className="fi fi-rr-comment-alt"></i>,
  },
  {
    label: "Email",
    href: "/link4",
    icon: <i className="fi fi-rr-envelope"></i>,
  },
  {
    label: "Notes",
    href: "/link5",
    icon: <i className="fi fi-rr-memo"></i>,
  },
  {
    label: "Contact Table",
    href: "/link6",
    icon: <i className="fi fi-rr-phone-call"></i>,
  },
  {
    label: "Contact List",
    href: "/link7",
    icon: <i className="fi fi-rr-list-timeline"></i>,
  },
  {
    label: "Invoice",
    href: "/link8",
    icon: <i className="fi fi-rr-file-invoice"></i>,
  },
  {
    label: "User Profile",
    href: "/link9",
    icon: <i className="fi fi-rr-circle-user"></i>,
  },
  {
    label: "Blog",
    href: "/link10",
    icon: <i className="fi fi-rr-blog-pencil"></i>,
  },
  {
    label: "Ecommerce",
    href: "/link11",
    icon: <i className="fi fi-rs-basket-shopping-simple"></i>,
  },
];
const sideBarLinksHome = [
  {
    label: "Modern",
    href: "/link1",
    icon: <i className="fi fi-rs-settings"></i>,
  },
  {
    label: "eCommerce",
    href: "/link2",
    icon: <i className="fi fi-rs-cart-shopping-fast"></i>,
  },
  {
    label: "NFT",
    href: "/link3",
    icon: <i className="fi fi-rr-usd-circle"></i>,
  },
  {
    label: "Crypto",
    href: "/link4",
    icon: <i className="fi fi-br-settings"></i>,
  },
  {
    label: "General",
    href: "/link5",
    icon: <i className="fi fi-sr-heart-rate"></i>,
  },
  {
    label: "Music",
    href: "/link6",
    icon: <i className="fi fi-rr-list-music"></i>,
  },
];
const slidesData = [
  {
    bgColor: "indigo-100",
    icon: "/icon-user-male.svg",
    title: "Employees",
    value: "96",
  },
  {
    bgColor: "indigo-50",
    icon: "/icon-connect.svg",
    title: "Reports",
    value: "59",
  },
  {
    bgColor: "teal-100",
    icon: "/icon-speech-bubble.svg",
    title: "Payroll",
    value: "$54k",
  },
  {
    bgColor: "rose-100",
    icon: "/icon-favorites.svg",
    title: "Events",
    value: "659",
  },
  {
    bgColor: "indigo-100",
    icon: "/icon-mailbox.svg",
    title: "Projects",
    value: "345",
  },
  {
    bgColor: "orange-100",
    icon: "/icon-briefcase.svg",
    title: "Clients",
    value: "3,865",
  },
];
const countryCode = [
  {
    icon: "/icon-flag-cn.svg",
    title: "中国人 (Chinese)",
  },
  {
    icon: "/icon-flag-en.svg",
    title: "English (UK)",
  },
  {
    icon: "/icon-flag-fr.svg",
    title: "français (French)",
  },
  {
    icon: "/icon-flag-sa.svg",
    title: "عربي (Arabic)",
  },
  
];
const shoppingCard = [
  {
    id:1,
    img: "/product-1.jpg",
    title: "Supreme toys cooker",
    desc:"Kitchenware Item",
  },
  {
    id:2,
    img: "/product-2.jpg",
    title: "Toys cooker supreme",
    desc:"Kitchenware Item",
  },
  {
    id:3,
    img: "/product-3.jpg",
    title: "Cooker toys supreme",
    desc:"Kitchenware Item",
  },
];
const userProfile = [
  {
    id:1,
    img: "/icon-account.svg",
    title: "My Profile",
    desc:"Account Settings",
  },
  {
    id:2,
    img: "/icon-inbox.svg",
    title: "My Inbox",
    desc:"Messages & Emails",
  },
  {
    id:3,
    img: "/icon-tasks.svg",
    title: "My Task",
    desc:"To-do and Daily Tasks",
  },
];
const userNotification = [
  {
    id:1,
    img: "/user-1.jpg",
    title: "Roman Joined the Team!",
    desc:"Congratulate him",
  },
  {
    id:2,
    img: "/user-2.jpg",
    title: "New message",
    desc:"Salma sent you new message",
  },
  {
    id:3,
    img: "/user-3.jpg",
    title: "Bianca sent payment",
    desc:"Check your earnings",
  },
  {
    id:4,
    img: "/user-4.jpg",
    title: "Jolly completed tasks",
    desc:"Assign her new tasks",
  },
  {
    id:5,
    img: "/user-5.jpg",
    title: "John received payment",
    desc:"$230 deducted from account",
  },
  {
    id:6,
    img: "/user-5.jpg",
    title: "John received payment",
    desc:"$230 deducted from account",
  },
  {
    id:7,
    img: "/user-4.jpg",
    title: "Jolly completed tasks",
    desc:"Assign her new tasks",
  },
];
export { sideBarLinks, sideBarLinksHome, slidesData, countryCode, shoppingCard, userProfile, userNotification };
