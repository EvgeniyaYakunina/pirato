import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPathFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#path-fill_svg__a)"><path fill="#000" d="M14.25 12.5a1.75 1.75 0 0 1-3.427.5H4.5a3 3 0 0 1 0-6h6a1.5 1.5 0 0 0 0-3h-6a.5.5 0 1 1 0-1h6a2.5 2.5 0 0 1 0 5h-6a2 2 0 1 0 0 4h6.323a1.75 1.75 0 0 1 3.427.5" /></g><defs><clipPath id="path-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPathFill);
const Memo = memo(ForwardRef);
export default Memo;