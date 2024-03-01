'use client';

import type { ComponentProps, ElementType, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean } from '../Flowbite';
import { SidebarCTA, type FlowbiteSidebarCTATheme } from './SidebarCTA';
import { SidebarCollapse, type FlowbiteSidebarCollapseTheme } from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import { SidebarItem, type FlowbiteSidebarItemTheme } from './SidebarItem';
import { type FlowbiteSidebarBottomItemTheme, SidebarBottomItem } from './SidebarBottomItem';

import { SidebarItemGroup, type FlowbiteSidebarItemGroupTheme } from './SidebarItemGroup';
import { SidebarBottomGroup, type FlowbiteSidebarBottomGroupTheme } from './SidebarBottomGroup';

import { SidebarItems, type FlowbiteSidebarItemsTheme } from './SidebarItems';
import { SidebarLogo, type FlowbiteSidebarLogoTheme } from './SidebarLogo';

export interface FlowbiteSidebarTheme {
  root: {
    base: string;
    collapsed: FlowbiteBoolean;
    inner: string;
  };
  collapse: FlowbiteSidebarCollapseTheme;
  cta: FlowbiteSidebarCTATheme;
  item: FlowbiteSidebarItemTheme;
  bottomItem: FlowbiteSidebarBottomItemTheme
  items: FlowbiteSidebarItemsTheme;
  itemGroup: FlowbiteSidebarItemGroupTheme;
  logo: FlowbiteSidebarLogoTheme;
  bottomGroup: FlowbiteSidebarBottomGroupTheme;
}

export interface SidebarProps extends ComponentProps<'div'> {
  as?: ElementType;
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean;
  theme?: DeepPartial<FlowbiteSidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = 'nav',
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(getTheme().sidebar, customTheme);

  return (
    <SidebarContext.Provider value={{ theme, isCollapsed }}>
      <Component
        aria-label="Sidebar"
        hidden={isCollapsed && collapseBehavior === 'hide'}
        className={twMerge(theme.root.base, theme.root.collapsed[isCollapsed ? 'on' : 'off'], className)}
        {...props}
      >
        <div className={theme.root.inner}>{children}</div>
      </Component>
    </SidebarContext.Provider>
    
  );
};

SidebarComponent.displayName = 'Sidebar';

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  BottomItem: SidebarBottomItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
  BottomGroup: SidebarBottomGroup,
});
