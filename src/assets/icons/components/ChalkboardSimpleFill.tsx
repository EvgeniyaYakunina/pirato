import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChalkboardSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chalkboard-simple-fill_svg__a)"><path fill="#000" d="M15 12h-.5V3.5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1V12H1a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1m-1.5 0H9v-1a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="chalkboard-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChalkboardSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;