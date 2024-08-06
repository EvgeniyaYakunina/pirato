import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#person-simple-fill_svg__a)"><path fill="#000" d="M5.993 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0m8.265 4.571C14.15 7.507 11.597 6 8 6S1.85 7.507 1.743 7.571a.5.5 0 0 0 .515.858C2.28 8.415 4.439 7.14 7.5 7.01v2.302l-3.875 4.355a.501.501 0 0 0 .75.664L8 10.25l3.625 4.08a.5.5 0 0 0 .75-.664L8.5 9.313V7.012c3.048.13 5.22 1.404 5.243 1.417a.5.5 0 1 0 .515-.858" /></g><defs><clipPath id="person-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;