import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPintGlassFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pint-glass-fill_svg__a)"><path fill="#000" d="M12.875 1.668A.5.5 0 0 0 12.5 1.5h-9a.5.5 0 0 0-.496.563L4.45 14.125a1 1 0 0 0 .993.875h5.112a1 1 0 0 0 .994-.88l1.446-12.057a.5.5 0 0 0-.12-.395m-.937.832L11.756 4H4.244l-.181-1.5z" /></g><defs><clipPath id="pint-glass-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPintGlassFill);
const Memo = memo(ForwardRef);
export default Memo;