import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonArmsSpreadFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#person-arms-spread-fill_svg__a)"><path fill="#000" d="M6.25 2.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m7.975 3.536A.98.98 0 0 0 13.25 5H2.75a1 1 0 0 0-.419 1.908h.004l3.368 1.483-1.37 5.207A1 1 0 0 0 5.25 15a1 1 0 0 0 .903-.566L8 11.25l1.849 3.188a1 1 0 0 0 1.817-.835l-1.37-5.206 3.375-1.485a.98.98 0 0 0 .554-1.126" /></g><defs><clipPath id="person-arms-spread-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonArmsSpreadFill);
const Memo = memo(ForwardRef);
export default Memo;