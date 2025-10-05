import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import { Section } from "@/components/ui/Section";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    title: "CEO & Founder",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Jane Smith",
    title: "Chief Technology Officer",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Sam Wilson",
    title: "Lead Designer",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    name: "Alice Johnson",
    title: "Head of Marketing",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <Section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the talented people behind our success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};