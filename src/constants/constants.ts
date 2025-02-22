import Certificate1 from '../../public/images/e-certificates/FullstackDevBootcamp-GeeksForGeeks.webp'
import Certificate2 from '../../public/images/e-certificates/GetStartedWithFigma.webp'
import Certificate3 from '../../public/images/e-certificates/GreatLearning_SantiagoBryan_IntroToJavascript.webp'
import Certificate4 from '../../public/images/e-certificates/GreatLearning_SantiagoBryan_UI-UX.webp'
import Certificate5 from '../../public/images/e-certificates/Hubspot-SEO-1.webp'
import Certificate6 from '../../public/images/e-certificates/Hubspot-SEO-2.webp'
import Certificate7 from '../../public/images/e-certificates/IntroductionToWebDesignPrinciples.webp'
import Certificate8 from '../../public/images/e-certificates/LegacyJavaScriptAlgorithmsAndDataStructure.webp'
import Certificate9 from '../../public/images/e-certificates/ResponsiveWebDesign_freeCodeCamp.webp'
import Certificate10 from '../../public/images/e-certificates/SEO-Rank&Rise.webp'
import Certificate11 from '../../public/images/e-certificates/SoloLearn_SantiagoBryan_IntroToCSS.webp'
import Certificate12 from '../../public/images/e-certificates/SoloLearn_SantiagoBryan_IntroToHTML.webp'
import Certificate13 from '../../public/images/e-certificates/SoloLearn_SantiagoBryan_IntroToJavascript.webp'
import Certificate14 from '../../public/images/e-certificates/SoloLearn_SantiagoBryan_JavascriptIntermediate.webp'
import Certificate15 from '../../public/images/e-certificates/SoloLearn_SantiagoBryan_WebDevelopment.webp'
import Certificate16 from '../../public/images/e-certificates/TheCompleteFullStack_WebDevelopmentBootcamp2024.webp'

import HTML from '../../public/images/logos/html.svg'
import CSS from '../../public/images/logos/css.svg'
import SASS from '../../public/images/logos/sass.svg'
import TailwindCSS from '../../public/images/logos/tailwind.svg'
import Bootstrap from '../../public/images/logos/bootstrap.svg'
import Javascript from '../../public/images/logos/javascript.svg'
import React from '../../public/images/logos/react.svg'
import Next from '../../public/images/logos/next.svg'
import VueJS from '../../public/images/logos/vue.svg'
import AngularJS from '../../public/images/logos/angular.svg'
import NodeJS from '../../public/images/logos/nodejs.svg'
import ExpressJS from '../../public/images/logos/express.svg'
import Git from '../../public/images/logos/git.svg'
import Github from '../../public/images/logos/github.svg'
import PHP from '../../public/images/logos/php.svg'
import Python from '../../public/images/logos/python.svg'
import Java from '../../public/images/logos/java.svg'
import Vite from '../../public/images/logos/vite.svg'
import Vercel from '../../public/images/logos/vercel.png'
import GSAP from '../../public/images/logos/gsap.png'
import FramerMotion from '../../public/images/logos/framer-motion.svg'
import NPM from '../../public/images/logos/npm.svg'
import Figma from '../../public/images/logos/figma.svg'
import Shadcn from '../../public/images/logos/shadcn.png'
import DaisyUI from '../../public/images/logos/daisyui.png'
import jQuery from '../../public/images/logos/jquery.svg'
import Typescript from '../../public/images/logos/typescript.svg'
import Prisma from '../../public/images/logos/prisma.svg'
import MySQL from '../../public/images/logos/mysql.svg'
import MongoDB from '../../public/images/logos/mongodb.svg'
import Postman from '../../public/images/logos/postman.svg'

export const navLinks = [
    { title: 'Home,', href: "/" },
    { title: 'About,', href: "/about" },
    { title: 'Projects,', href: "/projects" },
    { title: 'Services,', href: "/services" },
    { title: 'Contact,', href: "/contact" },
]

export const projectInfo = [
    { role: '', image: '', name: '', description: '' },
    { role: '', image: '', name: '', description: '' },
    { role: '', image: '', name: '', description: '' },
    { role: '', image: '', name: '', description: '' },
    { role: '', image: '', name: '', description: '' },
];

export const socials = [
    { name: 'BEHANCE', link: 'https://www.behance.net/bancantcodee', svg: '' },
    { name: 'INSTAGRAM', link: 'https://www.instagram.com/ban.cantcode/', svg: '' },
    { name: 'LINKEDIN', link: 'https://www.linkedin.com/in/bryanaaronsantiago/', svg: '' },
    { name: 'GITHUB', link: 'https://github.com/Bancantcode', svg: '' },
]

