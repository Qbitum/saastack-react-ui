import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { omit } from '../../helpers/omit';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbiteColors } from '../Flowbite';

export interface FlowbiteCardTheme {
  root: FlowbiteCardRootTheme;
  img: FlowbiteCardImageTheme;
  color: FlowbiteColors;
}

export interface FlowbiteCardRootTheme {
  base: string;
  children: string;
  horizontal: FlowbiteBoolean;
  href: string;
  color: FlowbiteColors;
}

export interface FlowbiteCardImageTheme {
  base: string;
  horizontal: FlowbiteBoolean;
}

interface CommonCardProps extends Omit<ComponentProps<'div'>,'color'> {
  horizontal?: boolean;
  href?: string;
  /** Overwrites the theme. Will be merged with the context theme.
   * @default {}
   */
  color?: keyof FlowbiteColors;
  theme?: DeepPartial<FlowbiteCardTheme>;
  // color?: string;
}

export type CardProps = (
  | { imgAlt?: string; imgSrc?: string; renderImage?: never }
  | {
      /** Allows to provide a custom render function for the image component. Useful in Next.JS and Gatsby. **Setting this will disable `imgSrc` and `imgAlt`**.
       */
      renderImage?: (theme: DeepPartial<FlowbiteCardTheme>, horizontal: boolean) => JSX.Element;
      imgAlt?: never;
      imgSrc?: never;
      color?: keyof FlowbiteColors;
      // color?: keyof FlowbiteColors;
    }
) &
  CommonCardProps;

export const Card: FC<CardProps> = (props) => {
  const { children, className,color='info', horizontal, href, theme: customTheme = {} } = props;
  const Component = typeof href === 'undefined' ? 'div' : 'a';
  const theirProps = removeCustomProps(props);

  const theme = mergeDeep(getTheme().card, customTheme);

  return (
    <Component
      data-testid="flowbite-card"
      href={href}
      // color = 'default'

      className={twMerge(
        theme.root.base,
        theme.root.horizontal[horizontal ? 'on' : 'off'],
        href && theme.root.href,
        theme.color[color], 
        className,
      )}
      {...theirProps}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text -- jsx-ally/alt-text gives a false positive here. Since we use our own Image component, we cannot provide an "alt" prop.*/}
      <Image {...props} color={props.color}/>
      <div className={theme.root.children}>{children}</div>
    </Component>
  );
};

const Image: FC<CardProps & { color?: keyof FlowbiteColors }> = ({ theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().card, customTheme);
  if (props.renderImage) {
    return props.renderImage(theme, props.horizontal ?? false);
  }
  if (props.imgSrc) {
    return (
      <img
        data-testid="flowbite-card-image"
        alt={props.imgAlt ?? ''}
        src={props.imgSrc}
        className={twMerge(theme.img.base, theme.img.horizontal[props.horizontal ? 'on' : 'off'])}
      />
    );
  }
  return null;
};

const removeCustomProps = omit([
  'renderImage',
  'imgSrc',
  'imgAlt',
  'children',
  'className',
  'horizontal',
  'href',
  'theme',
  'color'
]);
