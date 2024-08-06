import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSupersetProperOfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#superset-proper-of-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 12H5a.5.5 0 0 1 0-1h3a3 3 0 0 0 0-6H5a.5.5 0 1 1 0-1h3a4 4 0 1 1 0 8" /></g><defs><clipPath id="superset-proper-of-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSupersetProperOfFill);
const Memo = memo(ForwardRef);
export default Memo;