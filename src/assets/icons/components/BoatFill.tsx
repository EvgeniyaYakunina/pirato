import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBoatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#boat-fill_svg__a)"><path fill="#000" d="M13.816 6.912 13 6.639V3.5a1 1 0 0 0-1-1H8.5v-1a.5.5 0 1 0-1 0v1H4a1 1 0 0 0-1 1v3.14l-.816.272a1 1 0 0 0-.684.949V9.5c0 3.846 6.118 5.42 6.379 5.485a.5.5 0 0 0 .242 0c.26-.065 6.379-1.639 6.379-5.485V7.86a1 1 0 0 0-.684-.948M8.5 10.5a.5.5 0 0 1-1 0V6.554a.5.5 0 0 1 1 0zM12 6.306l-3.842-1.28a.5.5 0 0 0-.316 0L4 6.306V3.5h8z" /></g><defs><clipPath id="boat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBoatFill);
const Memo = memo(ForwardRef);
export default Memo;