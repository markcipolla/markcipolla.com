import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { tw } from './utils';

export const PDFHeader = () => (
  <>
    <View fixed style={tw('mb-8')}>
      <Text style={{...tw('text-4xl font-bold text-green-700 mt-0 mb-0 leading-none'), fontFamily: 'Aesthetic'}}>MARK</Text>
      <Text style={{...tw('text-4xl font-bold text-green-700 mt-0 mb-0 leading-none'), fontFamily: 'Aesthetic'}}>CIPOLLA</Text>
    </View>

    <View style={tw('mb-8 border-b border-green-200 pb-8')}>
      <Text style={{...tw('text-xs'), fontFamily: 'Archia'}}>mark@markcipolla.com</Text>
      <Text style={{...tw('text-xs'), fontFamily: 'Archia'}}>+61 413 856 645</Text>
    </View>
  </>
);