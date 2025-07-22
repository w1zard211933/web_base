'use client';

import Title from 'apps/web/src/components/base-org/typography/TitleRedesign';
import Text from 'apps/web/src/components/base-org/typography/TextRedesign';
import { TextVariant } from 'apps/web/src/components/base-org/typography/TextRedesign/types';
import { TitleLevel } from 'apps/web/src/components/base-org/typography/TitleRedesign/types';
import {
  Button,
  ButtonSizes,
  ButtonVariants,
} from 'apps/web/src/components/Button/Redesign/Button';
import AnimatedButton from 'apps/web/src/components/Button/AnimatedButton';
import Image from 'next/image';
import { motion, Variants, cubicBezier } from 'motion/react';
import Link from 'apps/web/src/components/Link';
import Container from 'apps/web/src/components/base-org/Container';
import classNames from 'classnames';

export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type SectionContent = {
  prefix?: ImageType;
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
};

type SectionProps = {
  content: SectionContent;
  children?: React.ReactNode;
  className?: string;
  disableWrapperAnimation?: boolean;
};

export const viewport = { once: true, amount: 0.1 };

const easeFn = cubicBezier(0.4, 0, 0.2, 1);

export const contentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
      duration: 0.25,
      ease: easeFn,
    },
  },
};

export const itemContentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: easeFn } },
};

export function Section({ content, children, className, disableWrapperAnimation }: SectionProps) {
  const WrapperComponent = disableWrapperAnimation ? 'div' : motion.div;

  const itemProps = {
    variants: itemContentVariants,
    ...(disableWrapperAnimation && {
      initial: 'hidden',
      whileInView: 'visible',
      viewport: viewport,
    }),
  };

  return (
    <Container className={classNames('relative lg:py-40', className)}>
      <WrapperComponent
        className="col-span-full grid grid-cols-12 gap-x-[min(2.25vw,_32px)] gap-y-8"
        {...(!disableWrapperAnimation && {
          variants: contentVariants,
          initial: 'hidden',
          whileInView: 'visible',
          viewport: viewport,
        })}
      >
        <div className="flex col-span-full justify-between items-center">
          {content.prefix && (
            <motion.div {...itemProps} className="col-span-full">
              <Image
                src={content.prefix.src}
                alt={content.prefix.alt}
                width={content.prefix.width}
                height={content.prefix.height}
                draggable={false}
              />
            </motion.div>
          )}
          <div>
            {content.cta?.label && (
              <motion.div {...itemProps} className="block col-span-full sm:col-span-3">
                {/* <Button
                  variant={ButtonVariants.Secondary}
                  asChild
                  fullWidth={false}
                  size={ButtonSizes.Large}
                >
                  <Link href={content.cta.href}>{content.cta.label}</Link>
                </Button> */}
                <Link href={content.cta.href}>
                  <AnimatedButton
                    text={content.cta.label}
                    backgroundColor="#0000ff20"
                    textColor="#0000ff"
                  />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
        <motion.div {...itemProps} className="col-span-full lg:col-span-6 lg:max-w-[450px]">
          <Title
            level={TitleLevel.H6Regular}
            className="!text-3xl !leading-[1.125] !tracking-[-0.96px]"
            as="h2"
          >
            {content.title}
          </Title>
        </motion.div>
        {content.description && (
          <motion.div {...itemProps} className="col-span-full lg:col-span-6">
            <Text variant={TextVariant.Body}>{content.description}</Text>
          </motion.div>
        )}

        {children && (
          <div className="col-span-full grid grid-cols-9 gap-x-[min(2.25vw,_32px)] gap-y-10 pt-2">
            {children}
          </div>
        )}
      </WrapperComponent>
    </Container>
  );
}
