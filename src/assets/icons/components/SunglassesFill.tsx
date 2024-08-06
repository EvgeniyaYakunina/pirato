import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSunglassesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sunglasses-fill_svg__a)"><path fill="#000" d="M12.5 2.5a.5.5 0 0 0 0 1 1 1 0 0 1 1 1V8h-11V4.5a1 1 0 0 1 1-1 .5.5 0 1 0 0-1 2 2 0 0 0-2 2v5.75a2.75 2.75 0 0 0 5.5 0V9h2v1.25a2.75 2.75 0 0 0 5.5 0V4.5a2 2 0 0 0-2-2m-6.799 8.701a.5.5 0 0 1-.707 0L3.646 9.854a.5.5 0 1 1 .708-.708L5.7 10.494a.5.5 0 0 1 0 .707m7.5 0a.5.5 0 0 1-.707 0l-1.348-1.347a.5.5 0 0 1 .708-.708l1.347 1.348a.5.5 0 0 1 0 .707" /></g><defs><clipPath id="sunglasses-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSunglassesFill);
const Memo = memo(ForwardRef);
export default Memo;