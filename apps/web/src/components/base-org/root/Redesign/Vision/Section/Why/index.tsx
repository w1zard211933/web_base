'use client';
import { Section } from 'apps/web/src/components/base-org/root/Redesign/Section';
// import { DotsBackground } from 'apps/web/src/components/base-org/root/Redesign/Vision/Section/Why/dots-background';
import Title from 'apps/web/src/components/base-org/typography/TitleRedesign';
import { TitleLevel } from 'apps/web/src/components/base-org/typography/TitleRedesign/types';
import Text from 'apps/web/src/components/base-org/typography/TextRedesign';
import { TextVariant } from 'apps/web/src/components/base-org/typography/TextRedesign/types';

export function SectionWhy() {
  return (
    <Section content={content}>
      <div className="relative col-span-full gap-x-[min(2.25vw,_32px)] overflow-clip lg:gap-y-8 ">
        <div className="">
          <div className="hidden lg:block">
            {/* <Title level={TitleLevel.H6Regular} className="pt-0">
              The internet should belong to all of us. Right now, most of it is closed, owned by a
              few, and built to extract. We believe in something better: An open internet where
              value flows freely, and where what you create is yours to own, grow, and share. That’s
              why we’re building Base. A home for builders, creators, and anyone who wants to shape
              the future. A new foundation for a truly free global economy.
            </Title> */}
          </div>

          <div className="block lg:hidden">
            {/* <Text variant={TextVariant.BodyLarge} className="!text-base-gray-200">
              <>
                <span>
                  The internet should belong to all of us. Right now, most of it is closed, owned by
                  a few, and built to extract.
                </span>
                <br />
                <br />
                <span>
                  We believe in something better: An open internet where value flows freely, and
                  where what you create is yours to own, grow, and share.
                </span>
                <br />
                <br />
                <span>
                  That&apos;s why we&apos;re building Base. A home for builders, creators, and
                  anyone who wants to shape the future. A new foundation for a truly free global
                  economy.
                </span>
              </>
            </Text> */}
          </div>
        </div>

        {/* illus bg */}
        {/* <DotsBackground className="col-span-full row-start-1 -z-1" /> */}
      </div>
    </Section>
  );
}

const content = {
  title: 'Our Why',
  description:
    'The internet should belong to all of us. Right now, most of it is closed, owned by a few, and built to extract. \n \nWe believe in something better: An open internet where value flows freely, and where what you create is yours to own, grow, and share. \n \nThat’s why we’re building Base. A home for builders, creators, and anyone who wants to shape the future. A new foundation for a truly free global economy.',
};
