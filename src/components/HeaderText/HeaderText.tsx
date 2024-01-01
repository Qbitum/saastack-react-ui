import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
<<<<<<< HEAD
import type {  FlowbiteBoolean, FlowbiteColors, FlowbiteSizes, FlowbiteFontWeight } from '../Flowbite';
=======
import type {  FlowbiteBoolean, FlowbiteColors, FlowbiteFontWeight } from '../Flowbite';
import { FlowbiteTextSizes } from '../Flowbite/FlowbiteTheme';
>>>>>>> 6b07d10dc82c816166fce4e20996847383691519

export interface FlowbiteHeaderTextTheme {
  root: FlowbiteHeaderTextRootTheme;
  icon: FlowbiteHeaderTextIconTheme;
}

export interface FlowbiteHeaderTextRootTheme {
  base: string;
  color: FlowbiteColors;
  href: string;
  size: HeaderTextSizes;
  fontWeight: HeaderTextFontWeight;
}

export interface FlowbiteHeaderTextIconTheme extends FlowbiteBoolean {
  size: HeaderTextSizes;
}

<<<<<<< HEAD
export interface HeaderTextSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' > {
=======
export interface HeaderTextSizes extends Pick<FlowbiteTextSizes, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' > {
>>>>>>> 6b07d10dc82c816166fce4e20996847383691519
  [key: string]: string;
}

export interface HeaderTextFontWeight extends Pick<FlowbiteFontWeight, 'extrabold' | 'bold' | 'semibold' | 'normal' | 'light'> {
  [key: string]: string;
}

export interface HeaderTextProps extends Omit<ComponentProps<'div'>, 'color'> {
  color?: keyof FlowbiteColors;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  size?: keyof HeaderTextSizes;
  theme?: DeepPartial<FlowbiteHeaderTextTheme>;
  fontWeight?: keyof HeaderTextFontWeight;
  
}

export const HeaderText: FC<HeaderTextProps> = ({
  children,
  color = 'default',
  href,
  icon: Icon,
  size = 'h4',
  fontWeight = 'extrabold',
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().headerText, customTheme);

  const Content: FC = () => (
    <div
      className={twMerge(
        theme.root.base,
        theme.root.color[color],
        theme.root.size[size],
        theme.root.fontWeight[fontWeight],
        theme.icon[Icon ? 'on' : 'off'],
        className,
      )}
      data-testid="flowbite-HeaderText"
      {...props}
    >
      {Icon && <Icon aria-hidden className={theme.icon.size[size]} data-testid="flowbite-HeaderText-icon" />}
      {children && <span>{children}</span>}
    </div>
  );

  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};

HeaderText.displayName = 'HeaderText';
