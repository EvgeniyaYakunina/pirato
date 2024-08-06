import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlagFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flag-fill_svg__a)"><path fill="#000" d="M14.5 3.5V11a.5.5 0 0 1-.172.375c-.955.827-1.869 1.125-2.74 1.125-1.181 0-2.285-.546-3.312-1.053-1.66-.822-3.102-1.534-4.776-.211V14a.5.5 0 0 1-1 0V3.5a.5.5 0 0 1 .173-.375c2.25-1.949 4.27-.95 6.05-.07 1.714.849 3.201 1.583 4.95.07a.5.5 0 0 1 .827.375" /></g><defs><clipPath id="flag-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlagFill);
const Memo = memo(ForwardRef);
export default Memo;