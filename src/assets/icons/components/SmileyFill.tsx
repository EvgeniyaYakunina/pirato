import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSmileyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#smiley-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M5.75 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m5.182 3.75C10.29 10.862 9.221 11.5 8 11.5s-2.29-.637-2.932-1.75a.5.5 0 1 1 .865-.5c.466.807 1.2 1.25 2.067 1.25s1.6-.444 2.068-1.25a.5.5 0 1 1 .864.5M10.25 7.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="smiley-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSmileyFill);
const Memo = memo(ForwardRef);
export default Memo;