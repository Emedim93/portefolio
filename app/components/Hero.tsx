/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { GithubIcon } from "./icons/GithubIcon";

const Code = ({className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 font-mono border hover:bg-accent/50 border-accent px-1 py-0.5 transition-colors text-primary rounded-sm",className)} {...props} />
}

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption text-5xl text-primary font-bold">Elias Araneda</h2>
                <h3 className="text-white text-3xl font-caption">Software developer</h3>
                <p className="text-base text-white">
                    I love creating web application and figuredout issues.
                    <a href="https://github.com/Emedim93">
                    <Code className="inline-flex items-center gap-1">
                    <GithubIcon size={16} className="inline"  />Github
                    </Code>
                    </a> Loving learning new concept and challenging myself.

                    Have two nationality French and Chilian
                    <a href="https://github.com/Emedim93">
                    <Code className="inline-flex items-center gap-1"> 
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/langfr-250px-Flag_of_Chile.svg.png"
                     style={{width: 16, height: "auto"}} 
                     alt="flag's contry"
                     />
                    </Code> 
                    </a>
                    .
                 </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHnbLdP7Ywtjw/profile-displayphoto-shrink_800_800/B4EZXhbElGGwAc-/0/1743243725674?e=1748476800&v=beta&t=HOE8A1NZzOLO6iSkoSfEqVKe7NK020iNHhpZqRdaRto "
                className="w-full h-auto max-w-xs max-md:w-56"
                style={{ borderRadius: '50%' }}
                alt="elias's picture"
                />
            </div>
        </Section>
    )
}