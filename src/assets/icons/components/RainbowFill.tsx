import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRainbowFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#rainbow-fill_svg__a)"><path fill="#000" d="M8 3a7.51 7.51 0 0 0-7.5 7.5v1a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-1A7.51 7.51 0 0 0 8 3m2 8a.5.5 0 0 1-.5-.5 1.5 1.5 0 0 0-3 0 .5.5 0 0 1-1 0 2.5 2.5 0 1 1 5 0 .5.5 0 0 1-.5.5m2 0a.5.5 0 0 1-.5-.5 3.5 3.5 0 1 0-7 0 .5.5 0 0 1-1 0 4.5 4.5 0 0 1 9 0 .5.5 0 0 1-.5.5m2 0a.5.5 0 0 1-.5-.5 5.5 5.5 0 0 0-11 0 .5.5 0 0 1-1 0 6.5 6.5 0 1 1 13 0 .5.5 0 0 1-.5.5" /></g><defs><clipPath id="rainbow-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRainbowFill);
const Memo = memo(ForwardRef);
export default Memo;