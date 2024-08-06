import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHockeyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hockey-fill_svg__a)"><path fill="#000" d="m9.369 7.676 4.25-5a.5.5 0 0 1 .762.648l-4.25 5a.501.501 0 0 1-.762-.648M15 10.5v2a1 1 0 0 1-1 1h-3.269a1 1 0 0 1-.762-.352L1.62 3.324a.5.5 0 0 1 .762-.648l5.8 6.824H14a1 1 0 0 1 1 1m-1 0h-1v2h1zm-6.794.941a.25.25 0 0 1 0 .324l-1.175 1.383a1 1 0 0 1-.762.352H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3.44a.25.25 0 0 1 .188.088zM3 10.501H2v2h1z" /></g><defs><clipPath id="hockey-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHockeyFill);
const Memo = memo(ForwardRef);
export default Memo;