import tw from 'twin.macro';
import { ChevronRight as ChevronIcon } from 'react-feather';

export const Breadcrumbs = () => {
  return (
    <BreadcrumbsWrapper>
      <Path>Builder</Path>
      <ChevronWrapper>
        <ChevronIcon size={16} />
      </ChevronWrapper>
      <Path>Auth workflows</Path>
      <ChevronWrapper>
        <ChevronIcon size={16} />
      </ChevronWrapper>
      <Path>Registration form</Path>
    </BreadcrumbsWrapper>
  );
};

const BreadcrumbsWrapper = tw.div`flex`;
const Path = tw.h3`dark:text-white text-gray-900`;
const ChevronWrapper = tw.div`items-center justify-center flex `;
