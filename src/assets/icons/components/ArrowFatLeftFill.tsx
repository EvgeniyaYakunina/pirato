import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowFatLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-fat-left-fill_svg__a)"><path fill="#000" d="M14 5.5v5a1 1 0 0 1-1 1H8V14a.5.5 0 0 1-.854.354l-6-6a.5.5 0 0 1 0-.708l6-6A.5.5 0 0 1 8 2v2.5h5a1 1 0 0 1 1 1" /></g><defs><clipPath id="arrow-fat-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowFatLeftFill);
const Memo = memo(ForwardRef);
export default Memo;