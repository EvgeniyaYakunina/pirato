import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLeafFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#leaf-fill_svg__a)"><path fill="#000" d="M13.966 2.504a.5.5 0 0 0-.47-.47C8.738 1.755 4.926 3.188 3.3 5.875a5.44 5.44 0 0 0-.797 3.063c.028.688.168 1.368.415 2.012a.25.25 0 0 0 .413.09l5.313-5.394a.5.5 0 1 1 .707.707l-5.806 5.893-.886.887a.51.51 0 0 0-.038.694.5.5 0 0 0 .732.027l1.05-1.05c.883.428 1.775.661 2.66.692q.104.004.207.004a5.43 5.43 0 0 0 2.854-.801c2.688-1.625 4.12-5.436 3.84-10.195" /></g><defs><clipPath id="leaf-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLeafFill);
const Memo = memo(ForwardRef);
export default Memo;