import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStoolFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stool-fill_svg__a)"><path fill="#000" d="M12.5 4V2.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1V4a1 1 0 0 0 1 1h.415l-1.409 8.922a.5.5 0 0 0 .987.156L4.98 11h6.04l.486 3.078a.5.5 0 1 0 .988-.156L11.085 5h.415a1 1 0 0 0 1-1m-1.638 6H5.138l.79-5h4.145z" /></g><defs><clipPath id="stool-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStoolFill);
const Memo = memo(ForwardRef);
export default Memo;