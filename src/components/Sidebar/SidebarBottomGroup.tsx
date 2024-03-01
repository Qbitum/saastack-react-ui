'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useSidebarContext } from './SidebarContext';
import { SidebarItemContext } from './SidebarItemContext';

export interface FlowbiteSidebarBottomGroupTheme {
  base: string;
}

export interface SidebarBottomGroupProps extends ComponentProps<'ul'> {
  theme?: DeepPartial<FlowbiteSidebarBottomGroupTheme>;
}

export const SidebarBottomGroup: FC<SidebarBottomGroupProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useSidebarContext();

  const theme = mergeDeep(rootTheme.bottomGroup, customTheme);

  return (
    <ul data-testid="flowbite-sidebar-bottom-group" className={twMerge(theme.base, className)} {...props}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
};

SidebarBottomGroup.displayName = 'Sidebar.BottomGroup';
