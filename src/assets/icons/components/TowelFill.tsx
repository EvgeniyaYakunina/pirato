import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTowelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#towel-fill_svg__a)"><path fill="#000" d="M14 3v6.5a.499.499 0 0 1-.868.334.5.5 0 0 1-.132-.35V3a.499.499 0 0 0-.869-.333.5.5 0 0 0-.131.35v8.233a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25V3a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 14 3m-2.25 9.5h-8.5a.25.25 0 0 0-.25.25v.75a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-.75a.25.25 0 0 0-.25-.25" /></g><defs><clipPath id="towel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTowelFill);
const Memo = memo(ForwardRef);
export default Memo;