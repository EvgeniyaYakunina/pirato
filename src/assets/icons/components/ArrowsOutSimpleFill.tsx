import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsOutSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-out-simple-fill_svg__a)"><path fill="#000" d="M13.5 3v3a.5.5 0 0 1-.854.354L11.5 5.207 9.354 7.354a.5.5 0 1 1-.708-.708L10.793 4.5 9.646 3.354A.5.5 0 0 1 10 2.5h3a.5.5 0 0 1 .5.5M6.646 8.646 4.5 10.793 3.354 9.646A.5.5 0 0 0 2.5 10v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .354-.854L5.207 11.5l2.147-2.146a.5.5 0 1 0-.708-.708" /></g><defs><clipPath id="arrows-out-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsOutSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;