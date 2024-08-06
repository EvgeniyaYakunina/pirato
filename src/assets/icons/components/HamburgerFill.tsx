import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHamburgerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hamburger-fill_svg__a)"><path fill="#000" d="M2.224 6.129a1 1 0 0 1-.202-.84C2.486 3.094 5 1.5 8 1.5s5.514 1.594 5.978 3.789a1 1 0 0 1-.982 1.211H3.004a1 1 0 0 1-.78-.371M14.329 9.53l-2.57.938-2.322-.932a.5.5 0 0 0-.37 0l-2.313.925-2.316-.925a.5.5 0 0 0-.357-.006l-2.75 1a.5.5 0 0 0 .342.938l.827-.3v.332A2.5 2.5 0 0 0 5 14h6a2.5 2.5 0 0 0 2.5-2.5v-.604l1.17-.426a.5.5 0 1 0-.341-.937zM1.5 8.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 1 0 0 1" /></g><defs><clipPath id="hamburger-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHamburgerFill);
const Memo = memo(ForwardRef);
export default Memo;