import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsInSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-in-simple-fill_svg__a)"><path fill="#000" d="M13.354 3.354 11.207 5.5l1.147 1.146A.5.5 0 0 1 12 7.5H9a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .854-.354L10.5 4.793l2.146-2.147a.5.5 0 1 1 .708.708M7 8.5H4a.5.5 0 0 0-.354.854L4.793 10.5l-2.147 2.146a.5.5 0 0 0 .708.707L5.5 11.208l1.146 1.146A.5.5 0 0 0 7.5 12V9a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="arrows-in-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsInSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;