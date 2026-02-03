import Image from "next/image";
import { Block, ExternalLink, Section } from "@/components";
import email from "./email.svg";
import github from "./github.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
export const Footer = () => (
  <Section>
    <Block columns={3} className="col-start-3">
      <ul className="flex gap-12">
        <li><ExternalLink href="mailto:mark@markcipolla.com"><Image width={60} src={email} alt="Email" /></ExternalLink></li>
        <li><ExternalLink href="https://github.com/markcipolla"><Image width={40} src={github} alt="GitHub" /></ExternalLink></li>
        <li><ExternalLink href="https://www.linkedin.com/in/mark-cipolla"><Image width={40} src={linkedin} alt="LinkedIn" /></ExternalLink></li>
        <li><ExternalLink href="https://www.instagram.com/dmaerk/"><Image width={40} src={instagram} alt="Instagram" /></ExternalLink></li>
      </ul>
    </Block>
  </Section>
);
