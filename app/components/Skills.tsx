import { Code } from "./Code";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { OpenAILogo } from "./icons/OPenAILogo";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
        return (
        <Section className="text-foreground flex flex-col items-start gap-4">
                <Badge variant={"outline"}>Skills</Badge>
                    <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    I love working on...
                </h2>
            <div className="flex max-md:flex-col gap-4"> 
                <div className="flex flex-col gap-2 flex-1">
                        <ReactLogo size={42} className="animate-spin"
                        style={{ 
                            animationDuration: "10s"
                         }}
                        />
                    <h3 className="text-2xl font-semibold tracking-tight"
                    >
                        React</h3>
                    <p className="text-sm text-muted-foreground">Mes projets sont principalement développés avec <Code>React</Code>. 
                    Cependant, j&apos;intègre <Code>Next.js</Code> comme framework pour le backend et le frontend. 
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                        <TailwindLogo size={42}
                        />
                    <h3 className="text-2xl font-semibold tracking-tight"
                    >
                        Tailwind</h3>
                    <p className="text-sm text-muted-foreground">Je peux créer <u>des applications</u> <i>rapidement</i> en utilisant <Code>Tailwind CSS</Code>.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                        <OpenAILogo size={42}
                        />
                    <h3 className="text-2xl font-semibold tracking-tight"
                    >
                        AI integration</h3>
                    <p className="text-sm text-muted-foreground">j&apos;utilise OpenAI pour créer des applications parfaites afin d&apos;apporter une expérience optimale aux utilisateurs.
                    </p>
                </div>
            </div>
        </Section>
    );
}