/* eslint-disable @next/next/no-img-element */

import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
 
 export const ContactCard = (props: {
    image: string;
    mediumImage: string; 
    name: string;
    description: string;
    url?: string;
    className?: string;
}) => {
    return (
        <Link href={props.name} className={cn("w-full", props.className)}>
        <Card className=" p-3 bg-accent/10 hover:bg-accent flex items-center gap-4 group">
            <div className="relative w-10 h-10">
                <img 
                    src={props.image} 
                    alt={props.name} 
                    width={40} 
                    height={40} 
                    className="w-10 h-10 rounded-full object-contain" />
                <img
                    src={props.mediumImage}
                    alt={props.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 absolute -bottom-2 right-2 rounded-full object-contain"
                />
            </div>
            <div className="flex-1">
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