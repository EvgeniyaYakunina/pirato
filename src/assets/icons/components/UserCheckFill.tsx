import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserCheckFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-check-fill_svg__a)"><path fill="#000" d="m15.854 8.354-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708M9 9.855a4.25 4.25 0 1 0-4.494 0c-1.29.423-2.452 1.212-3.385 2.323A.5.5 0 0 0 1.5 13H12a.5.5 0 0 0 .383-.822c-.934-1.111-2.096-1.9-3.383-2.323" /></g><defs><clipPath id="user-check-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserCheckFill);
const Memo = memo(ForwardRef);
export default Memo;