import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-minus-fill_svg__a)"><path fill="#000" d="M12.383 12.178A.5.5 0 0 1 12 13H1.5a.5.5 0 0 1-.383-.822c.934-1.111 2.095-1.9 3.386-2.323a4.25 4.25 0 1 1 4.494 0c1.29.423 2.452 1.212 3.386 2.323M15.5 8h-3a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1" /></g><defs><clipPath id="user-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserMinusFill);
const Memo = memo(ForwardRef);
export default Memo;