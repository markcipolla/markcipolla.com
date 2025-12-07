

import React from 'react';
import { Document, Text, View, Link, Page, Font } from '@react-pdf/renderer';
import { parseMarkdown, tw } from './utils';
import { calculateDuration } from '../../app/cv/calculateDuration';
import { PDFHeader } from './PDFHeader';
import { technicalCapabilities } from '@/app/page';
import { roles } from '@/app/cv/roles';

export const CVContent = ({coverLetter}: {coverLetter: string}) => (
  <Document>
    <Page size="A4" style={tw('bg-white p-8')}>
      <PDFHeader />

      {parseMarkdown(coverLetter).map((element, idx) => {
        return (
          <Text key={idx} style={{...tw('text-sm leading-relaxed mb-2'), fontFamily: 'Archia'}}>
            {(element.parts ?? []).map((part, partIdx) => {
              return part.content;
            })}
          </Text>
        );
      })}
    </Page>
    <Page size="A4" style={tw('bg-white p-8')}>
      <PDFHeader />
      <View style={tw('mb-8 border-b border-green-200 pb-8')}>
        <Text style={{...tw('text-3xl font-bold text-green-700 mb-2'), fontFamily: 'Aesthetic'}}>
          Curriculum Vitæ
        </Text>
        <Text style={{...tw('text-sm leading-relaxed mb-2'), fontFamily: 'Archia'}}>
          I'm passionate about building things.</Text>
        <Text style={{...tw('text-sm leading-relaxed mb-2'), fontFamily: 'Archia'}}>
          I'm a full-stack, product-thinking software engineer with an art and graphic design background.
        </Text>
        <Text style={{...tw('text-sm leading-relaxed mb-2'), fontFamily: 'Archia'}}>
          I have extensive knowledge and experience in building web applications, with over seventeen years in the industry across a number of business domains, and successfully delivering large scale projects to millions of users.</Text>
      </View>

      <View style={tw('mb-8 border-b border-green-200 pb-8')}>
        <Text style={{...tw('text-xl font-bold text-green-700'), fontFamily: 'Aesthetic'}}>Technical Capabilities</Text>
        
          {Object.entries(technicalCapabilities).map(([category, technologies]) => (
            <View key={category} style={tw('flex flex-row flex-wrap gap-2')}>
              <Text style={{...tw('text-sm leading-relaxed font-bold text-green-700 w-1/5'), fontFamily: 'Archia'}}>{category}:</Text>
              <Text style={{...tw('text-sm leading-relaxed flex-1'), fontFamily: 'Archia'}}>{technologies}</Text>
            </View>
          ))}
        
      </View>

      {roles.map((role, index) => (
        <View wrap={false} key={index} style={tw('mb-8 border-t border-green-200 pt-4')}>
          <View wrap={false} style={tw('mb-2')}>
            <View style={tw('flex flex-row flex-wrap gap-4 justify-between mb-2')}>
              <Text style={{...tw('text-base font-bold text-green-700'), fontFamily: 'Aesthetic'}}>{role.company}</Text>  
              {role.url && (
                <Link style={{...tw('text-xs text-blue-600 mb-2'), fontFamily: 'Archia'}} src={role.url}>
                  {role.url}
                </Link>
              )}
            </View>
            
            
            <View style={tw('flex flex-row flex-wrap gap-4 justify-between mb-2')}>
              <Text style={{...tw('text-base mb-1'), fontFamily: 'Archia'}}>{role.role}</Text>
              <Text style={{...tw('text-base text-gray-600'), fontFamily: 'Archia'}}>
                {role.started} — {role.ended || 'Present'} {role.ended ? `(${calculateDuration(role.started, role.ended)})` : ''}
              </Text>
            </View>
          </View>
          
          <View>
            {parseMarkdown(role.description).map((element, idx) => {
              if (element.type === 'paragraph') {
                return (
                  <Text key={idx} style={{...tw('text-xs leading-relaxed mb-2'), fontFamily: 'Archia'}}>
                    {(element.parts ?? []).map((part, partIdx) => {
                      if (part.type === 'link') {
                        return (
                          <Link key={partIdx} src={part.href} style={{...tw('text-blue-600'), fontFamily: 'Archia'}}>
                            {part.text}
                          </Link>
                        );
                      }
                      return part.content;
                    })}
                  </Text>
                );
              } else if (element.type === 'list') {
                return (
                  <View key={idx} style={tw('ml-4 mb-1')}>
                    {(element.items ?? []).map((item: string, itemIdx: number) => (
                      <Text key={itemIdx} style={{...tw('text-xs leading-relaxed mb-1 pl-2'), fontFamily: 'Archia'}}>• {item}</Text>
                    ))}
                  </View>
                );
              }
              return null;
            })}
          </View>
          
          <View wrap={false} style={tw('flex flex-row flex-wrap mt-2 gap-2')}>
            {role.capabilities.map((tag, tagIdx) => (
              <Text key={tagIdx} style={{...tw('text-xs bg-green-200 text-green-800 px-2 pt-0.5 pb-1 rounded-full'), fontFamily: 'Archia'}}>{tag}</Text>
            ))}
          </View>
        </View>
      ))}
    </Page>
  </Document>
);