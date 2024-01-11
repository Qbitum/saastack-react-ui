import { FC,ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mergeDeep } from '../../helpers/merge-deep';
import { twMerge } from 'tailwind-merge';
import { DeepPartial } from '../../types';
import { getTheme } from "../../theme-store";

export interface FlowbiteSubHeaderTheme{
	base:       string;
	background: Background;
	show:       Show;
	heights:     Heights;
}

export interface Background {
	default:   string;
	error:     string;
	primary:   string;
	secondary: string;
	white:     string;
	sky:string;
}

export interface Heights {
	sm: string;
	md: string;
	lg: string;
}

export interface Show {
	off: string;
	on:  string;
}


export interface SubHeaderLeftProps {
	children?: ReactNode;
	heading:string;
	className?: string;
}
export const SubHeaderLeft: FC<SubHeaderLeftProps> = ({ children,heading, className }) => {
	return <div className={classNames('col-span-2', className)}>
		<span className='font-semibold text-base mb-0'>{heading}</span>
		{children}</div>;
};
SubHeaderLeft.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
SubHeaderLeft.defaultProps = {
	className: undefined,
};

export interface SubHeaderRightProps {
	children: ReactNode;
	className?: string;
}
export const SubHeaderRight: FC<SubHeaderRightProps> = ({ children, className }) => {
	return (
		<div className={classNames('col-span-2', 'ml-auto', className)}>{children}</div>
	);
};
SubHeaderRight.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
SubHeaderRight.defaultProps = {
	className: undefined,
};

export interface SubHeaderProps {
	children: ReactNode;
	className?: string;
	h?: keyof Heights;
	bg?:keyof Background;
  theme?: DeepPartial<FlowbiteSubHeaderTheme>;

}
export const SubHeader: FC<SubHeaderProps> = ({ children, 
	className, 
	h='sm',
	bg = 'default',
  theme: customTheme = {},
  ...props }) => {
	const theme = mergeDeep(getTheme().subheader, customTheme);

	const wrapperClasses = twMerge(
		theme.base,
		className,
		h && theme.heights[h],
		bg && theme.background[bg],
	);

	return (
		<div className={wrapperClasses}
		{...props}>
			{children}
		</div>
	);
};
