/* eslint-disable @next/next/no-img-element */

'Use client'
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Code, LucideIcon, MessageCircle, Rss, StickyNote, } from "lucide-react";


export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">side, fun projects.</p>
            <div className="flex flex-col gap-4">
                {SIDE_PROJECTS.map((project, index) => (
                    <SideProject
                    key={index}
                    Logo={project.Logo}
                    title={project.title}
                    description={project.description}
                    url="/"
                    />
                ))}
            </div>
            </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                    {WORKS.map((work, index) => (
                        <Work
                        key={index}
                        image={work.image}
                        title={work.title}
                        role={work.role}
                        date={work.date}
                        url={work.url}
                        />
                    ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard
                       name="Elias Araneda"
                       image="https://avatars.githubusercontent.com/u/137905336?v=4"
                       mediumImage="data:image/png;base64,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"
                       description="Full-stack developer"
                       />
                </Card>
            </div>
        </Section>
    );
};

const ContactCard = (props: {
    image: string;
    mediumImage: string; 
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img 
                src={props.mediumImage} 
                alt={props.name} 
                className="w-4 h-4 absolute -bottom-2 right-2 rounded-full object-contain"
                 />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
        </Card>
    );
};


const SIDE_PROJECTS : SideProjectProps[] = [
    {
        Logo: Code,
        title: "TIC-TAC-TOE",
        description: "play against a friend, you can see the hit before after you make it !",
        url: "/",
    },
    {
        Logo: StickyNote,
        title: "Nutrispark",
        description: "select the food and see how much calories they have",
        url: "/",
    },
    {
        Logo: Rss,
        title: "Todo-list",
        description: "Let's make your list by the MAsterChief and all your tasks will be conplete !",
        url: "https://masterchief-todo-list.vercel.app/",
    },
    {
        Logo: MessageCircle,
        title: "Citation",
        description: "Write your own citation or the must popular",
        url: "/",
    }
]


type SideProjectProps = {
    Logo : LucideIcon;
    title: string;
    description: string;
    url: string;
}



const SideProject = (props: SideProjectProps) => {
    
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16}/>
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>

            <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    )
}; 

const WORKS: WorkProps[] = [{
    title: "Chef de rang",
    role: "Restaurant Comet Food Paris",   
    date: "Jan 2025 - now",
    image: "https://cdn.prod.website-files.com/642eed47b21be33868253a0c/642eee3534abb5bc1e1552ba_logo_yellow.svg",
    url: "https://www.comet-meetings.com/la-table-du-chef-meliava"
},
{
    
    title: "ada tech School",
    role: "Full-Stack Developer Student",
    date: "Sep 2023 - Juin 2024",
    image: "https://media.licdn.com/dms/image/v2/C4D0BAQHEIsO_k2nQ-w/company-logo_100_100/company-logo_100_100/0/1630566884471/ada_tech_school_logo?e=1764201600&v=beta&t=KKPMJjeRD5KVQBDo_E0hgGkQSsYdFo4MPV39_zyQ-jU",
    url: "https://adatechschool.fr/"  
},
{
    title: "Sweett'",
    role: "Guest Relation Agent",
    date: "Jan 2020 - Dec 2022",
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQGLf2lYUmbmUA/company-logo_100_100/company-logo_100_100/0/1720631125562/sweett_logo?e=1764201600&v=beta&t=XmZa4I5zJky7hkBA6P-R41qlDu5O-XJps2USSz0bo1w",
    url: "https://sweett.com/fr?utm_source=google&utm_medium=cpc&utm_campaign=145657180243&utm_content=738873957315&utm_term=sweetinn&gad_source=1&gad_campaignid=19683299905&gbraid=0AAAAADk98iYLAwoiQI5PmEpammh54uPVd&gclid=Cj0KCQjwgpzIBhCOARIsABZm7vEd0xYQ6U2VV_WCeujCqB9trLrZM169JmHWrF_OwFtR688KQ5c0-WQaAlk4EALw_wcB"
}];

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

export const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} 
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded"
        >
            <img 
            src={props.image} 
            alt={props.title} 
            className="w-10 h-10 object-contain rounded-md" 
            />

            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    );
};