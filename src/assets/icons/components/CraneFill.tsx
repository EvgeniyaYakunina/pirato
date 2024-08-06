import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCraneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#crane-fill_svg__a)"><path fill="#000" d="M14.258 1.071a.5.5 0 0 0-.493-.012L6.375 5H2a1 1 0 0 0-1 1v6.5a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-.005-.066v-.015a1 1 0 0 0-.014-.07L7.096 5.75 13.5 2.333V10h-1v-.5a.5.5 0 0 0-1 0v.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1.5a.5.5 0 0 0-.242-.429M3 6v4H2V6zm-1 6.5V11h5.5v1.5z" /></g><defs><clipPath id="crane-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCraneFill);
const Memo = memo(ForwardRef);
export default Memo;