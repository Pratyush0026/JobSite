"use client"
import React, { useState } from 'react'
import { Satisfy } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });
const cardsData = [
    {
        "name": "Zomato",
        "tags": ["Job Search"],
        "video": "/assets/videos/Zomato using Stories.mp4",
        "logo": "/assets/logos/zomato_logo.png",
        "why_this_works_heading": "Why This Recruitment Strategy Works",
        "why_this_works_content": "Zomato's career stories tap into familiar social media behavior that candidates already understand. By showcasing real employee experiences, office culture, and growth stories in bite-sized visual formats, they make job exploration feel natural and engaging. This approach reduces the intimidation factor of traditional corporate recruiting, allowing potential candidates to connect emotionally with the company before applying. The stories format encourages deeper engagement as users naturally want to see 'what happens next' in someone's career journey at Zomato.",
        "main_content_heading": "How Zomato Uses Employee Stories to Attract Top Talent",
        "main_content": "Zomato has revolutionized their recruitment approach by featuring real employee stories prominently on their careers page. Instead of generic job descriptions, they showcase day-in-the-life content, career progression journeys, and authentic workplace moments through engaging story formats. These stories feature diverse employees sharing their experiences, from delivery partners to tech leads, creating an inclusive narrative that attracts talent across all levels and backgrounds.",
        "link": "/careers/zomato",
        "background_color": "#FF3044",
        "text_color": "#ffffff"
    },
    {
        "name": "Zepto",
        "tags": ["Applications"],
        "video": "/assets/videos/Zepto using Bottomsheet.mp4",
        "logo": "/assets/logos/zepto_logo.png",
        "why_this_works_heading": "Why This Application Process Works",
        "why_this_works_content": "Zepto's streamlined application process removes traditional barriers that often discourage quality candidates. By using progressive disclosure through bottom sheets, they break down complex applications into manageable steps, reducing abandonment rates. The mobile-first design acknowledges that many job seekers browse and apply through their phones, especially for operational roles. This approach respects candidates' time while gathering all necessary information efficiently.",
        "main_content_heading": "Zepto's Mobile-First Job Application Experience",
        "main_content": "Zepto has optimized their job application process for mobile users by implementing intuitive bottom sheet interfaces. Candidates can complete applications in digestible steps - from basic info to skill assessments - without leaving the main job listing. This approach is particularly effective for their diverse workforce, including delivery partners and warehouse staff who primarily use mobile devices for job searching.",
        "link": "/careers/zepto",
        "background_color": "#3E0067",
        "text_color": "#ffffff"
    },
    {
        "name": "Urban Company",
        "tags": ["Interviews"],
        "video": "/assets/videos/Urban Company using CSAT.mp4",
        "logo": "/assets/logos/urbancompany_logo.png",
        "why_this_works_heading": "Why This Interview Feedback System Works",
        "why_this_works_content": "Urban Company's immediate post-interview feedback collection captures authentic candidate experiences while memories are fresh. This real-time feedback loop helps them continuously improve their hiring process and maintain high candidate satisfaction scores. The simple emoji-based rating system reduces friction while the optional detailed feedback provides actionable insights for hiring managers to refine their approach.",
        "main_content_heading": "Urban Company's Real-Time Interview Feedback System",
        "main_content": "Urban Company collects candidate feedback immediately after each interview round using simple, mobile-friendly surveys. This system helps them maintain high standards in their hiring process while showing candidates that their experience matters. The feedback directly influences interviewer training and process improvements, creating a better experience for future candidates.",
        "link": "/careers/urban-company",
        "background_color": "#ffffff",
        "text_color": "#000000"
    },
    {
        "name": "Unacademy",
        "tags": ["Onboarding"],
        "video": "/assets/videos/Unacademy using Tooltips.mp4",
        "logo": "/assets/logos/unacademy_logo.png",
        "why_this_works_heading": "Why This Onboarding Approach Works",
        "why_this_works_content": "Unacademy's guided onboarding reduces the overwhelming feeling new employees often experience. By providing contextual help exactly when needed, they accelerate time-to-productivity while maintaining engagement. The progressive disclosure of information prevents cognitive overload and allows new hires to build confidence gradually as they navigate their new role and company systems.",
        "main_content_heading": "Unacademy's Smart Employee Onboarding with Contextual Guidance",
        "main_content": "Unacademy has created an intelligent onboarding experience that guides new employees through their first weeks with contextual tooltips and progressive task revelation. Instead of overwhelming new hires with massive orientation sessions, they provide just-in-time information that helps employees learn while doing, creating a more engaging and effective onboarding journey.",
        "link": "/careers/unacademy",
        "background_color": "#FFFFFF",
        "text_color": "#000000"
    },
    {
        "name": "Uber",
        "tags": ["Interviews"],
        "video": "/assets/videos/Uber Using CSAT.mp4",
        "logo": "/assets/logos/uber_logo.png",
        "why_this_works_heading": "Why This Interview Process Works",
        "why_this_works_content": "Uber's systematic approach to interview feedback creates a data-driven hiring process that continuously improves. By collecting structured feedback from every candidate interaction, they can identify pain points, bias, and areas for improvement in real-time. This transparency builds trust with candidates and helps Uber maintain their reputation as a desirable employer even when candidates don't get the role.",
        "main_content_heading": "Uber's Data-Driven Interview Experience Optimization",
        "main_content": "Uber has implemented a comprehensive feedback system that tracks every touchpoint in their interview process. From initial screening to final rounds, candidates provide immediate feedback that helps Uber maintain consistent, high-quality interview experiences across all their global offices. This data-driven approach has significantly improved their candidate satisfaction scores and time-to-hire metrics.",
        "link": "/careers/uber",
        "background_color": "#0A0A0A",
        "text_color": "#ffffff"
    },
    {
        "name": "Swiggy",
        "tags": ["Job Search"],
        "video": "/assets/videos/Swiggy using Floater.mp4",
        "logo": "/assets/logos/Swiggy_logo.png",
        "why_this_works_heading": "Why This Job Discovery Works",
        "why_this_works_content": "Swiggy's floating job recommendations appear at the perfect moment when users are naturally browsing or completing other tasks on their platform. This ambient job discovery reduces the pressure of formal job searching while keeping opportunities visible. For their large ecosystem of delivery partners and restaurant staff, this approach makes job finding feel natural and accessible.",
        "main_content_heading": "Swiggy's Ambient Job Discovery for Gig Workers",
        "main_content": "Swiggy uses contextual job recommendations that appear as floating elements throughout their platform, helping users discover new opportunities without interrupting their current activity. This approach is particularly effective for their gig economy workers who might be interested in full-time roles or additional part-time opportunities within the Swiggy ecosystem.",
        "link": "/careers/swiggy",
        "background_color": "#FC5A20",
        "text_color": "#ffffff"
    },
    {
        "name": "Zomato",
        "tags": ["Hiring"],
        "video": "/assets/videos/Zomato Using Modals.mp4",
        "logo": "/assets/logos/zomato_logo.png",
        "why_this_works_heading": "Why This Hiring Process Works",
        "why_this_works_content": "Zomato's modal-based hiring communications ensure important updates reach candidates at the right moment without getting lost in email clutter. These focused interactions help maintain momentum in the hiring process while providing clear next steps. The contextual nature of these modals - appearing at decision points - helps candidates stay engaged throughout longer hiring cycles.",
        "main_content_heading": "Zomato's Contextual Hiring Communication Strategy",
        "main_content": "Zomato uses targeted modal communications to keep candidates engaged throughout their hiring process. These focused messages appear at key decision points, providing timely updates about application status, next steps, or urgent hiring needs. This approach has significantly reduced candidate drop-off rates and improved overall hiring cycle efficiency.",
        "link": "/careers/zomato-hiring",
        "background_color": "#FF3044",
        "text_color": "#ffffff"
    },
    {
        "name": "Zepto",
        "tags": ["Onboarding"],
        "video": "/assets/videos/Zepto using Modals.mp4",
        "logo": "/assets/logos/zepto_logo.png",
        "why_this_works_heading": "Why This Onboarding Communication Works",
        "why_this_works_content": "Zepto's modal-based onboarding ensures new hires never miss critical information during their first days. By delivering important updates and tasks through focused overlays, they create clarity in what could otherwise be a chaotic onboarding experience. This approach is particularly valuable for operational roles where safety and process adherence are crucial from day one.",
        "main_content_heading": "Zepto's Structured New Hire Communication System",
        "main_content": "Zepto has developed a modal-based system for onboarding communications that ensures new employees receive critical information at the right time. From safety protocols for delivery staff to system access for corporate roles, these focused communications help new hires stay on track during their crucial first weeks.",
        "link": "/careers/zepto-onboarding",
        "background_color": "#3E0067",
        "text_color": "#ffffff"
    },
    {
        "name": "Spotify",
        "tags": ["Hiring"],
        "video": "/assets/videos/Spotify using In-app modals.mp4",
        "logo": "/assets/logos/spotify_logo.png",
        "why_this_works_heading": "Why This Talent Communication Works",
        "why_this_works_content": "Spotify's in-app talent communications create personalized experiences that reflect their brand culture. By delivering hiring updates and opportunities through their platform, they demonstrate their commitment to employee experience from the very first interaction. This approach helps candidates understand Spotify's culture and values before they even join the company.",
        "main_content_heading": "Spotify's Brand-Integrated Talent Acquisition Strategy",
        "main_content": "Spotify leverages their platform to create unique talent acquisition experiences, using in-app communications to share hiring updates, company culture content, and personalized job recommendations. This integration of their product with their hiring process creates memorable candidate experiences that reinforce their employer brand.",
        "link": "/careers/spotify",
        "background_color": "#1ED760",
        "text_color": "#000000"
    },
    {
        "name": "Swiggy",
        "tags": ["Interviews"],
        "video": "/assets/videos/Swiggy using CSAT.mp4",
        "logo": "/assets/logos/Swiggy_logo.png",
        "why_this_works_heading": "Why This Interview Feedback Works",
        "why_this_works_content": "Swiggy's immediate post-interview feedback collection helps them maintain consistently positive candidate experiences across their high-volume hiring needs. The simple rating system makes it easy for candidates to provide honest feedback while the optional comments help identify specific areas for improvement. This feedback directly influences interviewer coaching and process refinements.",
        "main_content_heading": "Swiggy's High-Volume Interview Quality Management",
        "main_content": "Swiggy has implemented a streamlined feedback system to maintain interview quality across their extensive hiring operations. With hundreds of interviews conducted weekly, their real-time feedback collection helps ensure every candidate has a positive experience regardless of the outcome, supporting their strong employer brand in competitive markets.",
        "link": "/careers/swiggy-interviews",
        "background_color": "#FC5A20",
        "text_color": "#ffffff"
    },
    {
        "name": "Porter",
        "tags": ["Applications"],
        "video": "/assets/videos/Porter using CSAT.mp4",
        "logo": "/assets/logos/porter_logo.png",
        "why_this_works_heading": "Why This Application Feedback Works",
        "why_this_works_content": "Porter's application feedback system helps them optimize their hiring funnel for blue-collar workers who may have different comfort levels with digital applications. By gathering feedback on the application process itself, they can identify and remove barriers that might prevent qualified candidates from completing their applications, ensuring they don't lose great talent to poor UX.",
        "main_content_heading": "Porter's Application Experience Optimization for Blue-Collar Workers",
        "main_content": "Porter has designed their application feedback system specifically for their diverse candidate base, including many first-time digital job applicants. By collecting feedback on application difficulty and clarity, they continuously improve their process to be more inclusive and accessible for candidates across different educational and technical backgrounds.",
        "link": "/careers/porter",
        "background_color": "#FFFFFF",
        "text_color": "#000000"
    },
    {
        "name": "Paytm",
        "tags": ["Hiring"],
        "video": "/assets/videos/Paytm using Scratchcards.mp4",
        "logo": "/assets/logos/paytm_logo.png",
        "why_this_works_heading": "Why This Recruitment Gamification Works",
        "why_this_works_content": "Paytm's gamified recruitment approach taps into familiar engagement patterns that make job searching feel less intimidating and more rewarding. By incorporating elements of surprise and achievement, they create positive associations with their hiring process. This approach is particularly effective for attracting younger talent and roles that require creativity and innovation mindset.",
        "main_content_heading": "Paytm's Gamified Talent Acquisition Strategy",
        "main_content": "Paytm has introduced gamification elements into their recruitment process, including achievement unlocks for completing application milestones and surprise rewards for referrals. This approach has significantly increased application completion rates and created buzz around their hiring campaigns, especially among tech-savvy candidates who appreciate innovative recruitment approaches.",
        "link": "/careers/paytm",
        "background_color": "#E9F7FD",
        "text_color": "#000000"
    },
    {
        "name": "Mudrex",
        "tags": ["Job Search"],
        "video": "/assets/videos/Mudrex using Modals.mp4",
        "logo": "/assets/logos/mudrex_logo.png",
        "why_this_works_heading": "Why This Talent Pipeline Works",
        "why_this_works_content": "Mudrex's targeted talent communications appear at contextually relevant moments, turning browsing into career consideration. By showcasing opportunities when users are already engaged with their product, they demonstrate company culture and work quality in action. This approach helps candidates self-select for cultural fit while maintaining high application quality.",
        "main_content_heading": "Mudrex's Product-Integrated Talent Pipeline Development",
        "main_content": "Mudrex leverages their platform usage data to identify potential candidates and deliver personalized career opportunities through contextual modals. This approach helps them build relationships with high-quality candidates before positions are even posted, creating a continuous talent pipeline that reduces time-to-hire for critical roles.",
        "link": "/careers/mudrex",
        "background_color": "#F1E2FB",
        "text_color": "#000000"
    },
    {
        "name": "Furlenco",
        "tags": ["Job Search", "Applications"],
        "video": "/assets/videos/Furlenco using In App Widgets.mp4",
        "logo": "/assets/logos/furlenco_icon.png",
        "why_this_works_heading": "Why This Career Discovery Works",
        "why_this_works_content": "Furlenco's widget-based career content taps into users' expectation for personalized, relevant information. By integrating job opportunities directly into their user experience, they create natural touchpoints for career conversations. This approach is particularly effective for attracting candidates who are already familiar with and appreciate their brand and culture.",
        "main_content_heading": "Furlenco's Integrated Career Discovery Experience",
        "main_content": "Furlenco has seamlessly integrated career opportunities into their customer experience through contextual widgets that showcase relevant openings based on user behavior and location. This approach has helped them build a strong talent pipeline from their existing customer base while maintaining the personalized feel that defines their brand.",
        "link": "/careers/furlenco",
        "background_color": "#009BAD",
        "text_color": "#ffffff"
    },
    {
        "name": "CoinDCX",
        "tags": ["Onboarding"],
        "video": "/assets/videos/Coin DCX using tooltips.mp4",
        "logo": "/assets/logos/coindcx_logo.png",
        "why_this_works_heading": "Why This Onboarding Education Works",
        "why_this_works_content": "CoinDCX's tooltip-based onboarding reduces the complexity barrier that often overwhelms new employees in technical roles. By providing contextual education exactly when needed, they accelerate competency development while maintaining engagement. This approach is particularly valuable in rapidly evolving industries where continuous learning is essential for success.",
        "main_content_heading": "CoinDCX's Contextual Employee Education System",
        "main_content": "CoinDCX has developed a sophisticated onboarding system that uses contextual tooltips to educate new hires about complex financial and technical concepts. This just-in-time learning approach helps employees build confidence gradually while ensuring they have the knowledge needed to excel in their roles from day one.",
        "link": "/careers/coindcx",
        "background_color": "#ffffff",
        "text_color": "#000000"
    },
    {
        "name": "Blinkit",
        "tags": ["Job Search", "Applications"],
        "video": "/assets/videos/Blinkit using Banners.mp4",
        "logo": "/assets/logos/blinkit_logo.png",
        "why_this_works_heading": "Why This Recruitment Visibility Works",
        "why_this_works_content": "Blinkit's prominent recruitment banners tap into familiar e-commerce browsing patterns that users instantly recognize. By treating job opportunities like featured products, they create urgency and appeal that drives applications. This approach is particularly effective for operational roles where quick hiring is essential and candidates may be browsing multiple opportunities simultaneously.",
        "main_content_heading": "Blinkit's High-Visibility Recruitment Campaign Strategy",
        "main_content": "Blinkit has adapted their successful product marketing approach to talent acquisition, using bold, eye-catching banners to promote job opportunities across their platform. This high-visibility approach has significantly increased application volumes for time-sensitive hiring needs, particularly for their rapidly expanding delivery network.",
        "link": "/careers/blinkit",
        "background_color": "#F8CB46",
        "text_color": "#000000"
    },
    {
        "name": "Airtel",
        "tags": ["Onboarding"],
        "video": "/assets/videos/Airtel using Tooltips.mp4",
        "logo": "/assets/logos/airtel_logo.png",
        "why_this_works_heading": "Why This Guided Onboarding Works",
        "why_this_works_content": "Airtel's tooltip-guided onboarding reduces the complexity of navigating large corporate systems and processes. By providing contextual help exactly when employees need it, they reduce the time to productivity while preventing the overwhelm that can occur in large organizations. This approach scales well across different roles and departments.",
        "main_content_heading": "Airtel's Scalable Employee Guidance System",
        "main_content": "Airtel has implemented a comprehensive tooltip system that guides new employees through complex corporate systems and processes. This scalable approach ensures consistent onboarding experiences across their large organization while reducing the burden on HR teams and managers to provide individual guidance for routine tasks.",
        "link": "/careers/airtel",
        "background_color": "#E90000",
        "text_color": "#ffffff"
    },
    {
        "name": "Zyadashop",
        "tags": ["Onboarding", "Job Search"],
        "video": "/assets/videos/Zyadashop using Coachmarks.mp4",
        "logo": "/assets/logos/zyadashop_logo.png",
        "why_this_works_heading": "Why This Progressive Onboarding Works",
        "why_this_works_content": "Zyadashop's coachmark system transforms potentially overwhelming onboarding into an engaging, step-by-step journey. By breaking down complex processes into manageable, guided actions, they ensure new employees build confidence while mastering their tools. This approach reduces support tickets while creating a more positive first impression of company systems and culture.",
        "main_content_heading": "Zyadashop's Interactive Employee Onboarding Journey",
        "main_content": "Zyadashop has created an engaging onboarding experience using interactive coachmarks that guide new employees through their first weeks. This approach transforms traditional training into an interactive journey, helping new hires learn company systems and processes while building confidence in their new role.",
        "link": "/careers/zyadashop",
        "background_color": "#3C329D",
        "text_color": "#ffffff"
    }
];

