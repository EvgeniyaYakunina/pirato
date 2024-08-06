import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCarProfileFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#car-profile-fill_svg__a)"><path fill="#000" d="M15 7h-1.793L10.5 4.293A1 1 0 0 0 9.793 4H2.768a1 1 0 0 0-.83.445L.083 7.223A.5.5 0 0 0 0 7.5v3a1 1 0 0 0 1 1h1.063a2 2 0 0 0 3.875 0h4.125a2 2 0 0 0 3.874 0H15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1M2.768 5h7.025l2 2H1.438zM4 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" /></g><defs><clipPath id="car-profile-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCarProfileFill);
const Memo = memo(ForwardRef);
export default Memo;