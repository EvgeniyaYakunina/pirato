import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLessThanOrEqualFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#less-than-or-equal-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 9.5H4.5a.5.5 0 0 1 0-1H11a.5.5 0 0 1 0 1m.147-3.478a.5.5 0 1 1-.294.956l-6.5-2a.5.5 0 0 1 0-.956l6.5-2a.5.5 0 0 1 .294.956L6.2 6.5z" /></g><defs><clipPath id="less-than-or-equal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLessThanOrEqualFill);
const Memo = memo(ForwardRef);
export default Memo;