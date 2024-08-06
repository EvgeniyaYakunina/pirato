import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhoneOutgoingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#phone-outgoing-fill_svg__a)"><path fill="#000" d="M9.146 6.854a.5.5 0 0 1 0-.708L11.293 4H10a.5.5 0 1 1 0-1h2.5a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.707L9.854 6.854a.5.5 0 0 1-.708 0m4.25 3.55-2.944-1.32-.008-.003a1 1 0 0 0-.995.122L7.929 10.5c-.963-.468-1.958-1.456-2.426-2.407L6.8 6.549l.036-.049a1 1 0 0 0 .082-.94v-.008l-1.323-2.95a1 1 0 0 0-1.038-.595A3.516 3.516 0 0 0 1.5 5.5c0 4.962 4.038 9 9 9a3.52 3.52 0 0 0 3.492-3.058 1 1 0 0 0-.594-1.038z" /></g><defs><clipPath id="phone-outgoing-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPhoneOutgoingFill);
const Memo = memo(ForwardRef);
export default Memo;