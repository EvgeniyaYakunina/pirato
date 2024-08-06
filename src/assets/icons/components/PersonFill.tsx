import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#person-fill_svg__a)"><path fill="#000" d="M6.25 2.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m7.214 6.549-2.828-3.206A1.75 1.75 0 0 0 9.323 5H6.677a1.75 1.75 0 0 0-1.313.593L2.536 8.799a1 1 0 0 0 1.41 1.418l1.617-1.298-1.232 4.68a1 1 0 0 0 1.818.834L8 11.25l1.849 3.188a1 1 0 0 0 1.817-.835L10.438 8.92l1.618 1.298a1 1 0 0 0 1.41-1.418z" /></g><defs><clipPath id="person-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonFill);
const Memo = memo(ForwardRef);
export default Memo;