import styled, { css } from 'styled-components';
import COLORS from './colors';
import { CoinbaseMono, CoinbaseSans, CoinbaseText } from './fonts';

interface TextProps {
  $color?: string;
  $fontWeight?: number | string;
  $align?: 'left' | 'right' | 'center' | 'end' | 'justify' | 'start';
}

interface LocationTextProps {
  selected?: boolean;
  $color?: string;
  $fontWeight?: number | string;
  $align?: 'left' | 'right' | 'center' | 'end' | 'justify' | 'start';
}

const TextStylesCoinbaseMono = css<TextProps>`
  ${CoinbaseMono.style}
  font-weight: ${({ $fontWeight }) => $fontWeight || '700'};
  color: ${({ $color }) => $color || 'black'};
  text-align: ${({ $align }) => $align};
  margin: 0;
`;

const TextStylesCoinbaseSans = css<TextProps>`
  ${CoinbaseSans.style}
  font-weight: ${({ $fontWeight }) => $fontWeight || '700'};
  color: ${({ $color }) => $color || 'black'};
  text-align: ${({ $align }) => $align};
  margin: 0;
`;

const TextStylesCoinbaseText = css<TextProps>`
  ${CoinbaseText.style}
  font-weight: ${({ $fontWeight }) => $fontWeight || '700'};
  color: ${({ $color }) => $color || 'black'};
  text-align: ${({ $align }) => $align};
  margin: 0;
`;

export const Heading1 = styled.h1<TextProps>`
  ${TextStylesCoinbaseMono}
  font-weight: 400;
  color: ${COLORS.navy};
  font-size: 1.375rem;
  font-style: normal;
  line-height: normal;
  overflow-wrap: break-word;
`;

export const Heading2 = styled.h2<TextProps>`
  ${TextStylesCoinbaseSans}
  font-size: 0.9375rem;
  color: ${COLORS.navy};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubHeading1 = styled.h2<TextProps>`
  ${TextStylesCoinbaseSans}
  font-size: 0.875rem;
  color: ${COLORS.navy};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubHeading2 = styled.h2<TextProps>`
  ${TextStylesCoinbaseMono}
  font-size: 0.7rem;
  color: ${COLORS.navy85};
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const BodyText1 = styled.p<TextProps>`
  ${TextStylesCoinbaseSans}
  color: ${COLORS.navy85};
  font-size: 0.688rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 16.5px */
  letter-spacing: 0.25px;
  overflow-wrap: break-word;
  width: 100%;
`;

export const BodyText2 = styled.p<TextProps>`
  ${TextStylesCoinbaseSans}
  color: ${COLORS.navy};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
  letter-spacing: 0.25px;
`;

export const AccentText1 = styled.h4<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 2rem;
  font-style: normal;
  color: ${COLORS.navy85};
  font-weight: 400;
  line-height: 2rem;
`;

export const AccentText2 = styled.h4<TextProps>`
  ${TextStylesCoinbaseMono}
  color: ${COLORS.navy};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TagText1 = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${({ $color }) => $color || COLORS.navy85};
`;

export const TagText2 = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  color: ${COLORS.electricBlue};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;
`;

export const MarkerInfoWindowText1 = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  color: ${COLORS.navy75};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 300;
  line-height: 0.77;
  padding-left: 0.4rem;
`;

export const SortByText = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  color: ${COLORS.navy75};
  font-size: 0.688rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.22px;
`;

export const FilterHeadingUnused = styled.h3<TextProps>`
  ${TextStylesCoinbaseText}
  color: ${COLORS.navy85};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FilterHeadingInUse = styled.h3<TextProps>`
  ${TextStylesCoinbaseText}
  color: ${COLORS.electricBlue};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FilterCategoryLabel = styled.h3<TextProps>`
  ${TextStylesCoinbaseMono}
  color: ${COLORS.navy};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  opacity: 0.5;
  line-height: normal;
  margin-top: 1rem;
`;

export const FilterCategoryText1 = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  color: ${COLORS.navy75};
`;

export const FilterLocationText = styled.h3<TextProps>`
  ${TextStylesCoinbaseText}
  color: ${COLORS.navy85};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 0.0625rem;
`;

export const MinMaxTextUnused = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  color: ${COLORS.navy};
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MinMaxTextInUse = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  color: ${COLORS.electricBlue};
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SearchBarTextUnused = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
  color: ${COLORS.navy};
`;

export const SearchBarTextInUse = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${COLORS.electricBlue};
`;

export const FilterNameText = styled.p<TextProps>`
  ${TextStylesCoinbaseSans}
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgba(46, 58, 89, 0.85);
`;

export const FilterOptionsText = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ $color }) => $color || COLORS.navy};
`;

export const ApplyFiltersText = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${COLORS.white};
`;

export const ClearFiltersText = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${COLORS.electricBlue};
`;

export const LocationCategoryText = styled.p<LocationTextProps>`
  ${TextStylesCoinbaseText}
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 250;
  line-height: normal;
  color: ${({ selected }) => (selected ? COLORS.electricBlue : COLORS.navy)};
`;

export const LocationOptionText = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 250;
  line-height: normal;
  color: ${COLORS.navy};
  padding-right: 0.46875rem;
`;

export const PanelTitle = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${COLORS.electricBlue};
`;

export const SearchInput = styled.input<TextProps>`
  ${TextStylesCoinbaseText}
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
  color: ${COLORS.navy50};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const OptionText = styled.p<TextProps>`
  ${TextStylesCoinbaseText}
  color: #4a4a4a;
  font-size: 0.95rem;
`;

export const FilterTagText = styled.p<TextProps>`
  ${TextStylesCoinbaseSans}
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${COLORS.electricBlue};
`;

/*

export const FilterFont = styled.h1`
  font-family: 'Coinbase Text', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FilterCategoryFont = styled.h1`
  font-family: 'Coinbase Text', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const LocationFilterFont = styled.h1`
  font-family: 'Coinbase Text', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ApplyFont = styled.h1`
  font-family: 'Coinbase Text', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AverageOutputFont = styled.h1`
  font-family: 'Coinbase Text', sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const OutputNumbersFont = styled.h1`
  font-family: 'Coinbase Text', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 250;
  line-height: normal;
`;

export const ProjectTitleFont = styled.h1`
  font-family: 'Coinbase Mono', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProjectOwnerFont = styled.h1`
  font-family: 'Coinbase Sans', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;

export const AgreggatorFont = styled.h1`
  font-family: 'SansPlomb_TRIAL', sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
*/
