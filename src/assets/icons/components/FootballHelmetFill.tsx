import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFootballHelmetFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#football-helmet-fill_svg__a)"><path fill="#000" d="M13.5 10h-3.137l-.444-1.5H13.5A.5.5 0 0 0 14 8v-.25A6.25 6.25 0 0 0 7.661 1.5C4.265 1.548 1.5 4.35 1.5 7.75a6.25 6.25 0 0 0 2.726 5.163.5.5 0 0 0 .283.087H7.5a1 1 0 0 0 .976-1.217l-.01-.034-.222-.75h1.371l.674 2.284a1.01 1.01 0 0 0 .961.717h2.25a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-8.25 1a.75.75 0 1 1 0-1.498.75.75 0 0 1 0 1.498m2.698-1L7.5 8.5h1.375l.443 1.5zm5.552 3h-2.25l-.591-2H13.5z" /></g><defs><clipPath id="football-helmet-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFootballHelmetFill);
const Memo = memo(ForwardRef);
export default Memo;