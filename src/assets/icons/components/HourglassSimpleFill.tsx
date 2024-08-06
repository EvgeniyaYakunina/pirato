import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHourglassSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hourglass-simple-fill_svg__a)"><path fill="#000" d="M13.207 12.293A1 1 0 0 1 12.5 14h-9a1 1 0 0 1-.7-1.715L7.278 8 2.8 3.715l-.008-.008A1 1 0 0 1 3.5 2h9a1 1 0 0 1 .7 1.715L8.722 8l4.476 4.285z" /></g><defs><clipPath id="hourglass-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHourglassSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;