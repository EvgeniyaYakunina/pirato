import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhoneDisconnectFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#phone-disconnect-fill_svg__a)"><path fill="#000" d="M14.768 10.115a1 1 0 0 1-1.15.316l-3.062-1.087-.018-.006a1 1 0 0 1-.607-.725l-.388-1.86a4.78 4.78 0 0 0-3.105.008l-.37 1.845a1 1 0 0 1-.608.733l-.019.007L2.38 10.43a.99.99 0 0 1-1.146-.315C.156 8.728.276 6.884 1.526 5.634c3.51-3.51 9.437-3.51 12.949 0 1.249 1.25 1.37 3.092.293 4.481M13.5 12h-11a.5.5 0 1 0 0 1h11a.5.5 0 1 0 0-1" /></g><defs><clipPath id="phone-disconnect-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPhoneDisconnectFill);
const Memo = memo(ForwardRef);
export default Memo;