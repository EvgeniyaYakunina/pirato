import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBagSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bag-simple-fill_svg__a)"><path fill="#000" d="M13.5 4H11a3 3 0 0 0-6 0H2.5a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M8 2a2 2 0 0 1 2 2H6a2 2 0 0 1 2-2" /></g><defs><clipPath id="bag-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBagSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;