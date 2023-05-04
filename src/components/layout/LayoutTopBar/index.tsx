import tw from 'twin.macro';
import { Avatar } from '../../Avatar';

export const LayoutTopbar = ({
  breadcrumbs,
  userProfileImage,
  username,
}: any) => {
  return (
    <Topbar>
      {breadcrumbs}
      <RightSection>
        <Username>{username}</Username>
        <Avatar src={userProfileImage} />
      </RightSection>
    </Topbar>
  );
};

const Topbar = tw.aside`flex px-4 h-18 border-b w-full items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10 justify-between`;
const RightSection = tw.div`h-full w-[300px] items-center justify-end border-l flex border-gray-200 dark:border-gray-700`;
const Username = tw.p`text-xs px-4`;
