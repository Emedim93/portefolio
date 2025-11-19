/* eslint-disable @next/next/no-img-element */

'Use client'
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Code, Gamepad2, LayoutGrid, ListTodo, LucideIcon, MessageCircle, StickyNote, } from "lucide-react";


export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
            <Card className="w-full p-10 flex flex-col gap-2">
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
                        key={index} {...work} />
                    ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-5">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard
                            url="https://github.com/EliasAraneda"
                            name="Elias Araneda"                                        
                            image="https://avatars.githubusercontent.com/u/137905336?v=4" 
                            mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpAgjyTmbZqNifhkIsHXtr3clSdPvxQ5kIg&s"
                            description="GitHub"
                            />
                    
                            <ContactCard
                            url="mailto:emedim.araneda@gmail.com"
                            name="ELias Araneda"
                            image="https://avatars.githubusercontent.com/u/137905336?v=4" 
                            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/240px-LinkedIn_icon.svg.png"
                            description=""
                            />
                </Card>
            </div>
        </Section>
    );
};

const ContactCard = (props: {
    url: string;
    image: string;
    mediumImage: string; 
    name: string;
    description: string;
}) => {
    return (
        <Link href={props.url} className="w-full">
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                <div className="relative">
                    <img 
                    src={props.image} 
                    alt={props.name} 
                    className="w-10 h-10 rounded-full object-contain" />
                    <img 
                    src={props.mediumImage} 
                    alt={props.name} 
                    className="w-4 h-4 absolute -bottom-1 right-1 rounded-full object-contain"
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
        </Link>
    );
};


const SIDE_PROJECTS : SideProjectProps[] = [
    {
        Logo: Code,
        title: "Tic-Tac-Toe",
        description: "play against a friend, you can see the hit before after you make it !",
        url: "https://tic-tac-toe-lets-play.vercel.app/",
    },
    {
        Logo: StickyNote,
        title: "Nutrispark",
        description: "select the food and see how much calories they have",
        url: "/",
    },
    {
        Logo: ListTodo,
        title: "Todo-list",
        description: "Let's make your list by the MasterChief and all your tasks will be complete !",
        url: "https://masterchief-todo-list.vercel.app/",
    },
    {
        Logo: MessageCircle,
        title: "Citation",
        description: "Write your own citation or the must popular",
        url: "/",
    },
    {
        Logo:LayoutGrid,
        title: "Dashboard",
        description: "Create your own dashboard with weather, news and more",// à modifier car c'est le projet sur le site de next que je dois faire !!
        url: "/",
    },
    {
        Logo: Gamepad2,
        title: "Halo Universe",
        description: "Discover the Halo universe with all characters, weapons and more",
        url: "/",
    },
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