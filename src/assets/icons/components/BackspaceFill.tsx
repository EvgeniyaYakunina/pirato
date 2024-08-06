import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBackspaceFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#backspace-fill_svg__a)"><path fill="#000" d="M13.5 2.5H4.283a1.01 1.01 0 0 0-.857.486L.57 7.742a.5.5 0 0 0 0 .516l2.855 4.756a1.01 1.01 0 0 0 .857.486H13.5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-3.146 6.646a.5.5 0 0 1-.708.708L8.5 8.707 7.353 9.854a.5.5 0 0 1-.707-.708L7.793 8 6.646 6.854a.5.5 0 0 1 .707-.708L8.5 7.293l1.146-1.147a.5.5 0 0 1 .708.708L9.207 8z" /></g><defs><clipPath id="backspace-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBackspaceFill);
const Memo = memo(ForwardRef);
export default Memo;