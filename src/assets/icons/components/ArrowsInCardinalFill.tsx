import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsInCardinalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-in-cardinal-fill_svg__a)"><path fill="#000" d="M5.646 4.354A.5.5 0 0 1 6 3.5h1.5v-2a.5.5 0 1 1 1 0v2H10a.5.5 0 0 1 .354.854l-2 2a.5.5 0 0 1-.708 0zm2.708 5.292a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 6 12.5h1.5v2a.5.5 0 0 0 1 0v-2H10a.5.5 0 0 0 .354-.854zM14.5 7.5h-2V6a.5.5 0 0 0-.854-.354l-2 2a.5.5 0 0 0 0 .708l2 2A.501.501 0 0 0 12.5 10V8.5h2a.5.5 0 0 0 0-1m-8.146.146-2-2A.5.5 0 0 0 3.5 6v1.5h-2a.5.5 0 1 0 0 1h2V10a.5.5 0 0 0 .854.354l2-2a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="arrows-in-cardinal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsInCardinalFill);
const Memo = memo(ForwardRef);
export default Memo;