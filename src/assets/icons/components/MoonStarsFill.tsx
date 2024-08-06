import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMoonStarsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#moon-stars-fill_svg__a)"><path fill="#000" d="M15 6a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 .5.5M9 3.5h.5V4a.5.5 0 1 0 1 0v-.5h.5a.5.5 0 0 0 0-1h-.5V2a.5.5 0 0 0-1 0v.5H9a.5.5 0 0 0 0 1m4.071 5.896a5.504 5.504 0 0 1-6.467-6.467.5.5 0 0 0-.662-.566 6 6 0 1 0 7.695 7.695.5.5 0 0 0-.566-.662" /></g><defs><clipPath id="moon-stars-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMoonStarsFill);
const Memo = memo(ForwardRef);
export default Memo;