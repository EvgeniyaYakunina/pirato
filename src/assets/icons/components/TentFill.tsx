import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTentFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tent-fill_svg__a)"><path fill="#000" d="m15.957 11.797-4-9A.5.5 0 0 0 11.5 2.5h-7a.5.5 0 0 0-.457.297v.007l-4 8.993A.5.5 0 0 0 .5 12.5h15a.5.5 0 0 0 .457-.703M4 11.5H1.27L4 5.356zm1 0V5.356L7.73 11.5z" /></g><defs><clipPath id="tent-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTentFill);
const Memo = memo(ForwardRef);
export default Memo;