import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGenderFemaleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gender-female-fill_svg__a)"><path fill="#000" d="M8 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m5.5-6.5v11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m-5 8.5V9.964a3.5 3.5 0 1 0-1 0V11H6a.5.5 0 0 0 0 1h1.5v1a.5.5 0 0 0 1 0v-1H10a.5.5 0 0 0 0-1z" /></g><defs><clipPath id="gender-female-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGenderFemaleFill);
const Memo = memo(ForwardRef);
export default Memo;