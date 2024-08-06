import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTruckTrailerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#truck-trailer-fill_svg__a)"><path fill="#000" d="M14 6.05V6a3.504 3.504 0 0 0-3.5-3.5H10a1 1 0 0 0-1 1V11H8V4.5a.5.5 0 0 0-.5-.5H1a1 1 0 0 0-1 1v6.5a2 2 0 0 0 3.5 1.32A2 2 0 0 0 6.938 12h5.125A2 2 0 0 0 16 11.5v-3a2.504 2.504 0 0 0-2-2.45M2 12.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m9 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" /></g><defs><clipPath id="truck-trailer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTruckTrailerFill);
const Memo = memo(ForwardRef);
export default Memo;