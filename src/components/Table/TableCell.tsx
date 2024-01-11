'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTableBodyContext } from './TableBodyContext';
import { FlowbiteColors } from '../Flowbite';

export interface FlowbiteTableCellTheme {
  base: string;
  textHightlight: FlowbiteColors;
}

export interface TableCellProps extends ComponentProps<'td'> {
  theme?: DeepPartial<FlowbiteTableCellTheme>;
}

export const TableCell: FC<TableCellProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: bodyTheme } = useTableBodyContext();

  const theme = mergeDeep(bodyTheme.cell, customTheme);

  return (
    <td className={twMerge(theme.base, className)} {...props}>
      {children}
    </td>
  );
};
