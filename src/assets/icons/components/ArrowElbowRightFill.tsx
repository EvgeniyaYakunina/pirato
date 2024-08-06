import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-right-fill_svg__a)"><path fill="#000" d="M15 5v4.5a.5.5 0 0 1-.854.354L12.25 7.957l-4.396 4.397a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 .708-.708L7.5 11.293l4.043-4.043-1.897-1.896A.5.5 0 0 1 10 4.5h4.5a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="arrow-elbow-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowRightFill);
const Memo = memo(ForwardRef);
export default Memo;