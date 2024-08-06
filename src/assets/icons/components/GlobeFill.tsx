import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGlobeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#globe-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m4.898 4h-2.229a8.5 8.5 0 0 0-1.393-2.85 5.52 5.52 0 0 1 3.622 2.85M13.5 8c0 .507-.07 1.012-.208 1.5h-2.407a9.8 9.8 0 0 0 0-3h2.407c.138.488.208.993.208 1.5M8 2.688A7.2 7.2 0 0 1 9.625 5.5h-3.25A7.2 7.2 0 0 1 8 2.688M6.375 10.5h3.25A7.2 7.2 0 0 1 8 13.313 7.2 7.2 0 0 1 6.375 10.5m-.244-1a8.8 8.8 0 0 1 0-3h3.743a8.8 8.8 0 0 1 0 3zm3.147 3.85a8.5 8.5 0 0 0 1.394-2.85H12.9a5.52 5.52 0 0 1-3.625 2.85z" /></g><defs><clipPath id="globe-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGlobeFill);
const Memo = memo(ForwardRef);
export default Memo;