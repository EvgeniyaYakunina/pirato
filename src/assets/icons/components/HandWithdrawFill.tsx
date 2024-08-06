import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandWithdrawFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hand-withdraw-fill_svg__a)"><path fill="#000" d="M8 3.5H7V1a.5.5 0 0 1 1 0zm4 4.226V4.5a1 1 0 0 0-1-1H8v3.793l1.146-1.147a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7 7.293V3.5H4a1 1 0 0 0-1 1v8a.5.5 0 0 0 .5.5h4.669q.03.063.065.125l.015.024 1.392 2.125a.5.5 0 0 0 .836-.548l-1.383-2.112a.75.75 0 1 1 1.32-.715l.668 1.02a.5.5 0 0 0 .918-.275V9a4.68 4.68 0 0 1 1.5 3.418V15a.5.5 0 0 0 1 0v-2.584a5.68 5.68 0 0 0-2.5-4.69" /></g><defs><clipPath id="hand-withdraw-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandWithdrawFill);
const Memo = memo(ForwardRef);
export default Memo;