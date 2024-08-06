import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeartStraightBreakFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#heart-straight-break-fill_svg__a)"><path fill="#000" d="M7.08 3.457a3.626 3.626 0 0 0-5.022 5.23l5.586 5.667a.5.5 0 0 0 .712 0l5.582-5.667a3.626 3.626 0 0 0-5.126-5.13L7.289 4.993l1.65 1.65a.5.5 0 0 1 0 .708L7.643 8.645a.5.5 0 1 1-.707-.708L7.876 7 6.219 5.339a.5.5 0 0 1 .013-.721l.847-.799a.25.25 0 0 0 0-.362z" /></g><defs><clipPath id="heart-straight-break-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHeartStraightBreakFill);
const Memo = memo(ForwardRef);
export default Memo;