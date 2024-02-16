import React from "react";

const sideBarLinks = [
  {
    label: "Calendar",
    href: "/calendar",
    icon: <i className="fi fi-rr-calendar-day"></i>,
  },
  {
    label: "Kanban",
    href: "/dashboard",
    icon: <i className="fi fi-rr-square-kanban"></i>,
  },
  {
    label: "Chat",
    href: "/calendar",
    icon: <i className="fi fi-rr-comment-alt"></i>,
  },
  {
    label: "Email",
    href: "/calendar",
    icon: <i className="fi fi-rr-envelope"></i>,
  },
  {
    label: "Notes",
    href: "/calendar",
    icon: <i className="fi fi-rr-memo"></i>,
  },
  {
    label: "Contact Table",
    href: "/calendar",
    icon: <i className="fi fi-rr-phone-call"></i>,
  },
  {
    label: "Contact List",
    href: "/calendar",
    icon: <i className="fi fi-rr-list-timeline"></i>,
  },
  {
    label: "Invoice",
    href: "/calendar",
    icon: <i className="fi fi-rr-file-invoice"></i>,
  },
  {
    label: "User Profile",
    href: "/calendar",
    icon: <i className="fi fi-rr-circle-user"></i>,
  },
  {
    label: "Blog",
    href: "/calendar",
    icon: <i className="fi fi-rr-blog-pencil"></i>,
  },
  {
    label: "Ecommerce",
    href: "/calendar",
    icon: <i className="fi fi-rs-basket-shopping-simple"></i>,
  },
  {
    label: "Contact List",
    href: "/calendar",
    icon: <i className="fi fi-rr-list-timeline"></i>,
  },
  {
    label: "Email",
    href: "/calendar",
    icon: <i className="fi fi-rr-envelope"></i>,
  },
  {
    label: "Chat",
    href: "/calendar",
    icon: <i className="fi fi-rr-comment-alt"></i>,
  },
];
const sideBarLinksHome = [
  {
    label: "Modern",
    href: "/dashboard",
    icon: <i className="fi fi-rs-settings"></i>,
  },
  {
    label: "eCommerce",
    href: "/dashboard",
    icon: <i className="fi fi-rs-cart-shopping-fast"></i>,
  },
  {
    label: "NFT",
    href: "/dashboard",
    icon: <i className="fi fi-rr-usd-circle"></i>,
  },
  {
    label: "Crypto",
    href: "/dashboard",
    icon: <i className="fi fi-br-settings"></i>,
  },
  {
    label: "General",
    href: "/dashboard",
    icon: <i className="fi fi-sr-heart-rate"></i>,
  },
  {
    label: "Music",
    href: "/dashboard",
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
    id: 1,
    img: "/product-1.jpg",
    title: "Supreme toys cooker",
    desc: "Kitchenware Item",
  },
  {
    id: 2,
    img: "/product-2.jpg",
    title: "Toys cooker supreme",
    desc: "Kitchenware Item",
  },
  {
    id: 3,
    img: "/product-3.jpg",
    title: "Cooker toys supreme",
    desc: "Kitchenware Item",
  },
];
const userProfile = [
  {
    id: 1,
    img: "/icon-account.svg",
    title: "My Profile",
    desc: "Account Settings",
  },
  {
    id: 2,
    img: "/icon-inbox.svg",
    title: "My Inbox",
    desc: "Messages & Emails",
  },
  {
    id: 3,
    img: "/icon-tasks.svg",
    title: "My Task",
    desc: "To-do and Daily Tasks",
  },
];
const userNotification = [
  {
    id: 1,
    img: "/user-1.jpg",
    title: "Roman Joined the Team!",
    desc: "Congratulate him",
  },
  {
    id: 2,
    img: "/user-2.jpg",
    title: "New message",
    desc: "Salma sent you new message",
  },
  {
    id: 3,
    img: "/user-3.jpg",
    title: "Bianca sent payment",
    desc: "Check your earnings",
  },
  {
    id: 4,
    img: "/user-4.jpg",
    title: "Jolly completed tasks",
    desc: "Assign her new tasks",
  },
  {
    id: 5,
    img: "/user-5.jpg",
    title: "John received payment",
    desc: "$230 deducted from account",
  },
  {
    id: 6,
    img: "/user-5.jpg",
    title: "John received payment",
    desc: "$230 deducted from account",
  },
  {
    id: 7,
    img: "/user-4.jpg",
    title: "Jolly completed tasks",
    desc: "Assign her new tasks",
  },
];
const topPerformers = [
  {
    id: 1,
    role:"Web Designer",
    prority:"High",
    budget:"$3.9k",
    img: "/user-1.jpg",
    name: "John Deo",
    task: "Congratulate him",
    project:"Elite Admin",
  },
  {
    id: 2,
    role:"Web Developer",
    prority:"Low",
    budget:"$3.9k",
    img: "/user-2.jpg",
    name: "Sunil Joshi",
    task: "Salma sent you new message",
    project:"Flexy Admin",
  },
  {
    id: 3,
    role:"Web Manager",
    prority:"Low",
    budget:"$3.9k",
    img: "/user-3.jpg",
    name: "Micheal Doe",
    task: "Check your earnings",
    project:"Material Pro",
  },
  {
    id: 4,
    role:"Project Manager",
    prority:"High",
    budget:"$3.9k",
    img: "/user-4.jpg",
    name: "Yuvraj Sheth",
    task: "Assign her new tasks",
    project:"Xtreme Admin",
  },
  {
    id: 5,
    role:"Content Writer",
    prority:"Medium",
    budget:"$3.9k",
    img: "/user-5.jpg",
    name: "Nirav Joshi",
    task: "$230 deducted from account",
    project:"Helping Hands WP Theme",
  },
  {
    id: 6,
    role:"Web Designer",
    prority:"Low",
    budget:"$3.9k",
    img: "/user-1.jpg",
    name: "John Deo",
    task: "$230 deducted from account",
    project:"Elite Admin",
  },
  {
    id: 7,
    role:"Web Developer",
    prority:"High",
    budget:"$3.9k",
    img: "/user-4.jpg",
    name: "Sunil Joshi",
    task: "Assign her new tasks",
    project:"Flexy Admin",
  },
];
export {
  sideBarLinks,
  sideBarLinksHome,
  slidesData,
  countryCode,
  shoppingCard,
  userProfile,
  userNotification,
  topPerformers,
};
