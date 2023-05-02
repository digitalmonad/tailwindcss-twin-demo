import { useState } from 'react';
import tw, { styled, css, theme } from 'twin.macro';
import './App.css';
import { BrandLogo } from './components/icons/BrandLogo';

const Root = tw.div`flex bg-gray-100 font-sans text-gray-900`;
const Aside = tw.aside`h-screen w-18 border-r border-gray-200 bg-white`;

function App() {
  return (
    <Root>
      <Aside>
        <BrandLogo></BrandLogo>
      </Aside>
    </Root>
  );
}

export default App;
