import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../Flowbite';

export interface FlowbiteBadgeTheme {
  root: FlowbiteBadgeRootTheme;
  icon: FlowbiteBadgeIconTheme;
}

export interface FlowbiteBadgeRootTheme {
  base: string;
  color: FlowbiteColors;
  href: string;
  size: BadgeSizes;
  pill: FlowbiteBoolean;
}

export interface FlowbiteBadgeIconTheme extends FlowbiteBoolean {
  size: BadgeSizes;
}

export interface BadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {
  [key: string]: string;
}

export interface BadgeProps extends Omit<ComponentProps<'span'>, 'color'> {
  color?: keyof FlowbiteColors;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  size?: keyof BadgeSizes;
  theme?: DeepPartial<FlowbiteBadgeTheme>;
  pill?:boolean;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  href,
  icon: Icon,
  size = 'xs',
  pill = false,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().badge, customTheme);

  const Content: FC = () => (
    <span
      className={twMerge(
        theme.root.base,
        theme.root.color[color],
        theme.root.size[size],
        theme.icon[Icon ? 'on' : 'off'],
        theme.root.pill[pill ? 'on' : 'off'],
        className,
      )}
      data-testid="flowbite-badge"
      {...props}
    >
      {Icon && <Icon aria-hidden className={theme.icon.size[size]} data-testid="flowbite-badge-icon" />}
      {children && <span>{children}</span>}
    </span>
  );

  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};

Badge.displayName = 'Badge';
