import type { Report } from "@/components/carousel";
import { Mail, Phone } from "lucide-react";
import type { ElementType } from "react";
import { siWhatsapp, type SimpleIcon } from 'simple-icons';


export const menuItems = [
    { name: "Home", link: "#" },
    { name: "Progetti", link: "#progetti" },
    { name: "Servizi", link: "#servizi" },
    { name: "Contatti", link: "#contatti" },
];


export const reportsData: Report[] = [
    {
        id: "q1fy26",
        quarter: "Q1FY26",
        period: "Q4FY26 | JULY 20, 2025",
        imageSrc:
        "https://b.zmtcdn.com/investor-relations/363d6f33a40607fd7b70f39081d79eb6_1753090727.jpeg",
        isNew: true,
    },
    {
        id: "q4fy25",
        quarter: "Q4FY25",
        period: "Q4FY25 | MAY 1, 2025",
        imageSrc:
        "https://b.zmtcdn.com/investor-relations/1199bb1a7e905267f520ace8be13fdad_1746093395.png",
    },
    {
        id: "q3fy25",
        quarter: "Q3FY25",
        period: "Q3FY25 | JANUARY 20, 2025",
        imageSrc:
        "https://b.zmtcdn.com/investor-relations/2f012a6bbbb592159108f792460fb5b3_1737366169.jpeg",
    },
    {
        id: "q2fy25",
        quarter: "Q2FY25",
        period: "Q2FY25 | OCTOBER 15, 2024",
        imageSrc:
        "https://b.zmtcdn.com/investor-relations/fbfcc09072b22ad718da3681e98f711d_1729591272.png",
    },
    {
        id: "q1fy25",
        quarter: "Q1FY25",
        period: "Q1FY25 | JULY 18, 2024",
        imageSrc:
        "https://b.zmtcdn.com/investor-relations/254790073164218ac21893a8046c0a05_1707385481.png",
    },
];


export const servicesData = [
    {
        id: "slide-1",
        title: "Tinteggiatura",
        imageUrl:
        "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "slide-2",
        title: "Cartongesso",
        imageUrl:
        "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "slide-3",
        title: "decorazioni",
        imageUrl:
        "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "slide-4",
        title: "sistemi a cappotto",
        imageUrl:
        "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "slide-5",
        title: "Pavimenti in SPC",
        imageUrl:
        "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];


export type ContactItem = {
    label: string;
    href: string;
    icon: SimpleIcon | ElementType | boolean;
    class: string;
};

export const contactItems: ContactItem[] = [
    {
        icon: siWhatsapp,
        href: 'https://wa.me/3333542727',
        class: "whatsapp",
        label: "+39 333 354 2727",
    },
    {
        icon: Phone,
        href: 'tel:+393333542727',
        class: "phone",
        label: "+39 333 354 2727",
    },
    {
        icon: Mail,
        href: 'mailto:renatociarallo@hotmail.it',
        class: "email",
        label: "renatociarallo@hotmail.it",
    },
];
