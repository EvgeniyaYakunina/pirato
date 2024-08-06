import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKnifeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#knife-fill_svg__a)"><path fill="#000" d="M14.75 3.062a1.562 1.562 0 0 0-2.664-1.103L8.948 5.096 1.146 12.9a.5.5 0 0 0 .242.84c.741.172 1.5.26 2.262.26 2.06 0 4.12-.638 6.059-1.89 1.985-1.28 3.137-2.738 3.187-2.8a.5.5 0 0 0-.04-.661l-1.524-1.524 2.961-2.962a1.55 1.55 0 0 0 .457-1.1m-5.61 8.225c-2.152 1.382-4.372 1.933-6.61 1.644l6.595-6.597 2.693 2.693a13.8 13.8 0 0 1-2.679 2.26" /></g><defs><clipPath id="knife-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgKnifeFill);
const Memo = memo(ForwardRef);
export default Memo;