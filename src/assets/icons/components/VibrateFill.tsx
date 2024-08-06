import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVibrateFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#vibrate-fill_svg__a)"><path d="M10 2H6a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 6 14h4a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10 2M13 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5A.5.5 0 0 0 13 5M15 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3A.5.5 0 0 0 15 6M3 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5A.5.5 0 0 0 3 5M1 6a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3A.5.5 0 0 0 1 6" /></g><defs><clipPath id="vibrate-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVibrateFill);
const Memo = memo(ForwardRef);
export default Memo;