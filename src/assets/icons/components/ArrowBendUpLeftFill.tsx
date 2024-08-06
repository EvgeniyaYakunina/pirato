import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendUpLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-up-left-fill_svg__a)"><path fill="#000" d="M14.5 12.5a.5.5 0 0 1-1 0A5.506 5.506 0 0 0 8 7H5.5v2.5a.5.5 0 0 1-.854.354l-3-3a.5.5 0 0 1 0-.708l3-3A.5.5 0 0 1 5.5 3.5V6H8a6.507 6.507 0 0 1 6.5 6.5" /></g><defs><clipPath id="arrow-bend-up-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendUpLeftFill);
const Memo = memo(ForwardRef);
export default Memo;