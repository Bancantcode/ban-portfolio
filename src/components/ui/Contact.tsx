import TextReveal from "./TextReveal"

import { useState } from "react";

const Contact = () => {
    const [clickedButtons, setClickedButtons] = useState<{ [key: string]: boolean }>({});

    const handleButtonClick = (buttonName: string) => {
        setClickedButtons((prev) => ({ ...prev, [buttonName]: true }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Clicked buttons:', clickedButtons);
    };

    return (
        <div className="section-x-padding pt-xl md:pt-3xl pb-xl md:pb-3xl grid grid-cols-4 md:grid-cols-10 xl:grid-cols-12 gap-x-xs">
            <div className="col-span-4 md:col-span-5 xl:col-span-6">
                <TextReveal 
                    text="Get in Touch" 
                    className="heading font-medium leading-none mb-xs" 
                    marginRight="mr-1.5" 
                />  
            </div>

            <div className="col-span-4 md:col-start-6 md:col-span-5 xl:col-start-7 xl:col-span-6">
                <TextReveal 
                    text="I am ready to help! Whether you need a website for your project, want to improve an existing one, or just have a question, feel free to reach out. I'm always open to new opportunities and collaborations!" 
                    className="text-style xl:w-4/5" 
                    marginRight="mr-1" 
                />
            </div>

            <div className="col-span-4 md:col-start-6 md:col-span-5 xl:col-start-7 xl:col-span-6">
                <form action="" onSubmit={handleSubmit}>
                
                    <TextReveal 
                        text="Project Details" 
                        className="text-heading-4 font-medium leading-none mb-xs border-b"
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
                            <button type="button" className="" onClick={() => handleButtonClick('Webflow Development')}>Webflow Development</button>
                            <button type="button" className="" onClick={() => handleButtonClick('Web Design')}>Web Design</button>
                            <button type="button" className="" onClick={() => handleButtonClick('Both')}>Both</button>
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
                            <button type="button" className="" onClick={() => handleButtonClick('<₱10,000')}>&lt;₱5,000</button>
                            <button type="button" className="" onClick={() => handleButtonClick('₱10,000 - ₱20,000')}>₱5,000 - ₱10,000</button>
                            <button type="button" className="" onClick={() => handleButtonClick('₱20,000 - ₱30,000')}>₱10,000 - ₱20,000</button>
                            <button type="button" className="" onClick={() => handleButtonClick('₱30,000+')}>₱20,000+</button>
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
                            <button type="button" className="" onClick={() => handleButtonClick('1-3')}>1-3</button>
                            <button type="button" className="" onClick={() => handleButtonClick('3-6')}>3-6</button>
                            <button type="button" className="" onClick={() => handleButtonClick('6-10')}>6-10</button>
                            <button type="button" className="" onClick={() => handleButtonClick('10+')}>10+</button>
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
                            <button type="button" className="" onClick={() => handleButtonClick('<1 Month')}>&lt;1 Month</button>
                            <button type="button" className="" onClick={() => handleButtonClick('1-3 Months')}>1-3 Months</button>
                            <button type="button" className="" onClick={() => handleButtonClick('3-6 Months')}>3-6 Months</button>
                            <button type="button" className="" onClick={() => handleButtonClick('6+ Months')}>6+ Months</button>
                        </div>
                    </div>

                    <button type="submit">Submit</button>

                    <TextReveal 
                        text="Your Details" 
                        className="text-heading-4 font-medium leading-none mb-xs border-b"
                        marginRight="mr-1.5" 
                    />

                </form>
            </div>
        </div>
    )
}

export default Contact