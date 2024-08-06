import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserListFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-list-fill_svg__a)"><path fill="#000" d="M9.5 5a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 0 1H10a.5.5 0 0 1-.5-.5m6 2.5H10a.5.5 0 0 0 0 1h5.5a.5.5 0 0 0 0-1m0 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1M6.83 8.875a3 3 0 1 0-3.66 0c-1.29.546-2.305 1.644-2.654 3A.5.5 0 0 0 1 12.5h8a.5.5 0 0 0 .484-.625c-.349-1.357-1.365-2.455-2.653-3" /></g><defs><clipPath id="user-list-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserListFill);
const Memo = memo(ForwardRef);
export default Memo;