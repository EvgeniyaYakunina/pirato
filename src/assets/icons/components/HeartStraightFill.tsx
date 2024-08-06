import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeartStraightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#heart-straight-fill_svg__a)"><path fill="#000" d="M15 6.125a3.6 3.6 0 0 1-1.062 2.562l-5.582 5.664a.5.5 0 0 1-.712 0L2.063 8.687a3.626 3.626 0 1 1 5.125-5.13L8 4.314l.818-.761A3.625 3.625 0 0 1 15 6.124" /></g><defs><clipPath id="heart-straight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHeartStraightFill);
const Memo = memo(ForwardRef);
export default Memo;