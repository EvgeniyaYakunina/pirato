import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFireFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fire-fill_svg__a)"><path fill="#000" d="M8.961 1.116a.5.5 0 0 0-.79.213L6.798 5.104l-1.51-1.463a.5.5 0 0 0-.746.056C3.187 5.47 2.5 7.255 2.5 9a5.5 5.5 0 0 0 11 0c0-3.716-3.174-6.75-4.539-7.884m2.532 8.468a3.6 3.6 0 0 1-2.91 2.909.5.5 0 1 1-.166-.986c1.036-.175 1.915-1.053 2.09-2.09a.5.5 0 0 1 .987.167" /></g><defs><clipPath id="fire-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFireFill);
const Memo = memo(ForwardRef);
export default Memo;