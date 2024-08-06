import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlarmFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#alarm-fill_svg__a)"><path fill="#000" d="m3.854 2.354-2 2a.5.5 0 1 1-.708-.708l2-2a.5.5 0 1 1 .708.708m11 1.292-2-2a.5.5 0 0 0-.708.708l2 2a.5.5 0 1 0 .708-.708M14 8.5a6 6 0 1 1-6-6 6.007 6.007 0 0 1 6 6m-2 0a.5.5 0 0 0-.5-.5h-3V5a.5.5 0 1 0-1 0v3.5A.5.5 0 0 0 8 9h3.5a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="alarm-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlarmFill);
const Memo = memo(ForwardRef);
export default Memo;