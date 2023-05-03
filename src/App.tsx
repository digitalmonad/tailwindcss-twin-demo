import { useContext, useState } from 'react';
import tw, { styled, css, theme } from 'twin.macro';

import { BrandLogo } from './components/utils/BrandLogo';
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
import OverviewFlow from './components/utils/Overview';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Root>
      <LeftColumn>
        <BrandLogoWrapper>
          <StyledBrandLogo />
        </BrandLogoWrapper>
        <Nav>
          <Tooltip content='Builder' position='right'>
            <NavLink href='#'>
              <BuilderIcon />
            </NavLink>
          </Tooltip>

          <Tooltip content='My Workflows' position='right'>
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
        </Nav>
        <SettingsAndHelp>
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
        </SettingsAndHelp>
      </LeftColumn>
      <CenterColumn>
        <Topbar></Topbar>
        <WorkboardWrapper>
          <OverviewFlow />
        </WorkboardWrapper>
      </CenterColumn>
      <RightColumn></RightColumn>
    </Root>
  );
}

const Root = tw.div`flex bg-gray-100  dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-200`;
const LeftColumn = tw.aside`flex h-screen flex-col w-18 border-r items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10`;
const RightColumn = tw.aside`flex h-screen flex-col w-[300px] border-l items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10`;
const Topbar = tw.aside`flex h-18 border-b w-full border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10`;
const CenterColumn = tw.div`flex flex-1 flex-col`;
const WorkboardWrapper = tw.div`flex flex-1`;
const Nav = tw.nav`flex flex-col gap-y-4 pt-10 flex-1`;
const SettingsAndHelp = tw.nav`flex flex-none flex-col gap-y-4 pb-10 `;
const NavLink = tw.a`relative cursor-pointer rounded-md bg-gray-100 dark:bg-gray-700 p-2 text-primary-600 dark:text-primary-200 hover:bg-gray-50 drop-shadow-md dark:hover:bg-gray-600`;
const BrandLogoWrapper = tw.div`flex border-b h-18 w-full items-center justify-center border-gray-200 dark:border-gray-700`;
const StyledBrandLogo = tw(
  BrandLogo
)`fill-primary-600 dark:fill-primary-200 w-8 h-8`;

export default App;
