/* eslint-disable @next/next/no-img-element */
import { Code } from "./Code";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption text-5xl text-primary font-bold">Elias Araneda</h2>
                <h3 className="text-white text-3xl font-caption">
                    Software developer
                </h3>
                <p className="text-base text-muted-foreground mt-4">
                    I love creating web application and figuredout issues.
                    <Link href="https://github.com/Emedim93">
                    <Code className="inline-flex items-center gap-1">
                        <GithubIcon size={16} className="inline"  />Github
                    </Code>
                    </Link> Loving learning new concept and challenging myself.

                    Have two nationality French and Chilian
                    <Link href="https://github.com/Emedim93">
                    <Code className="inline-flex items-center gap-1"> 
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/langfr-250px-Flag_of_Chile.svg.png"
                     style={{width: 16, height: "auto"}} 
                     alt="Chile flag's contry"
                     />
                    </Code> 
                    </Link>
                    .
                 </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                src="https://avatars.githubusercontent.com/u/137905336?s=400&u=49cf8ba84d8b750b0e7a043d25131b206f9d37ac&v=4"
                className="w-full h-auto max-w-xs max-xs:w-56"
                style={{ borderRadius: '50%' }}
                alt="elias's picture"
                />
            </div>
        </Section>
    )
}