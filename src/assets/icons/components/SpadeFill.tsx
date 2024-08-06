import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpadeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#spade-fill_svg__a)"><path fill="#000" d="M14.5 8.5a3.5 3.5 0 0 1-5.212 3.051l.69 2.305a.5.5 0 0 1-.478.644h-3a.5.5 0 0 1-.479-.644l.692-2.305A3.5 3.5 0 0 1 1.5 8.501c0-2 1.103-3.928 3.188-5.58a14.6 14.6 0 0 1 3.118-1.882.5.5 0 0 1 .385 0 14.6 14.6 0 0 1 3.121 1.882C13.398 4.573 14.5 6.5 14.5 8.5" /></g><defs><clipPath id="spade-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpadeFill);
const Memo = memo(ForwardRef);
export default Memo;