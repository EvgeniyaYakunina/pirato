import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrafficSignFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#traffic-sign-fill_svg__a)"><path fill="#000" d="M15.197 7.268 8.732.803a1.035 1.035 0 0 0-1.464 0L.803 7.268a1.035 1.035 0 0 0 0 1.464l6.465 6.465a1.035 1.035 0 0 0 1.464 0l6.465-6.465a1.035 1.035 0 0 0 0-1.464m-4.343.586-1.5 1.5a.5.5 0 1 1-.708-.708L9.293 8H7a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V9a2 2 0 0 1 2-2h2.293l-.647-.646a.5.5 0 1 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="traffic-sign-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrafficSignFill);
const Memo = memo(ForwardRef);
export default Memo;