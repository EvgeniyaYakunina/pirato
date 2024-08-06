import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgColumnsPlusLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#columns-plus-left-fill_svg__a)"><path fill="#000" d="M9 3v10a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1H8a1 1 0 0 1 1 1m3.5-1H11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4 7.5H3v-1a.5.5 0 1 0-1 0v1H1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1" /></g><defs><clipPath id="columns-plus-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgColumnsPlusLeftFill);
const Memo = memo(ForwardRef);
export default Memo;