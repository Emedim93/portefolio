'Use client'
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Gamepad2, Link, ListCheck, Quote, UtensilsCrossed } from "lucide-react";


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
                <Card className="p-4 flex-1">Work</Card>
                <Card className="p-4 flex-1">Contact me</Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS = [
    {
        Logo: Gamepad2,
        title: "TIC-TAC-TOE",
        description: "play against a friend, you can see the hit before after you make it !"
    },
    {
        Logo: UtensilsCrossed,
        title: "Nutrispark",
        description: "select the food and see how much calories they have"
    },
    {
        Logo: ListCheck,
        title: "Todo-list",
        description: "Let's make your list by the MAsterChief and all your tasks will be conplete !"
    },
    {
        Logo: Quote,
        title: "Citation",
        description: "Write your own citation or the must popular"
    }
]


type SideProjectProps = {
    Logo : React.ElementType;
    title: string;
    description: string;
    url: string;
}



const SideProject = (props: SideProjectProps) => {
    
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo />
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>

            <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    )
}; {

}