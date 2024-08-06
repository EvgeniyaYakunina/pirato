import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGavelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gavel-fill_svg__a)"><path fill="#000" d="M3.293 6.207a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.414 1.415l-4 4a1 1 0 0 1-1.414 0m11.915 1.085a1 1 0 0 0-1.415 0l-4 4a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415m-2.195-.987L9.695 2.987a.25.25 0 0 0-.354 0L5.487 6.84a.25.25 0 0 0 0 .353l.95.952-4.644 4.647a1 1 0 0 0 1.414 1.414l4.647-4.645.952.952a.25.25 0 0 0 .353 0l3.854-3.853a.25.25 0 0 0 0-.356" /></g><defs><clipPath id="gavel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGavelFill);
const Memo = memo(ForwardRef);
export default Memo;