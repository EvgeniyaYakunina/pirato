import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgParkFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#park-fill_svg__a)"><path fill="#000" d="M14.5 12h-2v-1.5H14a.5.5 0 0 0 .485-.621l-2-8a.5.5 0 0 0-.97 0l-2 8a.5.5 0 0 0 .485.62h1.5V12h-4v-1H8a.5.5 0 1 0 0-1h-.5V9H8a.5.5 0 1 0 0-1H2.5a.5.5 0 1 0 0 1H3v1h-.5a.5.5 0 1 0 0 1H3v1H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1m-8 0H4v-1h2.5zm0-2H4V9h2.5zm.75-4a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m0-2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></g><defs><clipPath id="park-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgParkFill);
const Memo = memo(ForwardRef);
export default Memo;