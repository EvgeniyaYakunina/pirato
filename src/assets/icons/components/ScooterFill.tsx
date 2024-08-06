import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScooterFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#scooter-fill_svg__a)"><path fill="#000" d="M15.25 10.75a2 2 0 1 1-3.086-1.678l-.563-1.68-3.216 3.925A.5.5 0 0 1 8 11.5H4.604a2 2 0 1 1 .13-1h3.03l3.465-4.23L10.14 3H8.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .474.342l2.139 6.413a2 2 0 0 1 1.551.58 2 2 0 0 1 .586 1.415" /></g><defs><clipPath id="scooter-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgScooterFill);
const Memo = memo(ForwardRef);
export default Memo;