import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextHTwoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-h-two-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-5 8a.5.5 0 0 1-1 0V8H4.5v2a.5.5 0 0 1-1 0V5a.5.5 0 1 1 1 0v2H7V5a.5.5 0 1 1 1 0zm4 1.5H9.5a.5.5 0 0 1-.4-.8l2.25-3a.749.749 0 0 0-.7-1.204.75.75 0 0 0-.497.3.8.8 0 0 0-.161.3.5.5 0 1 1-.98-.198 1.76 1.76 0 1 1 3.137 1.403L10.5 10.5H12a.5.5 0 0 1 0 1" /></g><defs><clipPath id="text-h-two-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextHTwoFill);
const Memo = memo(ForwardRef);
export default Memo;