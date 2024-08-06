import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMoonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#moon-fill_svg__a)"><path fill="#000" d="M14.721 9.388A6.501 6.501 0 1 1 3.305 3.592 6.55 6.55 0 0 1 6.612 1.28a.5.5 0 0 1 .625.625 5.505 5.505 0 0 0 6.862 6.862.5.5 0 0 1 .625.625z" /></g><defs><clipPath id="moon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMoonFill);
const Memo = memo(ForwardRef);
export default Memo;