export const expertise = [
    { icon: HTML, tooltip: 'Hypertext Markup Language' },
    { icon: CSS, tooltip: 'Cascading Style Sheets' },
    { icon: SASS, tooltip: 'SASS' },
    { icon: TailwindCSS, tooltip: 'TailwindCSS' },
    { icon: Bootstrap, tooltip: 'Bootstrap' },
    { icon: Javascript, tooltip: 'Javascript' },
    { icon: React, tooltip: 'ReactJS' },
    { icon: Next, tooltip: 'NextJS' },
    { icon: VueJS, tooltip: 'VueJS' },
    { icon: AngularJS, tooltip: 'Angular' },
    { icon: NodeJS, tooltip: 'NodeJS' },
    { icon: ExpressJS, tooltip: 'ExpressJS' },
    { icon: Git, tooltip: 'Git' },
    { icon: Github, tooltip: 'Github' },
    { icon: PHP, tooltip: 'Hypertext Preprocessor' },
    { icon: Python, tooltip: 'Python' },
    { icon: Java, tooltip: 'Java' },
    { icon: Vite, tooltip: 'Vite' },
    { icon: Vercel, tooltip: 'Vercel' },
    { icon: GSAP, tooltip: 'GSAP' },
    { icon: FramerMotion, tooltip: 'Framer Motion' },
    { icon: NPM, tooltip: 'Node Package Manager' },
    { icon: Figma, tooltip: 'Figma' },
    { icon: Shadcn, tooltip: 'Shadcd/UI' },
    { icon: DaisyUI, tooltip: 'DaisyUI' },
    { icon: jQuery, tooltip: 'jQuery' },
    { icon: Typescript, tooltip: 'Typescript' },
    { icon: Prisma, tooltip: 'Prisma' },
    { icon: MySQL, tooltip: 'MySQL' },
    { icon: MongoDB, tooltip: 'MongoDB' },
    { icon: Postman, tooltip: 'Postman' },
]

export const certificates = [
    {
        title: "Certifications",
        content: "My extensive collection includes a variety of completed courses, active participation in numerous workshops and seminars, and from tech industry-relevant webinars.",
        buttonText: "View Certificates",
        link: "https://www.google.com/",
        upper_certificates: [
            { title: 'Geeks For Geeks', src: Certificate1, alt: 'Geeks For Geeks Certificate' },
            { title: 'Intro To Javascript', src: Certificate3, alt: 'Intro To Javascript Certificate' },
            { title: 'Hubspot SEO 1', src: Certificate5, alt: 'Hubspot SEO 1 Certificate' },
            { title: 'SoloLearn Intro to Javascript', src: Certificate13, alt: 'SoloLearn Intro to Javascript Certificate' },
            { title: 'UI/UX Design', src: Certificate4, alt: 'UI/UX Design Certificate' },
            { title: 'Hubspot SEO 2', src: Certificate6, alt: 'Hubspot SEO 2 Certificate' },
            { title: 'Legacy Javascript Algorithms and Data Structure', src: Certificate8, alt: 'Legacy Javascript Algorithms and Data Structure Certificate' },
            { title: 'Get Started With Figma', src: Certificate2, alt: 'Get Started With Figma Certificate' },
            { title: 'Intro to Web Design Principle', src: Certificate7, alt: 'Intro to Web Design Principle Certificate' },
            { title: 'SoloLearn Intro to CSS', src: Certificate12, alt: 'SoloLearn Intro to CSS Certificate' },
        ],
        lower_certificates: [
            { title: 'SoloLearn Javascript Intermediate', src: Certificate14, alt: 'SoloLearn Javascript Intermediate Certificate' },
            { title: 'Responsive Web Design', src: Certificate9, alt: 'Responsive Web Design Certificate' },
            { title: 'SEO Rank & Rise', src: Certificate10, alt: 'SEO Rank & Rise Certificate' },
            { title: 'UI/UX Design', src: Certificate4, alt: 'UI/UX Design Certificate' },
            { title: 'SoloLearn Intro to HTML', src: Certificate11, alt: 'SoloLearn Intro to HTML Certificate' },
            { title: 'SoloLearn Web Development', src: Certificate15, alt: 'SoloLearn Web Development Certificate' },
            { title: 'The Complete Full Stack Web Development 2024', src: Certificate16, alt: 'The Complete Full Stack Web Development 2024 Certificate' },
            { title: 'SoloLearn Intro to CSS', src: Certificate12, alt: 'SoloLearn Intro to CSS Certificate' },
            { title: 'Hubspot SEO 1', src: Certificate5, alt: 'Hubspot SEO 1 Certificate' },
            { title: 'SoloLearn Intro to Javascript', src: Certificate13, alt: 'SoloLearn Intro to Javascript Certificate' },
        ]
    },


]