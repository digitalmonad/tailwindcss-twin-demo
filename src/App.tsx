import { useContext, useState } from 'react';
import tw, { styled, css, theme } from 'twin.macro';

import {
  Trello as BuilderIcon,
  Upload as IntegrationsIcon,
  List as ListIcon,
  Image as ImageIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
} from 'react-feather';
import { Tooltip } from './components/utils/Tooltip';
import { ThemeContext } from './hooks/ThemeContext';
import { Workboard } from './components/Workboard';
import { Breadcrumbs } from './components/Breadcrumbs';
import { LayoutMain } from './components/layout/LayoutMain';
import Lol from './assets/musk-avatar.jpg';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <LayoutMain
      navItems={
        <>
          <Tooltip content='Builder' position='right'>
            <NavLink href='#'>
              <BuilderIcon />
            </NavLink>
          </Tooltip>
          <Tooltip content='Workflows' position='right'>
            <NavLink href='#'>
              <ListIcon />
            </NavLink>
          </Tooltip>
          <Tooltip content='Assets' position='right'>
            <NavLink href='#'>
              <ImageIcon />
            </NavLink>
          </Tooltip>
          <Tooltip content='Integrations' position='right'>
            <NavLink href='#'>
              <IntegrationsIcon />
            </NavLink>
          </Tooltip>
        </>
      }
      miscItems={
        <>
          <Tooltip content='Settings' position='right'>
            <NavLink href='#'>
              <SettingsIcon />
            </NavLink>
          </Tooltip>
          <Tooltip content='Help' position='right'>
            <NavLink href='#'>
              <InfoIcon />
            </NavLink>
          </Tooltip>
          <Tooltip content='Switch Theme' position='right'>
            <NavLink onClick={toggleTheme}>
              {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </NavLink>
          </Tooltip>
        </>
      }
      breadcrumbs={<Breadcrumbs />}
      userProfileImage={Lol}
      username='jonathan.doe@gmail.com'
      workboard={<Workboard />}
    />
  );
}

const Root = tw.div`flex bg-gray-100  dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-200`;
const LeftColumn = tw.aside`flex h-screen flex-col w-18 border-r items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10`;
const RightColumn = tw.aside`flex h-screen flex-col w-[300px] border-l items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10`;
const Topbar = tw.aside`flex h-18 border-b w-full items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10`;
const CenterColumn = tw.div`flex flex-1 flex-col`;
const WorkboardWrapper = tw.div`flex flex-1`;

const NavLink = tw.a`relative cursor-pointer rounded-md bg-gray-100 dark:bg-gray-700 p-2 text-primary-600 dark:text-primary-200 hover:bg-gray-50 drop-shadow-md dark:hover:bg-gray-600`;

export default App;
