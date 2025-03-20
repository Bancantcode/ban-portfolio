// service offering
import FrontEnd from '../../public/images/service__images/testimage1.jpg'
import WebDesign from '../../public/images/service__images/testimage2.jpg'
import BackEnd from '../../public/images/service__images/testimage3.jpg'
import SEO from '../../public/images/service__images/testimage4.jpg'

// certificates
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
import Certificate17 from '../../public/images/e-certificates/IntroductionToNotionAPI.webp'
import Certificate18 from '../../public/images/e-certificates/3rdRegionalCybersecurityConference.webp'

// skills
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

// projects
import Project1 from '../../public/images/projects/1.webp'

export const navLinks = [
    { title: 'Home,', href: "/" },
    { title: 'About,', href: "/about" },
    { title: 'Projects,', href: "/projects" },
    { title: 'Services,', href: "/services" },
    { title: 'Contact,', href: "/contact" },
]

// service
export const servicesInfo = [
    { 
        number: '[1]',
        name: 'Frontend Development', 
        description: "A well-designed website can take your brand to the next level. I create custom websites that truly reflect your style, ensuring they run smoothly and look great. With engaging animations, I make sure your visitors stay interested and keep coming back.",
        image: FrontEnd,
        alt: "Frontend Development Image",
        width: 1000,
        height: 1000,
        offers: [
            { service: 'Responsive Design' },
            { service: 'CMS Integration' },
            { service: 'Motion & Animations' },
        ] 
    },
    { 
        number: '[2]',
        name: 'Web Design', 
        description: "Boost your online presence with a website that speaks to your audience's needs and emotions. I design eye-catching, high-performing sites that support your business goals, helping you stand out and grow successfully.", 
        image: WebDesign,
        alt: "Web Design Image",
        width: 1000,
        height: 1000,
        offers: [
            { service: 'Wireframing' },
            { service: 'Mockups' },
            { service: 'UX Writing' },
            { service: 'Branding & Identity Design' },
        ] 
    },
    { 
        number: '[3]',
        name: 'Backend Development', 
        description: "I strengthen applications with reliable backend solutions for smooth data management and security. I build scalable APIs and efficient databases to keep your web applications running safely and efficiently.",
        image: BackEnd,
        alt: "Backend Development Image",
        width: 1000,
        height: 1000,
        offers: [
            { service: 'API Development' },
            { service: 'Database Management' },
            { service: 'Authentication & Security' },
        ] 
    },
    { 
        number: '[4]',
        name: 'SEO', 
        description: "Increase your website's visibility with custom SEO strategies that bring in the right audience. I help your business stand out in search results, driving more traffic and boosting engagement.",
        image: SEO,
        alt: "Search Engine Optimization Image",
        width: 1000,
        height: 1000,
        offers: [
            { service: 'Keyword Research' },
            { service: 'On-Page SEO' },
        ] 
    },
]

