import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShieldStarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shield-star-fill_svg__a)"><path fill="#000" d="M13 2.5H3a1 1 0 0 0-1 1V7c0 3.295 1.595 5.292 2.933 6.387 1.441 1.179 2.875 1.58 2.938 1.595a.5.5 0 0 0 .262 0c.063-.016 1.495-.416 2.938-1.595C12.405 12.292 14 10.295 14 7V3.5a1 1 0 0 0-1-1m-2.312 5.464-1.895.758L9.9 10.2a.5.5 0 0 1-.8.6L8 9.333 6.9 10.8a.5.5 0 1 1-.8-.6l1.109-1.478-1.896-.758a.5.5 0 0 1 .375-.928L7.5 7.76V6a.5.5 0 1 1 1 0v1.761l1.813-.725a.5.5 0 0 1 .374.928" /></g><defs><clipPath id="shield-star-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShieldStarFill);
const Memo = memo(ForwardRef);
export default Memo;