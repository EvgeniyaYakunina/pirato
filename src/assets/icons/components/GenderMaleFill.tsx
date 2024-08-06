import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGenderMaleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gender-male-fill_svg__a)"><path fill="#000" d="M9.5 8.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m4-6.25v11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m-1.5 2a.5.5 0 0 0-.5-.5h-2a.5.5 0 1 0 0 1h.793L9.168 6.125a3.255 3.255 0 1 0 .707.71L11 5.708V6.5a.5.5 0 0 0 1 0z" /></g><defs><clipPath id="gender-male-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGenderMaleFill);
const Memo = memo(ForwardRef);
export default Memo;