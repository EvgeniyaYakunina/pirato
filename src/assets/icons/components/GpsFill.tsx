import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGpsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gps-fill_svg__a)"><path fill="#000" d="M15.5 8a.5.5 0 0 1-.5.5h-1.523A5.51 5.51 0 0 1 8.5 13.477V15a.5.5 0 0 1-1 0v-1.523A5.51 5.51 0 0 1 2.523 8.5H1a.5.5 0 0 1 0-1h1.523A5.51 5.51 0 0 1 7.5 2.523V1a.5.5 0 0 1 1 0v1.523A5.51 5.51 0 0 1 13.477 7.5H15a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="gps-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGpsFill);
const Memo = memo(ForwardRef);
export default Memo;