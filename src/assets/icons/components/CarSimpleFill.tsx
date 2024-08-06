import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCarSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#car-simple-fill_svg__a)"><path fill="#000" d="M15 6.5h-.675l-1.736-3.906A1 1 0 0 0 11.675 2h-7.35a1 1 0 0 0-.914.594L1.675 6.5H1a.5.5 0 0 0 0 1h.5v5a1 1 0 0 0 1 1H4a1 1 0 0 0 1-1V12h6v.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-5h.5a.5.5 0 0 0 0-1m-12.23 0L4.324 3h7.35l1.556 3.5z" /></g><defs><clipPath id="car-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCarSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;