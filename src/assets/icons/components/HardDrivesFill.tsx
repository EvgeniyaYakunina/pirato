import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHardDrivesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#hard-drives-fill_svg__a)"><path d="M13 2.5H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-1.75 3.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M13 8.5H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-1.75 3.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="hard-drives-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHardDrivesFill);
const Memo = memo(ForwardRef);
export default Memo;