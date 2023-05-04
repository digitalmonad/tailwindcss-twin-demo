import tw from 'twin.macro';
import { LayoutLeftColumn } from '../LayoutLeftColumn';
import { LayoutTopbar } from '../LayoutTopBar';

export const LayoutMain = ({
  navItems,
  miscItems,
  breadcrumbs,
  userProfileImage,
  username,
  workboard,
}: any) => {
  return (
    <Root>
      <LayoutLeftColumn {...{ navItems, miscItems }} />
      <CenterColumn>
        <LayoutTopbar
          {...{ breadcrumbs, userProfileImage, username }}
        ></LayoutTopbar>
        <WorkboardWrapper>{workboard}</WorkboardWrapper>
      </CenterColumn>
    </Root>
  );
};

const Root = tw.div`flex bg-gray-100  dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-200`;
const CenterColumn = tw.div`flex flex-1 flex-col`;
const WorkboardWrapper = tw.div`flex flex-1`;
