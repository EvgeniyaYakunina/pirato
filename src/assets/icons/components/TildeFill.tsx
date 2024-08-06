import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTildeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tilde-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-.625 6.229c-.824.937-1.584 1.268-2.273 1.268-.934 0-1.738-.6-2.402-1.096-1.2-.897-1.993-1.489-3.325.03a.5.5 0 1 1-.75-.66C5.565 5.558 7.146 6.738 8.3 7.6c1.2.897 1.993 1.489 3.325-.03a.5.5 0 1 1 .75.66" /></g><defs><clipPath id="tilde-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTildeFill);
const Memo = memo(ForwardRef);
export default Memo;