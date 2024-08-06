import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFunnelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#funnel-fill_svg__a)"><path fill="#000" d="m14.238 4.173-.005.005L10 8.698v3.468a1 1 0 0 1-.446.834l-2 1.334A1 1 0 0 1 6 13.5V8.698l-4.233-4.52-.005-.005A1 1 0 0 1 2.5 2.5h11a1 1 0 0 1 .74 1.673z" /></g><defs><clipPath id="funnel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFunnelFill);
const Memo = memo(ForwardRef);
export default Memo;