import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGreaterThanOrEqualFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#greater-than-or-equal-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.5 9.5H5a.5.5 0 0 1 0-1h6.5a.5.5 0 0 1 0 1m.147-4.022-6.5 2a.5.5 0 1 1-.294-.956L9.8 7 4.853 5.478a.5.5 0 0 1 .294-.956l6.5 2a.5.5 0 0 1 0 .956" /></g><defs><clipPath id="greater-than-or-equal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGreaterThanOrEqualFill);
const Memo = memo(ForwardRef);
export default Memo;