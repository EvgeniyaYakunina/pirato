import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTelevisionFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#television-fill_svg__a)"><path fill="#000" d="M13.5 4H9.207l2.147-2.146a.5.5 0 0 0-.708-.708L8 3.793 5.354 1.146a.5.5 0 0 0-.708.708L6.793 4H2.5a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m0 8.5H10V5h3.5zm-1-5.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" /></g><defs><clipPath id="television-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTelevisionFill);
const Memo = memo(ForwardRef);
export default Memo;