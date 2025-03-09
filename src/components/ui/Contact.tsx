'use client'
import TextReveal from "./TextReveal"
import { useState, useEffect } from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";
import gsap from "gsap";

const Contact = () => {
    useGsapAnimations();
    const [formData, setFormData] = useState({ service: '', budget: '', pages: '', deadline: '', name: '', email: '', number: '', company: '', website: '', find: '', project: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submissionData = { service: formData.service, budget: formData.budget, pages: formData.pages, deadline: formData.deadline, name: formData.name, email: formData.email, number: formData.number, company: formData.company, website: formData.website, find: formData.find, project: formData.project };
        console.log(submissionData);
    };

    useEffect(() => {
        const inputs = document.querySelectorAll(".input__class");
        const options = { root: null, rootMargin: '0px', threshold: 0.1 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const line = entry.target.nextElementSibling;
                if (entry.isIntersecting) {
                    gsap.to(line, { 
                        width: "100%", 
                        duration: 0.4, 
                        ease: "power2.out" 
                    });
                } 
            });
        }, options);

        inputs.forEach((input) => {
            const wrapper = document.createElement("div");
            wrapper.className = "relative w-full";
            input.parentNode?.insertBefore(wrapper, input);
            wrapper.appendChild(input);

            const line = document.createElement("div");
            line.className = "absolute left-0 bottom-0 h-0.5 bg-white w-0 transition-all duration-500";
            wrapper.appendChild(line);

            //start observer
            observer.observe(input);
        });

        return () => {
            //for cleanups
            inputs.forEach((input) => observer.unobserve(input)); 
        };
    }, []);

    return (
        <div className="section-x-padding pt-28 md:pt-52 pb-xl md:pb-3xl grid grid-cols-4 md:grid-cols-10 xl:grid-cols-12 gap-x-xs">
            <div className="col-span-4 md:col-span-5 xl:col-span-6">
                <TextReveal text="Get in Touch" className="heading font-medium leading-none mb-xs" marginRight="mr-1.5" />  
            </div>

            <div className="col-span-4 md:col-start-6 md:col-span-5 xl:col-start-7 xl:col-span-6">
                <TextReveal text="I am ready to help! Whether you need a website for your project, want to improve an existing one, or just have a question, feel free to reach out. I'm always open to new opportunities and collaborations!" className="text-style xl:w-4/5" marginRight="mr-1" />
            </div>

            <div className="col-span-4 md:col-start-6 md:col-span-5 xl:col-start-7 xl:col-span-6">
                <form onSubmit={handleSubmit}>
                
                    {/* project details part */}
                    <TextReveal 
                        text="Project Details" 
                        className="text-heading-4 font-medium leading-none mb-xs border-b-2"
                        marginRight="mr-1.5" 
                    />
                    
                    <div className="mb-xs">
                        <label htmlFor="How Can I Help">
                            <TextReveal 
                                text="How can I help?" 
                                className="text-style xl:w-4/5" 
                                marginRight="mr-1" 
                            />
                        </label>
                        
                        <div className="flex space-x-2">
                            <button type="button" onClick={() => setFormData({ ...formData, service: 'Webflow Development' })}>Webflow Development</button>
                            <button type="button" onClick={() => setFormData({ ...formData, service: 'Web Design' })}>Web Design</button>
                            <button type="button" onClick={() => setFormData({ ...formData, service: 'Both' })}>Both</button>
                        </div>
                    </div>

                    <div className="mb-xs">
                        <label>
                            <TextReveal 
                                text="Your estimated budget (PHP)" 
                                className="text-style xl:w-4/5" 
                                marginRight="mr-1" 
                            />
                        </label>
                        <div className="flex space-x-lg flex-wrap">
                            <button type="button" onClick={() => setFormData({ ...formData, budget: '<₱5,000' })}>&lt;₱5,000</button>
                            <button type="button" onClick={() => setFormData({ ...formData, budget: '₱5,000 - ₱10,000' })}>₱5,000 - ₱10,000</button>
                            <button type="button" onClick={() => setFormData({ ...formData, budget: '₱10,000 - ₱20,000' })}>₱10,000 - ₱20,000</button>
                            <button type="button" onClick={() => setFormData({ ...formData, budget: '₱20,000+' })}>₱20,000+</button>
                        </div>
                    </div>

                    <div className="mb-xs">
                        <label>
                            <TextReveal 
                                text="How many pages" 
                                className="text-style xl:w-4/5" 
                                marginRight="mr-1" 
                            />
                        </label>
                        <div className="flex space-x-2">
                            <button type="button" onClick={() => setFormData({ ...formData, pages: '1-3' })}>1-3</button>
                            <button type="button" onClick={() => setFormData({ ...formData, pages: '3-6' })}>3-6</button>
                            <button type="button" onClick={() => setFormData({ ...formData, pages: '6-10' })}>6-10</button>
                            <button type="button" onClick={() => setFormData({ ...formData, pages: '10+' })}>10+</button>
                        </div>
                    </div>

                    <div className="mb-xs">
                        <label>
                            <TextReveal 
                                text="Do you have a deadline?" 
                                className="text-style xl:w-4/5" 
                                marginRight="mr-1" 
                            />
                        </label>
                        <div className="flex space-x-2">
                            <button type="button" onClick={() => setFormData({ ...formData, deadline: '<1 Month' })}>&lt;1 Month</button>
                            <button type="button" onClick={() => setFormData({ ...formData, deadline: '1-3 Months' })}>1-3 Months</button>
                            <button type="button" onClick={() => setFormData({ ...formData, deadline: '3-6 Months' })}>3-6 Months</button>
                            <button type="button" onClick={() => setFormData({ ...formData, deadline: '6+ Months' })}>6+ Months</button>
                        </div>
                    </div>

                    {/* your details part */}
                    <TextReveal 
                        text="Your Details" 
                        className="text-heading-4 font-medium leading-none mb-xs border-b-2"
                        marginRight="mr-1.5" 
                    />

                    <div className="mb-xs">
                        <label htmlFor="name" hidden>Enter your name</label>
                        <input type="text" name="name" onChange={handleInputChange} placeholder="Enter your name" className="input__class bg-transparent w-full" />
                    </div>

                    <div className="mb-xs">
                        <label htmlFor="email" hidden></label>
                        <input type="email" name="email" onChange={handleInputChange} placeholder="Enter your email" className="input__class bg-transparent w-full" />
                    </div>

                    <div className="mb-xs">
                        <label htmlFor="number" hidden></label>
                        <input type="tel" name="number" onChange={handleInputChange} placeholder="Format: +44 00 123 4567" className="input__class bg-transparent w-full" />
                    </div>

                    <div className="mb-xs">
                        <label htmlFor="company" hidden></label>
                        <input type="text" name="company" onChange={handleInputChange} placeholder="Enter your company's name" className="input__class bg-transparent w-full" />
                    </div>

                    <div className="mb-xs">
                        <label htmlFor="website" hidden></label>
                        <input type="url" name="website" onChange={handleInputChange} placeholder="www.your-website.com" className="input__class bg-transparent w-full" />
                    </div>

                    <div className="mb-xs">
                        <label htmlFor="find" hidden></label>
                        <input type="text" name="find" onChange={handleInputChange} placeholder="Where did you find me?" className="input__class bg-transparent w-full" />
                    </div>

                    <div className="mb-xs">
                        <label htmlFor="project" hidden></label>
                        <textarea name="project" onChange={handleInputChange} placeholder="Tell me about your project" className="input__class bg-transparent w-full" />
                    </div>
                    
                    <button type="submit" className="mt-4">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Contact