import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgProhibitInsetFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#prohibit-inset-fill_svg__a)"><path fill="#000" fillRule="evenodd" d="M4.389 2.595A6.5 6.5 0 0 1 8 1.5 6.507 6.507 0 0 1 14.5 8 6.5 6.5 0 1 1 4.389 2.595M5.459 7a1 1 0 0 0 0 2h5.082a1 1 0 1 0 0-2z" clipRule="evenodd" /></g><defs><clipPath id="prohibit-inset-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgProhibitInsetFill);
const Memo = memo(ForwardRef);
export default Memo;