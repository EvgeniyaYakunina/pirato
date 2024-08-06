import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowFatLinesLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-fat-lines-left-fill_svg__a)"><path fill="#000" d="M10 5v6a.5.5 0 0 1-.5.5H8V14a.5.5 0 0 1-.854.354l-6-6a.5.5 0 0 1 0-.708l6-6A.5.5 0 0 1 8 2v2.5h1.5a.5.5 0 0 1 .5.5m3.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5m-2 0a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="arrow-fat-lines-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowFatLinesLeftFill);
const Memo = memo(ForwardRef);
export default Memo;