const page = () => {
    const [activeTag, setActiveTag] = useState('All');

    const tags = ['All', 'Job Search', 'Applications', 'Hiring', 'Interviews', 'Onboarding'];

    const filteredCards = activeTag === 'All'
        ? cardsData
        : cardsData.filter(card => card.tags.includes(activeTag));

    return (
        <>
            <div className="bg-[#FFFFFF] min-h-screen flex flex-col justify-center w-full">
                <div className="max-w-[1400px] mx-auto">
                   <img src="/assets/inspriation_gallery_main.png" alt="main_image" className='object-cover' />
                </div>
                <div className='flex justify-center  py-12 px-4 sm:px-6 lg:px-8'>
                    <div className="w-full justify-center flex flex-col max-w-[1200px]">
                        {/* Tag Filter Buttons */}
                        <div className="flex flex-wrap gap-2 mb-8 justify-center">
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setActiveTag(tag)}
                                    className={`px-6 py-[10px] rounded-lg font-medium transition-all duration-200 ${activeTag === tag
                                        ? 'bg-[#FFA500] text-black shadow-lg'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[580px] border border-white"
                                    style={{ backgroundColor: card.background_color }}
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={card.logo}
                                                alt={`${card.name} logo`}
                                                className="w-auto max-w-[150px] h-auto rounded-lg object-contain"
                                            />
                                        </div>

                                        <div className="w-[150px] h-[300px] bg-gray-800 rounded-2xl p-1 flex-shrink-0 overflow-hidden ">
                                            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                                                <video className={`text-xl font-semibold mb-4 rounded-2xl}`} src={card.video} autoPlay muted loop playsInline />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='h-[160px]'>
                                        <h5 className={`text-lg font-medium mb-2 `} style={{ color: `${card.text_color}` }}>
                                            {card.main_content_heading}
                                        </h5>

                                        <p className={`text-sm mb-6 leading-relaxed `} style={{ color: `${card.text_color}` }}>
                                            {card.main_content.length > 120
                                                ? `${card.main_content.substring(0, 120)}...`
                                                : card.main_content}
                                        </p>

                                    </div>
                                    <Link
                                        href={card.link}
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 text-black shadow border border-gray-400 bg-white`}
                                    >
                                        Read More
                                        <FaArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {filteredCards.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No companies found for the selected category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;