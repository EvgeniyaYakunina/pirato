import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendDoubleUpRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-double-up-right-fill_svg__a)"><path fill="#000" d="m14.354 6.854-3 3a.5.5 0 0 1-.708-.708L13.293 6.5l-2.647-2.646a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708m-3-.708-3-3A.5.5 0 0 0 7.5 3.5v2.519a6.51 6.51 0 0 0-6 6.48.5.5 0 0 0 1 0 5.507 5.507 0 0 1 5-5.476V9.5a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="arrow-bend-double-up-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendDoubleUpRightFill);
const Memo = memo(ForwardRef);
export default Memo;