import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChurchFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#church-fill_svg__a)"><path fill="#000" d="M14.258 9.071 12 7.717V6.5a.5.5 0 0 0-.25-.437L8.5 4.21V3h1a.5.5 0 1 0 0-1h-1V1a.5.5 0 0 0-1 0v1h-1a.5.5 0 1 0 0 1h1v1.21L4.25 6.066a.5.5 0 0 0-.25.437V7.72L1.742 9.071A.5.5 0 0 0 1.5 9.5v4a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-3a1 1 0 0 1 2 0v3a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.242-.429M4 13H2.5V9.783l1.5-.9zm9.5 0H12V8.883l1.5.9z" /></g><defs><clipPath id="church-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChurchFill);
const Memo = memo(ForwardRef);
export default Memo;