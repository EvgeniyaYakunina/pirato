import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLinkedinLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#linkedin-logo-fill_svg__a)"><path fill="#000" d="M13.5 1.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M6 11a.5.5 0 0 1-1 0V7a.5.5 0 1 1 1 0zm-.5-5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m6 5a.5.5 0 0 1-1 0V8.75a1.25 1.25 0 0 0-2.5 0V11a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .987-.111A2.25 2.25 0 0 1 11.5 8.75z" /></g><defs><clipPath id="linkedin-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLinkedinLogoFill);
const Memo = memo(ForwardRef);
export default Memo;