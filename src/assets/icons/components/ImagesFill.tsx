import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgImagesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#images-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-9a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-2.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m.75 8h-9v-7h1v5a1 1 0 0 0 1 1h7zm2-2h-9V7.543l1.896-1.897a.5.5 0 0 1 .708 0l3.103 3.104 1.605-1.604a.5.5 0 0 1 .707 0l.981.983z" /></g><defs><clipPath id="images-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgImagesFill);
const Memo = memo(ForwardRef);
export default Memo;