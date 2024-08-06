import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextColumnsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-columns-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-6.5 9H3.5a.5.5 0 0 1 0-1H7a.5.5 0 0 1 0 1m0-2H3.5a.5.5 0 1 1 0-1H7a.5.5 0 1 1 0 1m0-2H3.5a.5.5 0 1 1 0-1H7a.5.5 0 1 1 0 1m0-2H3.5a.5.5 0 1 1 0-1H7a.5.5 0 1 1 0 1m5.5 6H9a.5.5 0 0 1 0-1h3.5a.5.5 0 0 1 0 1m0-2H9a.5.5 0 1 1 0-1h3.5a.5.5 0 0 1 0 1m0-2H9a.5.5 0 1 1 0-1h3.5a.5.5 0 0 1 0 1m0-2H9a.5.5 0 1 1 0-1h3.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="text-columns-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextColumnsFill);
const Memo = memo(ForwardRef);
export default Memo;