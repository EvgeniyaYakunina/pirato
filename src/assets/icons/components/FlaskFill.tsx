import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlaskFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flask-fill_svg__a)"><path fill="#000" d="M13.856 12.486 10 6.057V2.5h.5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1H6v3.558l-3.856 6.428A1 1 0 0 0 3 14h10a1 1 0 0 0 .857-1.514zm-5.63-2.682c-.995-.503-1.941-.77-2.827-.8l1.53-2.55A.5.5 0 0 0 7 6.195V2.5h2v3.696c0 .09.024.18.071.257l2.389 3.984c-.748.147-1.817.084-3.234-.633" /></g><defs><clipPath id="flask-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlaskFill);
const Memo = memo(ForwardRef);
export default Memo;