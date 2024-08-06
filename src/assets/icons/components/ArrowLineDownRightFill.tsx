import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLineDownRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-line-down-right-fill_svg__a)"><path fill="#000" d="M14 2.5a.5.5 0 0 1-.5.5h-11a.5.5 0 1 1 0-1h11a.5.5 0 0 1 .5.5m-1.809 3.538a.5.5 0 0 0-.545.108L9 8.793 5.354 5.146a.5.5 0 1 0-.708.708L8.293 9.5l-2.647 2.646A.5.5 0 0 0 6 13h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.309-.462" /></g><defs><clipPath id="arrow-line-down-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowLineDownRightFill);
const Memo = memo(ForwardRef);
export default Memo;