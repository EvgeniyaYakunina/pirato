import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhoneTransferFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#phone-transfer-fill_svg__a)"><path fill="#000" d="M8.5 4.5A.5.5 0 0 1 9 4h3.293l-1.147-1.146a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L12.293 5H9a.5.5 0 0 1-.5-.5m4.898 5.904-2.945-1.32-.007-.003a1 1 0 0 0-.995.122L7.929 10.5c-.963-.468-1.958-1.456-2.426-2.407L6.8 6.55l.036-.048a1 1 0 0 0 .082-.942v-.007l-1.323-2.95a1 1 0 0 0-1.038-.594A3.515 3.515 0 0 0 1.5 5.5c0 4.963 4.038 9 9 9a3.515 3.515 0 0 0 3.492-3.057 1 1 0 0 0-.594-1.04" /></g><defs><clipPath id="phone-transfer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPhoneTransferFill);
const Memo = memo(ForwardRef);
export default Memo;