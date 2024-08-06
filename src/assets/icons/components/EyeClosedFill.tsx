import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEyeClosedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#eye-closed-fill_svg__a)"><path fill="#000" d="M14.434 10.25a.501.501 0 0 1-.868.5l-1.188-2.075c-.69.467-1.45.818-2.253 1.041l.367 2.202a.499.499 0 1 1-.985.164l-.36-2.161a8.3 8.3 0 0 1-2.293 0l-.36 2.16a.5.5 0 1 1-.988-.163l.369-2.202a7.7 7.7 0 0 1-2.254-1.043L2.437 10.75a.502.502 0 0 1-.87-.5l1.25-2.187a9.6 9.6 0 0 1-1.207-1.25.5.5 0 0 1 0-.63C2.785 4.734 4.847 3 8 3s5.215 1.733 6.389 3.188a.5.5 0 0 1 0 .628q-.546.68-1.207 1.25z" /></g><defs><clipPath id="eye-closed-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEyeClosedFill);
const Memo = memo(ForwardRef);
export default Memo;