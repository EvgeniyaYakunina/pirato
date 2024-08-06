import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberTwoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-two-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M10 11a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.362-.845L9.118 7.5a1.5 1.5 0 0 0-2.232-2 1.5 1.5 0 0 0-.199.274.5.5 0 0 1-.875-.486A2.51 2.51 0 0 1 7.87 4.003a2.5 2.5 0 0 1 1.988 4.17l-.01.01L7.166 11z" /></g><defs><clipPath id="number-two-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberTwoFill);
const Memo = memo(ForwardRef);
export default Memo;