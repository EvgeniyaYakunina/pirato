import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTelevisionSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#television-simple-fill_svg__a)"><path fill="#000" d="M13.5 4H9.207l2.147-2.146a.5.5 0 0 0-.708-.708L8 3.793 5.354 1.146a.5.5 0 0 0-.708.708L6.793 4H2.5a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m0 8.5h-11V5h11zm-1-6.25v5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-5A.25.25 0 0 1 3.75 6h8.5a.25.25 0 0 1 .25.25" /></g><defs><clipPath id="television-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTelevisionSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;