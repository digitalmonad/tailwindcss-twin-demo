import tw from 'twin.macro';
import { BrandLogo } from '../../utils/BrandLogo';
import { Tooltip } from '../../utils/Tooltip';

export const LayoutLeftColumn = ({ navItems, miscItems }: any) => (
  <Root>
    <BrandLogoWrapper>
      <StyledBrandLogo />
    </BrandLogoWrapper>
    <Nav>{navItems}</Nav>
    <SettingsAndHelp>{miscItems}</SettingsAndHelp>
  </Root>
);

const Root = tw.aside`flex h-screen flex-col w-18 border-r items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10`;
const Nav = tw.nav`flex flex-col gap-y-4 pt-10 flex-1`;
const BrandLogoWrapper = tw.div`flex border-b h-18 w-full items-center justify-center border-gray-200 dark:border-gray-700`;
const StyledBrandLogo = tw(
  BrandLogo
)`fill-primary-600 dark:fill-primary-200 w-8 h-8`;

const SettingsAndHelp = tw.nav`flex flex-none flex-col gap-y-4 pb-10 `;

LayoutLeftColumn.NavLink = () => <div></div>;
