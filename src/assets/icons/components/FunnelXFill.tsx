import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFunnelXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#funnel-x-fill_svg__a)"><path fill="#000" d="M14.233 4.178 10 8.698v3.468a1 1 0 0 1-.446.834l-2 1.334A1 1 0 0 1 6 13.5V8.698l-4.233-4.52-.005-.005A1 1 0 0 1 2.5 2.5h11a1 1 0 0 1 .74 1.673zM14.207 12l1.147-1.146a.5.5 0 1 0-.708-.708L13.5 11.293l-1.146-1.147a.5.5 0 1 0-.708.708L12.793 12l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147 1.146 1.147a.5.5 0 0 0 .708-.708z" /></g><defs><clipPath id="funnel-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFunnelXFill);
const Memo = memo(ForwardRef);
export default Memo;