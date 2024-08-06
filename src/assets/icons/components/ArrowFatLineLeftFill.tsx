import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowFatLineLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-fat-line-left-fill_svg__a)"><path fill="#000" d="m7.146 14.354-6-6a.5.5 0 0 1 0-.708l6-6A.5.5 0 0 1 8 2v2.5h3.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H8V14a.5.5 0 0 1-.854.354M13.5 11.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 .5.5" /></g><defs><clipPath id="arrow-fat-line-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowFatLineLeftFill);
const Memo = memo(ForwardRef);
export default Memo;