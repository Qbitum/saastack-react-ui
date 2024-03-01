'use client';

import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { Badge } from '../Badge';
import type { FlowbiteColors } from '../Flowbite';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface FlowbiteSidebarBottomItemTheme {
  active: string;
  base: string;
  collapsed: {
    insideCollapse: string;
    noIcon: string;
  };
  content: {
    base: string;
  };
  icon: {
    base: string;
    active: string;
  };
  label: {
    base:string;
    active:string;
  };
  listItem: string;
}

export interface SidebarBottomItemProps extends Omit<ComponentProps<'div'>, 'ref'>, Record<string, unknown> {
  active?: boolean;
  as?: ElementType;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: keyof SidebarBottomItemLabelColors;
  theme?: DeepPartial<FlowbiteSidebarBottomItemTheme>;
}

export interface SidebarBottomItemLabelColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

const ListItem: FC<
  PropsWithChildren<{
    id: string;
    theme: FlowbiteSidebarBottomItemTheme;
    isCollapsed: boolean;
    // tooltipChildren: ReactNode | undefined;
    className?: string;
  }>
  //id, theme, tooltipChildren, was removed due to lint errors
> = ({  isCollapsed, children: wrapperChildren, ...props }) => (
  <li {...props}>
    {isCollapsed ? (
      wrapperChildren
    ) : (
      wrapperChildren
    )}
  </li>
);

const Children: FC<PropsWithChildren<{ id: string; theme: FlowbiteSidebarBottomItemTheme }>> = ({ id, theme, children }) => {
  return (
    <span
      data-testid="flowbite-sidebar-bottom-item-content"
      id={`flowbite-sidebar-bottom-item-${id}`}
      className={twMerge(theme.content.base)}
    >
      {children}
    </span>
  );
};

export const SidebarBottomItem = forwardRef<Element, SidebarBottomItemProps>(
  (
    {
      active: isActive,
      as: Component = 'a',
      children,
      className,
      icon: Icon,
      label,
      labelColor = 'info',
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const { theme: rootTheme, isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();

    const theme = mergeDeep(rootTheme.item, customTheme);

    return (
      // tooltipChildren={children} was included before
      <ListItem theme={theme} className={theme.listItem} id={id} isCollapsed={isCollapsed} >
        <Component
          aria-labelledby={`flowbite-sidebar-bottom-item-${id}`}
          ref={ref}
          className={twMerge(
            theme.base,
            isActive && theme.active,
            !isCollapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
            className,
          )}
          {...props}
        >
          {Icon && (
          <Icon
              aria-hidden
              data-testid="flowbite-sidebar-item-icon"
              className={twMerge(theme.icon?.base, isActive && theme.icon?.active)}
            />
          )}
          {isCollapsed && !Icon && (
            <span className={theme.collapsed?.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? '?'}</span>
          )}
          {!isCollapsed && (
            <Children id={id} theme={theme}>
              {children}
            </Children>
          )}
          {!isCollapsed && label && (
            <Badge color={labelColor} data-testid="flowbite-sidebar-label" hidden={isCollapsed} className={theme.label.base}>
              {label}
            </Badge>
          )}
        </Component>
        {isCollapsed && (<div className={twMerge(
              theme.label.base,
              isActive && theme.label.active
            )}>{children}</div>)}
      </ListItem>
    );
  },
);

SidebarBottomItem.displayName = 'Sidebar.BottomItem';
