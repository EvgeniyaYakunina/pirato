import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-plus-fill_svg__a)"><path fill="#000" d="M16 8.5a.5.5 0 0 1-.5.5h-1v1a.5.5 0 1 1-1 0V9h-1a.5.5 0 0 1 0-1h1V7a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 .5.5M9 9.855a4.25 4.25 0 1 0-4.494 0c-1.29.423-2.452 1.212-3.385 2.323A.5.5 0 0 0 1.5 13H12a.5.5 0 0 0 .383-.822c-.934-1.111-2.096-1.9-3.383-2.323" /></g><defs><clipPath id="user-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserPlusFill);
const Memo = memo(ForwardRef);
export default Memo;