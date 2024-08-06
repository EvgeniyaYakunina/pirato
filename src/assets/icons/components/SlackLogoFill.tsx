import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSlackLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#slack-logo-fill_svg__a)"><path fill="#000" d="M13.82 8a2 2 0 0 0-2.32-3.23V3.5A1.999 1.999 0 0 0 8 2.18 2 2 0 0 0 4.77 4.5H3.5A2 2 0 0 0 2.18 8a2 2 0 0 0 2.32 3.23v1.27A2 2 0 0 0 8 13.82a2 2 0 0 0 3.23-2.32h1.27A1.999 1.999 0 0 0 13.82 8M5.5 3.5a1 1 0 0 1 2 0v1h-1a1 1 0 0 1-1-1m-3 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h-4a1 1 0 0 1-1-1m8 6a1 1 0 1 1-2 0v-1h1a1 1 0 0 1 1 1m2-2h-3a1 1 0 0 1-1-1v-1h4a1 1 0 1 1 0 2" /></g><defs><clipPath id="slack-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSlackLogoFill);
const Memo = memo(ForwardRef);
export default Memo;