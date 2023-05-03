import { PropsWithChildren } from 'react';
import {
  Tooltip as RadixTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Arrow,
} from '@radix-ui/react-tooltip';
import { Side } from '@radix-ui/react-popper';
import tw from 'twin.macro';

const ContentWrapper = tw.div`px-2 py-1 bg-gray-800 dark:bg-gray-100 rounded shadow-sm text-white dark:text-gray-800`;
const StyledArrow = tw(Arrow)`fill-gray-800 dark:fill-gray-100 shadow-sm`;

type TTooltipProps = {
  position?: Side;
  content: string;
};

export const Tooltip = ({
  children,
  position,
  content,
}: PropsWithChildren<TTooltipProps>) => {
  return (
    <TooltipProvider delayDuration={0}>
      <RadixTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={position}>
          <StyledArrow />
          <ContentWrapper>{content}</ContentWrapper>
        </TooltipContent>
      </RadixTooltip>
    </TooltipProvider>
  );
};
