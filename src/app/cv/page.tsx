"use client";
import React from "react";
import { Section, Block, Header, ExternalLink, Tags } from "@/components";
import ReactMarkdown from "react-markdown";
import { roles } from "./roles";
import { calculateDuration } from "./calculateDuration";

export interface Role {
  company: string;
  url: string | null;
  role: string;
  started: string;
  ended: string | null;
  capabilities: string[];
  description: string;
}

export default function CurriculumVitæ() {
  return (
    <>
      <Section>
        {roles.map((role, index) => (
          <React.Fragment key={index}>
            <Header label={role.company}>
              <div>
                {role.url && (
                  <h2 className="mb-3">
                    <ExternalLink href={role.url}>{role.url}</ExternalLink>
                  </h2>
                )}

                <p>{role.role}</p>

                <p className="text-sm">
                  {role.started} — {role.ended || "Present"} ({calculateDuration(role.started, role.ended)})
                </p>
              </div>
            </Header>
            <Block columns={3} noPadding noGap className="divide-y divide-green-200">
              <Role role={role} />
            </Block>
          </React.Fragment>
        ))}
      </Section>
    </>
  );
}

const Role = ({ role }: { role: Role }) => {
  return (
    <div className="px-4 py-8 md:px-12 flex gap-8 flex-col">
      <ReactMarkdown
        className="mt-4 flex flex-col gap-4"
        components={{
          a(props) {
            const { href, children } = props;
            return <ExternalLink href={href}>{children}</ExternalLink>;
          },
          ul(props) {
            const { children } = props;
            return <ul className="list-disc list-outside pl-8">{children}</ul>;
          },
          li(props) {
            const { children } = props;
            return <li className="pl-2">{children}</li>;
          }
        }}
      >
        {role.description}
      </ReactMarkdown>
      <Tags tags={role.capabilities} />
    </div>
  );
};
