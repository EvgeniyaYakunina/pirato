import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSkipForwardFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#skip-forward-fill_svg__a)"><path fill="#000" d="M13 2.5v11a.5.5 0 0 1-1 0V9.173l-7.473 4.674A.996.996 0 0 1 3 13.007V2.994a.997.997 0 0 1 1.527-.84L12 6.827V2.5a.5.5 0 0 1 1 0" /></g><defs><clipPath id="skip-forward-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSkipForwardFill);
const Memo = memo(ForwardRef);
export default Memo;