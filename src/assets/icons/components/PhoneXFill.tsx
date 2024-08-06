import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhoneXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#phone-x-fill_svg__a)"><path fill="#000" d="M9.146 6.146 10.293 5 9.146 3.854a.5.5 0 1 1 .708-.708L11 4.293l1.146-1.147a.5.5 0 1 1 .708.708L11.708 5l1.146 1.146a.5.5 0 0 1-.708.708L11 5.707 9.854 6.854a.5.5 0 1 1-.708-.708m4.25 4.258-2.944-1.32-.008-.003a1 1 0 0 0-.995.122L7.929 10.5c-.963-.468-1.958-1.456-2.426-2.407L6.8 6.549l.036-.049a1 1 0 0 0 .082-.94v-.008l-1.323-2.95a1 1 0 0 0-1.038-.595A3.516 3.516 0 0 0 1.5 5.5c0 4.962 4.038 9 9 9a3.52 3.52 0 0 0 3.492-3.058 1 1 0 0 0-.594-1.038z" /></g><defs><clipPath id="phone-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPhoneXFill);
const Memo = memo(ForwardRef);
export default Memo;