import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSupersetOfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#superset-of-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 9.5H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1m-2-2H5a.5.5 0 1 1 0-1h4a1.5 1.5 0 0 0 0-3H5a.5.5 0 1 1 0-1h4a2.5 2.5 0 0 1 0 5" /></g><defs><clipPath id="superset-of-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSupersetOfFill);
const Memo = memo(ForwardRef);
export default Memo;