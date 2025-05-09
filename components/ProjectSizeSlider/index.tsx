import { useEffect } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
import COLORS from '@/styles/colors';
import './styles.css';
import { ProjectSizeType } from '@/types/schema';

interface ProjectSizeSliderProps {
  setMinDefault: (value: number) => void;
  setMaxDefault: (value: number) => void;
  minSize: number;
  minDefault: number;
  maxDefault: number;
  minBound: number;
  maxBound: number;
  setSelectedSize: (args: { value: ProjectSizeType; isTemp: boolean }) => void;
}

export default function ProjectSizeSlider({
  setMinDefault,
  setMaxDefault,
  minSize,
  minDefault,
  maxDefault,
  minBound,
  maxBound,
  setSelectedSize,
}: ProjectSizeSliderProps) {
  useEffect(() => {
    const value = {
      min: Math.max(0, minDefault),
      max: Math.max(minSize, maxDefault),
    };
    setSelectedSize({ value: value, isTemp: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minDefault, maxDefault]);

  return (
    <MultiRangeSlider
      onInput={e => {
        setMinDefault(e.minValue);
        setMaxDefault(e.maxValue);
      }}
      onChange={e => {
        setMinDefault(e.minValue);
        setMaxDefault(e.maxValue);
      }}
      label={false}
      ruler={false}
      style={{ border: 'none', boxShadow: 'none', padding: '0 0 10px 0' }}
      barInnerColor={COLORS.electricBlue}
      barLeftColor={COLORS.electricBlue40}
      barRightColor={COLORS.electricBlue40}
      min={minBound}
      max={maxBound}
      minValue={minDefault}
      maxValue={maxDefault}
      canMinMaxValueSame={true}
    ></MultiRangeSlider>
  );
}
