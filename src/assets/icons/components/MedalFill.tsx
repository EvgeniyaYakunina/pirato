import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMedalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#medal-fill_svg__a)"><path fill="#000" d="M13.5 6a5.499 5.499 0 1 0-9 4.24V15a.5.5 0 0 0 .724.447L8 14.062l2.777 1.389q.106.05.223.049a.5.5 0 0 0 .5-.5v-4.76a5.49 5.49 0 0 0 2-4.24m-10 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m1 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" /></g><defs><clipPath id="medal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMedalFill);
const Memo = memo(ForwardRef);
export default Memo;