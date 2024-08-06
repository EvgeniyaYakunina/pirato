import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgToteSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tote-simple-fill_svg__a)"><path fill="#000" d="M14.75 4.338A1 1 0 0 0 13.995 4H11a3 3 0 0 0-6 0H2.005a1.01 1.01 0 0 0-.956.701 1 1 0 0 0-.039.417l.891 7.5a1 1 0 0 0 1 .882h10.203a1 1 0 0 0 1-.883l.892-7.5a1 1 0 0 0-.246-.78M8 2a2 2 0 0 1 2 2H6a2 2 0 0 1 2-2" /></g><defs><clipPath id="tote-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgToteSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;