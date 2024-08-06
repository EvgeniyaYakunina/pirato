import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgProhibitFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#prohibit-fill_svg__a)"><path fill="#000" d="M12.5 8c0 1.02-.347 2.01-.986 2.807l-6.32-6.32A4.497 4.497 0 0 1 12.5 8m-9 0a4.497 4.497 0 0 0 7.307 3.514l-6.32-6.32A4.48 4.48 0 0 0 3.5 8m11.25 0A6.75 6.75 0 1 1 8 1.25 6.76 6.76 0 0 1 14.75 8M13.5 8A5.5 5.5 0 1 0 8 13.5 5.506 5.506 0 0 0 13.5 8" /></g><defs><clipPath id="prohibit-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgProhibitFill);
const Memo = memo(ForwardRef);
export default Memo;