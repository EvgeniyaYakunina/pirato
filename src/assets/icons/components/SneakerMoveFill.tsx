import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSneakerMoveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sneaker-move-fill_svg__a)"><path fill="#000" d="M4.425 11.5H2a.5.5 0 1 1 0-1h2.425a.5.5 0 0 1 0 1m2 1H3a.5.5 0 0 0 0 1h3.425a.5.5 0 1 0 0-1m8.023-2.086-1.79-.894A2.98 2.98 0 0 1 11 6.837V5a.5.5 0 0 0-.496-.5A3.003 3.003 0 0 1 7.5 1.504a.5.5 0 0 0-.802-.402L2.82 4.042a.25.25 0 0 0-.025.376l3.215 3.215a.51.51 0 0 1 .037.693.5.5 0 0 1-.732.027L2.002 5.04a.25.25 0 0 0-.403.068 1 1 0 0 0 .195 1.139L8.9 13.354a.5.5 0 0 0 .354.146H14a1 1 0 0 0 1-1v-1.191a.99.99 0 0 0-.553-.895" /></g><defs><clipPath id="sneaker-move-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSneakerMoveFill);
const Memo = memo(ForwardRef);
export default Memo;