// selected works
export const projectInfo = [
    { role: 'Independent Developer', image: Project1, name: 'Satori Specialty Coffee', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vero earum repellendus obcaecati hic ex amet incidunt tenetur illum temporibus.' },
    { role: 'Project Lead & Frontend Lead', image: Project1, name: 'Akaru', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vero earum repellendus obcaecati hic ex amet incidunt tenetur illum temporibus.' },
    { role: 'Frontend Developer', image: Project1, name: 'Unite', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vero earum repellendus obcaecati hic ex amet incidunt tenetur illum temporibus.' },
    { role: 'Project Lead & Frontend Lead', image: Project1, name: 'Crown Residence', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vero earum repellendus obcaecati hic ex amet incidunt tenetur illum temporibus.' },
    { role: 'Frontend Developer Lead', image: Project1, name: 'ADS-HAUSC', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vero earum repellendus obcaecati hic ex amet incidunt tenetur illum temporibus.' },
];

export const cards = [
    { 
        title: 'Satori Specialty Coffee', 
        image: Project1,
        href: "https://satori-nextjs.vercel.app/", 
        repository: "https://github.com/Bancantcode/satori-nextjs", 
        copy: "Satori is a specialty coffee space designed to inspire creativity, foster connections, and celebrate the love of coffee in every cup. It offers a warm and inviting atmosphere where coffee enthusiasts can gather, share experiences, and enjoy expertly crafted brews made with passion and precision." 
    },
    { 
        title: 'Crown Residence', 
        image: Project1,
        href: "", 
        repository: "https://github.com/Bancantcode/crown-residence-mern", 
        copy: "Crown Residence is a property reservation website inspired by Airbnb. It allows users to browse, book, and manage property reservations seamlessly with a user-friendly interface and secure booking system." 
    },
    { 
        title: 'ADS-HAUSC', 
        image: Project1,
        href: "https://adshausc.netlify.app/", 
        repository: "", 
        copy: "IskoLink is an online platform for the Association of DOST Scholars - Holy Angel University Student Chapter (ADS-HAUSC), built to strengthen connections among scholars and create a lasting impact on the community." 
    },
    { 
        title: 'Casa Soliman', 
        image: Project1,
        href: "", 
        repository: "https://github.com/Bancantcode/casa-soliman-nextjs", 
        copy: "ONGOING PROJECT..." 
    },
    { 
        title: 'Studio Form', 
        image: Project1,
        href: "", 
        repository: "https://github.com/Bancantcode/studio-form-nextjs", 
        copy: "ONGOING PROJECT..." 
    },
    { 
        title: 'MNHS LMS', 
        image: Project1,
        href: "https://mnhs-lms.onrender.com/", 
        repository: "https://github.com/Bancantcode/mnhs-lms-mern", 
        copy: "Malino National High School Learning Management System is a web application designed to simplify educational management. Developed for Grade 11 students at Malino National High School as part of their thesis, this system enhances accessibility and streamlines learning processes." 
    },
    { 
        title: 'Code Vanta', 
        image: Project1,
        href: "", 
        repository: "", 
        copy: "ONGOING PROJECT..." 
    },
    { 
        title: 'Diaserv', 
        image: Project1,
        href: "https://diaserv.net/", 
        repository: "", 
        copy: "Diaserv Diagnostic Laboratory is a healthcare in San Fernando, Pampanga offering a high-quality diagnostic services that empower patients and healthcare providers with accurate and timely results." 
    },
    { 
        title: 'Akaru', 
        image: Project1,
        href: "http://www.akaru.rf.gd/", 
        repository: "https://github.com/Bancantcode/Akaru", 
        copy: "Akaru is a digital library that allows readers to read in a way that is engaging, and that is easy and fun. Akaru aims to bridge a gap between the reading experience and ease of use." 
    },
    { 
        title: 'Unite', 
        href: "https://unitewebdev.netlify.app/", 
        image: Project1,
        repository: "https://github.com/Bancantcode/unite-angular", 
        copy: "UNITE is a web development company website we created to demonstrate our proficiency in using the Angular framework, especially on the Angular Directives and Routing." 
    },
    { 
        title: 'Satori PHP', 
        image: Project1,
        href: "", 
        repository: "https://github.com/Bancantcode/crud-website-php", 
        copy: "This marks as the beginning of my journey in web development. Created as our final project in Dynamic Web Programming, showcasing our skills in building dynamic and interactive web application." 
    },
]

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

export const statistics = [
    { title: "3", description: "Clients worked with" },
    { title: "6", description: "Projects completed" },
    { title: "2", description: "Years of design and UI/UX experience" },
    { title: "4", description: "On going projects" },
]

export const certificates = [
    {
        title: "Certifications",
        content: "My extensive collection includes a variety of completed courses, active participation in numerous workshops and seminars, and from tech industry-relevant webinars.",
        buttonText: "View Certificates",
        link: "https://www.google.com/",
        upper_certificates: [
            { 
                title: 'Geeks For Geeks', 
                src: Certificate1, 
                alt: 'Geeks For Geeks Certificate' 
            },
            { 
                title: 'Intro To Javascript', 
                src: Certificate3, 
                alt: 'Intro To Javascript Certificate' 
            },
            { 
                title: 'SoloLearn Web Development', 
                src: Certificate15, 
                alt: 'SoloLearn Web Development Certificate' 
            },
            { 
                title: 'Hubspot SEO 1', 
                src: Certificate5, 
                alt: 'Hubspot SEO 1 Certificate' 
            },
            { 
                title: 'SoloLearn Intro to Javascript', 
                src: Certificate13, 
                alt: 'SoloLearn Intro to Javascript Certificate' 
            },
            { 
                title: 'UI/UX Design', 
                src: Certificate4, 
                alt: 'UI/UX Design Certificate' 
            },
            { 
                title: 'Hubspot SEO 2', 
                src: Certificate6, 
                alt: 'Hubspot SEO 2 Certificate' 
            },
            { 
                title: 'Regional Cybersecurity Conference', 
                src: Certificate18, 
                alt: 'Regional Cybersecurity Conferenc Certificate' 
            },
            { 
                title: 'Get Started With Figma', 
                src: Certificate2, 
                alt: 'Get Started With Figma Certificate' 
            },
            { 
                title: 'Intro to Web Design Principle', 
                src: Certificate7, 
                alt: 'Intro to Web Design Principle Certificate' 
            },
            { 
                title: 'The Complete Full Stack Web Development 2024', 
                src: Certificate16, 
                alt: 'The Complete Full Stack Web Development 2024 Certificate' 
            },
            { 
                title: 'SoloLearn Intro to CSS', 
                src: Certificate12, 
                alt: 'SoloLearn Intro to CSS Certificate' 
            },
        ],
        lower_certificates: [
            { title: 'SoloLearn Javascript Intermediate', src: Certificate14, alt: 'SoloLearn Javascript Intermediate Certificate' },
            { title: 'Responsive Web Design', src: Certificate9, alt: 'Responsive Web Design Certificate' },
            { title: 'SEO Rank & Rise', src: Certificate10, alt: 'SEO Rank & Rise Certificate' },
            { title: 'UI/UX Design', src: Certificate4, alt: 'UI/UX Design Certificate' },
            { title: 'SoloLearn Intro to HTML', src: Certificate11, alt: 'SoloLearn Intro to HTML Certificate' },
            { title: 'The Complete Full Stack Web Development 2024', src: Certificate16, alt: 'The Complete Full Stack Web Development 2024 Certificate' },
            { title: 'SoloLearn Intro to CSS', src: Certificate12, alt: 'SoloLearn Intro to CSS Certificate' },
            { title: 'Introduction to Notion API', src: Certificate17, alt: 'Introduction to Notion API Certificate' },
            { title: 'Hubspot SEO 1', src: Certificate5, alt: 'Hubspot SEO 1 Certificate' },
            { title: 'SoloLearn Intro to Javascript', src: Certificate13, alt: 'SoloLearn Intro to Javascript Certificate' },
            { title: 'Legacy Javascript Algorithms and Data Structure', src: Certificate8, alt: 'Legacy Javascript Algorithms and Data Structure Certificate' },
            { title: 'SoloLearn Web Development', src: Certificate15, alt: 'SoloLearn Web Development Certificate' },
        ]
    },
]

export const moreAboutMe = [
    { 
        number: "[01]", 
        title: "Who Am I", 
        description: "I'm Bryan, a passionate web developer with a keen eye for design and functionality. I specialize in creating modern, user-friendly websites that blend aesthetics with performance. With a background in frontend development, a bit of backend, and UI/UX design, I love bringing ideas to life through clean code and intuitive interfaces." 
    },
    { 
        number: "[02]", 
        title: "How It Started", 
        description: "My journey into web development began with a simple curiosity about how websites work. What started as experimenting with HTML and CSS quickly turned into a passion for building interactive and dynamic experiences. Over the years, I've honed my skills through school projects, client work, and continuous learning, always pushing myself to improve." 
    },
    { 
        number: "[03]", 
        title: "How's It Going", 
        description: "Today, I'm an aspiring frontend developer eager to take on new challenges. From crafting SEO-optimized websites to working on projects for businesses, I'm always exploring new technologies and refining my skills. As I approach my final year of university, I'm looking forward to expanding my experience, collaborating with creative minds, and making an impact in the industry." 
    },
]