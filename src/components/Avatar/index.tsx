import tw from 'twin.macro';

export const Avatar = ({ src }: any) => <Image {...{ src }} />;

const Image = tw.img`rounded-full w-10 h-10`;
