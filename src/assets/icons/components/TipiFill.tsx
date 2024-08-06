import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTipiFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tipi-fill_svg__a)"><path fill="#000" d="M14.921 13.23 8.594 3.345 9.92 1.269A.5.5 0 0 0 9.08.731L8 2.416 6.921.73a.5.5 0 0 0-.842.538l1.327 2.077L1.08 13.23A.5.5 0 0 0 1.5 14h13a.5.5 0 0 0 .421-.77M11.796 13 8.421 7.73a.5.5 0 0 0-.842 0L4.206 13H2.414L8 4.27 13.586 13z" /></g><defs><clipPath id="tipi-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTipiFill);
const Memo = memo(ForwardRef);
export default Memo;