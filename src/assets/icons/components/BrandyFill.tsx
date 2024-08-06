import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBrandyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#brandy-fill_svg__a)"><path fill="#000" d="M14 5.5a5.98 5.98 0 0 0-.97-3.273.5.5 0 0 0-.42-.227H3.39a.5.5 0 0 0-.42.227A6 6 0 0 0 2 5.5a6.007 6.007 0 0 0 5.5 5.979V13.5h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2.021A6.01 6.01 0 0 0 14 5.5M3.669 3h8.662a5 5 0 0 1 .644 2h-9.95a5 5 0 0 1 .644-2" /></g><defs><clipPath id="brandy-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBrandyFill);
const Memo = memo(ForwardRef);
export default Memo;