import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWaveSawtoothFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wave-sawtooth-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-.723 5.916-4.5 3A.5.5 0 0 1 7.5 11V5.938L3.778 8.416a.5.5 0 0 1-.555-.832l4.5-3A.5.5 0 0 1 8.5 5v5.066l3.723-2.482a.5.5 0 1 1 .554.832" /></g><defs><clipPath id="wave-sawtooth-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWaveSawtoothFill);
const Memo = memo(ForwardRef);
export default Memo;