import type { ComponentProps, FC, ReactNode } from 'react';
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteStateColors ,FlowbiteSectionBorderRadius} from '../Flowbite';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import classNames from 'classnames';


export interface FlowbiteSectionTheme {
  root: FlowbiteSectionRootTheme;
}

export interface FlowbiteSectionRootTheme {
  base: string;
  colors: FlowbiteColors;
  disabled: string;
  bordered: FlowbiteSectionOutlineTheme;
  radius: SectionBorderRadius;
  alignedLeft: {
    on: string;
    off: string;
  };
  alignedRight: {
    on: string;
    off: string;
  };
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
  color?: keyof FlowbiteColors;
  theme?: DeepPartial<FlowbiteSectionTheme>;
  borderd?: boolean;
  alignedLeft?: boolean;
  alignedRight?: boolean;
  radius?: keyof SectionBorderRadius;
}

export const Section: FC<SectionProps> = ({
  children,
  className,
  color = '',
  theme: customTheme = {},
  borderd,
  alignedLeft, 
  alignedRight,
  radius = 'sm',
  }) => {
    const theme = mergeDeep(getTheme().section, customTheme);

    const sectionClasses = classNames(
      twMerge(theme.root.base && theme.root.disabled , className, theme.root.bordered[borderd ? 'on' : 'off'] ,
      theme.root. bordered[borderd ? 'on' : 'off'], theme.root.radius[radius] , theme.root.colors[color], 
      theme.root.alignedLeft[alignedLeft ? 'on' : 'off'],theme.root.alignedRight[alignedRight ? 'on' : 'off']

      )
    )

  return (

      <div className={sectionClasses} data-testid="flowbite-Section">
      {children}
  </div>
  );
};

Section.displayName = 'Section';