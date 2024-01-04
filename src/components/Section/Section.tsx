import { type ComponentProps, type FC, type ReactNode } from 'react';
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteStateColors ,FlowbiteSectionBorderRadius} from '../Flowbite';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import { DeepPartial } from '~/src/types';
import classNames from 'classnames';


export interface FlowbiteSectionTheme {
  root: FlowbiteSectionRootTheme;
}

export interface FlowbiteSectionRootTheme {
  base: string;
  colors: SectionColors;
  disabled: string;
  bordered: FlowbiteSectionOutlineTheme;
  radius: SectionBorderRadius;
  
}

export interface FlowbiteSectionOutlineTheme extends FlowbiteBoolean {
  color: SectionOutlineColors;
}
export interface SectionOutlineColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}



export interface SectionColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface SectionBorderRadius extends Pick<FlowbiteSectionBorderRadius, 'xs' | 'sm' | 'lg' | 'xl'> {
  [key: string]: string;
}
export interface SectionProps extends Omit<ComponentProps<'div'>, 'color'> {
  children?: ReactNode;
  isProtected?: boolean;
  className?: string;
  theme?: DeepPartial<FlowbiteSectionTheme>;
  borderd?: boolean;
  radius?: keyof SectionBorderRadius;
  align?: string;
}

export const Section: FC<SectionProps> = ({
  children,
  className,
  theme: customTheme = {},
  borderd,  
  radius = 'sm',
  }) => {
    const theme = mergeDeep(getTheme().section, customTheme);

    const sectionClasses = classNames(
      twMerge(theme.root.base && theme.root.disabled , className, theme.root.bordered[borderd ? 'on' : 'off'] ,
      theme.root. bordered[borderd ? 'on' : 'off'], theme.root.radius[radius] , )
    )

  return (

      <div className={sectionClasses} data-testid="flowbite-Section">
   
      {children}
    
  </div>
  );
};

Section.displayName = 'Section';